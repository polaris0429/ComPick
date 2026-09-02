# Changelog

이 프로젝트의 모든 주요 변경 사항을 이 파일에 기록합니다.
형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/)를 따르고,
버전 관리는 [Semantic Versioning](https://semver.org/lang/ko/)을 따릅니다.

> `.cursorrules`에 따라, 코드베이스를 수정할 때마다 아래 `[Unreleased]` 섹션을
> 그 즉시 갱신합니다. 정식 배포 시점에 버전 태그로 승격시킵니다.

## [Unreleased]

### Added — Step 1: 프로젝트 구조

- Next.js 16(App Router, Turbopack) + TypeScript 5.9 프로젝트 스캐폴딩
- Tailwind CSS v4 CSS-first 설정 및 ComPick 디자인 토큰(`globals.css`의 `@theme`) — 구리/회로 기판 톤의 브랜드 컬러, 호환성 배지용 signal/alert 시맨틱 컬러
- Pretendard Variable 폰트 셀프 호스팅(`next/font/local`) — 외부 CDN 의존 없이 Docker 빌드에서도 안정적으로 동작
- `cn()` 클래스 병합 유틸리티 (`clsx` + `tailwind-merge`)
- ESLint 9 flat config(`eslint.config.mjs`, `eslint-config-next`) — Next.js 16의 `next lint` 제거에 대응
- `docker-compose.yml`: PostgreSQL 18(`db`) + Next.js 앱(`app`) 서비스, 헬스체크, 네임드 볼륨
- `Dockerfile`: deps → builder → runner 멀티스테이지, `output: "standalone"` 기반 최소 런타임 이미지, `NEXT_PUBLIC_*` 빌드 인자 처리
- `prisma/schema.prisma` 뼈대(datasource/generator만 정의 — 모델은 Step 2)
- 홈 placeholder 페이지: 브랜드 히어로 + 6단계 개발 로드맵 트래커
- `README.md`, `.cursorrules`, `.env.example`, `.gitignore`, `.dockerignore` 작성
- `npm install` / `npm run lint` / `npm run typecheck` / `npm run build`(standalone 산출물 포함) 정상 동작 확인

### Added — Step 2: 데이터베이스 설계

- `prisma.config.ts` 추가 (Prisma 7 필수 CLI 설정 — schema 위치, 마이그레이션 경로, seed 명령, datasource URL)
- `prisma/schema.prisma` 전체 모델: `User`(email 암호화 + emailHash 조회 인덱스), `Category`, `Product`(JSONB `attributes`), `PrebuiltPC`/`PrebuiltPCComponent`, `Order`/`OrderItem`. generator `output`을 `src/generated/prisma`로 지정해 Next.js standalone 트레이싱 이슈를 회피
- `src/lib/encryption.ts`: AES-256-GCM 필드 암호화 + HMAC-SHA256 조회용 해시. HKDF로 암호화 키와 해시 키를 하나의 `FIELD_ENCRYPTION_KEY`에서 용도별로 분리
- `src/lib/repositories/user.ts`: `createUser` / `findUserByEmail` / `findUserForAuth` / `updateUserProfile` / `updateUserPassword` — email 암호화를 캡슐화해 나머지 코드는 항상 평문만 다루도록 함
- `src/lib/prisma.ts`: PrismaClient 싱글턴 (Next.js dev 핫리로드 시 커넥션 중복 생성 방지)
- `src/types/product-attributes.ts`: 카테고리 8종(CPU/메인보드/RAM/GPU/저장장치/파워/케이스/쿨러)별 JSONB 속성 타입 계약 — Step 3 호환성 로직과 Step 4 필터 UI가 재사용 예정
- `prisma/seed.ts`: 카테고리 8종 + 부품 24종 + 완제품 PC 2종 더미 데이터. AM5/LGA1851 소켓 계열과, 케이스 최대 쿨러 높이를 초과하는 쿨러 등 Step 3 호환성 검증이 실제로 갈릴 반례 조합을 의도적으로 포함
- `dotenv` 의존성 추가 (Prisma 7 CLI가 더 이상 `.env`를 자동 로드하지 않아 `prisma.config.ts`가 명시적으로 로드)
- README에 "데이터 모델 & 필드 레벨 암호화" 절 추가

### Verified — Step 2

- 암호화 유틸리티: 왕복 정확성, 비결정적 암호화(IV), 결정적 해시, 변조 감지(GCM auth tag), 키 누락 시 에러 메시지를 독립 스크립트로 검증
- `schema.prisma`를 동등한 SQL DDL로 변환해 실제 PostgreSQL에 적용 — 전체 테이블/enum/FK/인덱스 생성 성공
- 위 PostgreSQL에 실제로 암호화된 이메일을 저장·`emailHash`로 조회·복호화하는 전 과정과, 카테고리별 JSONB `attributes`를 저장 후 `->>`/숫자 캐스팅/배열 `?` 연산자로 필터링하는(Step 3이 쓸 패턴) 전 과정을 통합 테스트로 확인
- `prisma/seed.ts`의 완제품→부품 이름 참조 무결성(오타로 인한 누락 참조 없음), 상품명 중복 없음을 정적 검증
- `src/generated/prisma`를 흉내낸 임시 스텁으로 `prisma.ts`/`user.ts`/`seed.ts`의 Prisma 호출부 타입을 검증 후 스텁은 삭제(이 저장소에는 포함되지 않음)

### Notes

- ESLint는 `eslint-plugin-react`의 ESLint 10 미지원(런타임 오류 확인됨)으로 인해 9.39.5로 고정
- `prisma`/`@prisma/client`는 8.0.0 RC 대신 안정 버전 7.10.0으로 고정 (RC 관련 상세는 README의 "알려진 이슈" 참고)
- TypeScript는 `typescript-eslint`의 지원 범위(`<6.1.0`)에 맞춰 7.x 대신 5.9.3으로 고정
- Docker 이미지의 `prisma generate` 단계와 `prisma migrate`는 네트워크가 제한된 검증 환경 특성상 직접 실행 검증은 하지 못함 — 실제 환경에서 최종 확인 필요 (대체 검증 방법은 위 "Verified" 항목 참고)
