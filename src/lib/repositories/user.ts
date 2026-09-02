import { prisma } from "@/lib/prisma";
import { decryptField, encryptField, hashForLookup } from "@/lib/encryption";
import type { User, UserRole } from "@/generated/prisma";

/**
 * User 리포지토리
 * ────────────────────────────────────────────────────────────────
 * email 암호화/복호화와 emailHash 조회용 해시 생성을 이 파일 안에 캡슐화합니다.
 * 이 파일 밖의 코드(Server Action, Auth.js 콜백 등)는 항상 평문 이메일만
 * 주고받으면 되고, 암호화가 적용된다는 사실을 몰라도 됩니다.
 *
 * 비밀번호 해시(bcrypt)는 이 레이어가 생성하지 않습니다 — 호출자가
 * bcrypt.hash()로 미리 해시한 값을 넘겨줍니다. 이렇게 나눈 이유는 bcrypt
 * 라운드 수 같은 정책 결정을 인증 레이어(Step 6)가 갖도록 하기 위함입니다.
 */

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** 화면 표시/세션에 담아도 안전한 사용자 형태 (passwordHash 제외, email은 복호화됨) */
export type SafeUser = Omit<User, "passwordHash" | "email"> & {
  email: string;
};

function toSafeUser(user: User): SafeUser {
  // 필드를 destructure로 "빼는" 대신 명시적으로 나열합니다. User에 민감한
  // 필드가 추가되더라도 여기 직접 추가하기 전까지는 자동으로 노출되지 않습니다.
  return {
    id: user.id,
    emailHash: user.emailHash,
    name: user.name,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    email: decryptField(user.email),
  };
}

export interface CreateUserInput {
  email: string;
  /** bcrypt.hash(...) 결과. 이 함수는 해싱을 하지 않고 그대로 저장합니다. */
  passwordHash: string;
  name: string;
  role?: UserRole;
}

export async function createUser(input: CreateUserInput): Promise<SafeUser> {
  const normalized = normalizeEmail(input.email);
  const user = await prisma.user.create({
    data: {
      email: encryptField(normalized),
      emailHash: hashForLookup(normalized),
      passwordHash: input.passwordHash,
      name: input.name,
      role: input.role,
    },
  });
  return toSafeUser(user);
}

export async function findUserById(id: string): Promise<SafeUser | null> {
  const user = await prisma.user.findUnique({ where: { id } });
  return user ? toSafeUser(user) : null;
}

/** 프로필 표시 등 일반적인 용도. 비밀번호 검증에는 findUserForAuth를 사용하세요. */
export async function findUserByEmail(email: string): Promise<SafeUser | null> {
  const user = await prisma.user.findUnique({
    where: { emailHash: hashForLookup(normalizeEmail(email)) },
  });
  return user ? toSafeUser(user) : null;
}

/**
 * 로그인 검증 전용 함수입니다. bcrypt.compare()에 넘길 passwordHash를 포함해
 * 반환합니다. Auth.js Credentials provider(Step 6) 이외의 곳에서는 사용하지
 * 마세요 — 다른 용도에는 findUserByEmail / findUserById를 사용합니다.
 */
export async function findUserForAuth(email: string): Promise<{
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: UserRole;
} | null> {
  const user = await prisma.user.findUnique({
    where: { emailHash: hashForLookup(normalizeEmail(email)) },
  });
  if (!user) return null;

  return {
    id: user.id,
    email: decryptField(user.email),
    passwordHash: user.passwordHash,
    name: user.name,
    role: user.role,
  };
}

export async function updateUserProfile(
  id: string,
  data: { name?: string; email?: string },
): Promise<SafeUser> {
  const updateData: { name?: string; email?: string; emailHash?: string } = {};

  if (data.name !== undefined) {
    updateData.name = data.name;
  }
  if (data.email !== undefined) {
    const normalized = normalizeEmail(data.email);
    updateData.email = encryptField(normalized);
    updateData.emailHash = hashForLookup(normalized);
  }

  const user = await prisma.user.update({ where: { id }, data: updateData });
  return toSafeUser(user);
}

/** 새 비밀번호는 호출자가 이미 bcrypt로 해시한 값이어야 합니다. */
export async function updateUserPassword(id: string, newPasswordHash: string): Promise<void> {
  await prisma.user.update({ where: { id }, data: { passwordHash: newPasswordHash } });
}
