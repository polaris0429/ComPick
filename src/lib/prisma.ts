import { PrismaClient } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

/**
 * Prisma 7부터 schema.prisma의 datasource 블록에 `url`을 더 이상 쓸 수
 * 없습니다 (CLI용 연결 정보는 prisma.config.ts로, 런타임 연결은 driver
 * adapter로 완전히 분리되었습니다). 그래서 PrismaClient가 연결 문자열을
 * 저절로 찾지 못하고, 아래처럼 @prisma/adapter-pg에 명시적으로 넘겨줘야
 * 합니다.
 *
 * Next.js 개발 서버는 파일을 저장할 때마다 모듈을 다시 로드합니다. 매번 새
 * PrismaClient를 생성하면 DB 커넥션이 계속 쌓이므로, globalThis에 캐싱해
 * 인스턴스를 하나만 유지합니다. 프로덕션(서버리스가 아닌 Docker 컨테이너)
 * 빌드에서는 모듈이 한 번만 로드되므로 이 캐싱이 없어도 되지만, 있어도
 * 무해합니다.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL 환경 변수가 설정되지 않았습니다. .env를 확인하세요. " +
        "예: DATABASE_URL=postgresql://compick:compick_dev_password@localhost:5432/compick?schema=public",
    );
  }

  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
