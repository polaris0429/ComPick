import { PrismaClient } from "@/generated/prisma";

/**
 * Next.js 개발 서버는 파일을 저장할 때마다 모듈을 다시 로드합니다. 매번 새
 * PrismaClient를 생성하면 DB 커넥션이 계속 쌓이므로, globalThis에 캐싱해
 * 인스턴스를 하나만 유지합니다. 프로덕션(서버리스가 아닌 Docker 컨테이너)
 * 빌드에서는 모듈이 한 번만 로드되므로 이 캐싱이 없어도 되지만, 있어도
 * 무해합니다.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
