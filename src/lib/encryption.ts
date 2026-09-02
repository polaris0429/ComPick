import crypto from "node:crypto";

/**
 * 필드 레벨 암호화
 * ────────────────────────────────────────────────────────────────
 * 이메일처럼 "저장은 암호화하되, 로그인 시 WHERE 절로 조회는 되어야 하는"
 * 값을 다루기 위한 두 가지 원시 함수를 제공합니다.
 *
 *  - encryptField/decryptField: AES-256-GCM. 매 호출마다 랜덤 IV를 사용하므로
 *    같은 평문이라도 암호문이 매번 달라집니다(의미론적으로 안전). DB에는 이
 *    암호문만 저장하고, 화면 표시나 비즈니스 로직에서는 복호화해서 씁니다.
 *
 *  - hashForLookup: HMAC-SHA256. 같은 입력이면 항상 같은 출력이 나오는
 *    "결정적" 해시입니다. AES-GCM 암호문은 매번 달라져서 등호(=) 조회에
 *    쓸 수 없기 때문에, 조회 전용 컬럼(예: User.emailHash)에 이 값을 저장하고
 *    로그인 시 `WHERE emailHash = hashForLookup(입력값)` 형태로 찾습니다.
 *
 * 암호화 키와 해시 키는 절대 같은 바이트를 재사용하지 않고, HKDF로 하나의
 * 마스터 키(FIELD_ENCRYPTION_KEY)에서 용도별로 분리해 파생시킵니다.
 */

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // GCM 권장 nonce 길이 (96bit)
const AUTH_TAG_LENGTH = 16;
const KEY_LENGTH = 32; // AES-256 → 32바이트

let cachedMasterKey: Buffer | null = null;

function getMasterKey(): Buffer {
  if (cachedMasterKey) return cachedMasterKey;

  const raw = process.env.FIELD_ENCRYPTION_KEY;
  if (!raw) {
    throw new Error(
      "FIELD_ENCRYPTION_KEY 환경 변수가 설정되지 않았습니다. " +
        ".env에 base64로 인코딩된 32바이트 키를 설정하세요. 생성 예시: openssl rand -base64 32",
    );
  }

  const key = Buffer.from(raw, "base64");
  if (key.length !== KEY_LENGTH) {
    throw new Error(
      `FIELD_ENCRYPTION_KEY는 base64로 인코딩된 32바이트 키여야 합니다 (디코딩 결과 ${key.length}바이트). ` +
        "생성 예시: openssl rand -base64 32",
    );
  }

  cachedMasterKey = key;
  return key;
}

/** HKDF로 마스터 키에서 용도별 하위 키를 파생합니다 (암호화 키 ≠ 해시 키). */
function deriveKey(purpose: "encrypt" | "hash"): Buffer {
  const masterKey = getMasterKey();
  const derived = crypto.hkdfSync(
    "sha256",
    masterKey,
    Buffer.alloc(0),
    Buffer.from(`compick:field-encryption:${purpose}`, "utf8"),
    KEY_LENGTH,
  );
  return Buffer.from(derived);
}

/**
 * 평문을 암호화해 base64 문자열로 반환합니다.
 * 저장 형식: base64( iv(12B) || authTag(16B) || ciphertext )
 */
export function encryptField(plaintext: string): string {
  const key = deriveKey("encrypt");
  const iv = crypto.randomBytes(IV_LENGTH);

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv, {
    authTagLength: AUTH_TAG_LENGTH,
  });
  const ciphertext = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return Buffer.concat([iv, authTag, ciphertext]).toString("base64");
}

/** encryptField로 암호화된 문자열을 원래 평문으로 복호화합니다. */
export function decryptField(payload: string): string {
  const key = deriveKey("encrypt");
  const raw = Buffer.from(payload, "base64");

  if (raw.length < IV_LENGTH + AUTH_TAG_LENGTH) {
    throw new Error("잘못된 형식의 암호화 값입니다 (길이가 너무 짧음).");
  }

  const iv = raw.subarray(0, IV_LENGTH);
  const authTag = raw.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
  const ciphertext = raw.subarray(IV_LENGTH + AUTH_TAG_LENGTH);

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv, {
    authTagLength: AUTH_TAG_LENGTH,
  });
  decipher.setAuthTag(authTag);

  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return plaintext.toString("utf8");
}

/**
 * 등호 조회가 가능한 결정적 해시를 만듭니다. (예: User.emailHash)
 * 같은 입력 → 항상 같은 출력. 평문 유추를 막기 위해 일반 해시가 아닌
 * 비밀 키 기반 HMAC을 사용합니다.
 */
export function hashForLookup(plaintext: string): string {
  const key = deriveKey("hash");
  return crypto.createHmac("sha256", key).update(plaintext, "utf8").digest("hex");
}
