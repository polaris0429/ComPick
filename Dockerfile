# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────────────────────────
# 1) deps: 의존성만 설치 (package*.json이 안 바뀌면 캐시 재사용)
# ─────────────────────────────────────────────────────────────────
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ─────────────────────────────────────────────────────────────────
# 2) builder: Prisma Client 생성 + Next.js 빌드
# ─────────────────────────────────────────────────────────────────
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* 값은 `next build` 시점에 클라이언트 번들에 그대로
# inline되므로, 런타임 환경 변수가 아니라 빌드 인자로 전달받아야 합니다.
ARG NEXT_PUBLIC_TOSS_CLIENT_KEY=""
ENV NEXT_PUBLIC_TOSS_CLIENT_KEY=${NEXT_PUBLIC_TOSS_CLIENT_KEY}

# prisma generate는 DB 접속 없이 schema.prisma만으로 동작하므로
# DATABASE_URL이 없어도 빌드 단계에서 안전하게 실행됩니다.
RUN DATABASE_URL=postgresql://build:build@localhost:5432/build npx prisma generate

ENV NEXT_TELEMETRY_DISABLED=1
RUN DATABASE_URL=postgresql://build:build@localhost:5432/build npm run build -- --webpack

# ─────────────────────────────────────────────────────────────────
# 3) runner: standalone 산출물만 담은 최소 런타임 이미지
# ─────────────────────────────────────────────────────────────────
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
