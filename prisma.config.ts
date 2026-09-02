import "dotenv/config";
import { defineConfig, env } from "prisma/config";

/**
 * Prisma 7부터 CLI(generate/migrate/studio 등)와 런타임 모두
 * schema.prisma의 datasource.url 대신 이 파일의 datasource.url을 사용합니다.
 * dotenv/config를 최상단에서 import해 .env를 명시적으로 불러옵니다.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
