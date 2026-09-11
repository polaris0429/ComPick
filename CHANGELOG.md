# Changelog

이 프로젝트의 모든 주요 변경 사항을 이 파일에 기록합니다.
형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/)를 따르고,
버전 관리는 [Semantic Versioning](https://semver.org/lang/ko/)을 따릅니다.

> `.cursorrules`에 따라, 코드베이스를 수정할 때마다 아래 `[Unreleased]` 섹션을
> 그 즉시 갱신합니다. 정식 배포 시점에 버전 태그로 승격시킵니다.

## [Unreleased]

### Added — 상품 이미지 + 상세 모달

- `src/components/shop/product-image.tsx`: `ProductImage`(카테고리 기반 placeholder 또는 실제 사진) + `ImagePlaceholder`(아이콘 직접 지정, 완제품카드도 공유). 현재 시드 데이터는 전부 `imageUrl`이 없어 placeholder(카테고리 아이콘 + 그리드 배경)가 기본으로 보임 — 실제 사진은 Product.imageUrl을 채우면 그대로 사용됨
- `ProductCard`를 이미지가 상단을 차지하는 구조로 재작성: 이미지 모서리에 띄우는 원형 담기 버튼(Plus/Check 아이콘), 카드 전체 클릭 시 상세 모달 오픈 (담기 버튼은 `stopPropagation`으로 모달 오픈과 분리)
- `src/components/shop/product-detail-modal.tsx`: 큰 이미지 + attributes의 모든 키를 보여주는 전체 스펙(카드에서 생략된 항목 포함) + 가격/담기 버튼. ESC/배경 클릭으로 닫힘
- `src/lib/catalog-config.ts`에 `CATEGORY_ICONS`(category-nav.tsx와 공유로 이동), `ATTRIBUTE_LABELS`(8개 카테고리 전체 속성 키의 라벨/단위 맵, 상세 모달 전용) 추가
- `PrebuiltCard`에도 동일한 이미지 헤더 추가(Package 아이콘 placeholder)로 시각적 일관성 확보

### Fixed — seed 스크립트가 DATABASE_URL을 못 찾는 문제

- `prisma/seed.ts` 최상단에 `import "dotenv/config"` 추가. `prisma.config.ts`는 이미 이 처리를 하고 있었지만 `seed.ts`는 빠져 있었음 — `next dev`/`next build`는 Next.js가 `.env`를 자동으로 읽어주는 반면, `tsx prisma/seed.ts`로 직접 실행하는 스크립트는 아무도 `.env`를 읽어주지 않아 `DATABASE_URL 환경 변수가 설정되지 않았습니다` 에러로 실패하던 것을 실제 재현 후 확인
- `.env`가 있는데도 `npm run prisma:seed`가 이 에러로 죽는다면 이 커밋 이전 버전이니 최신 파일로 갱신하세요

### Added — Step 4: 메인 UI (3단 패널)

- `src/app/page.tsx`를 Step 1의 progress placeholder에서 실제 3단 패널 빌더로 교체. `export const dynamic = "force-dynamic"`으로 가격/재고 변경이 잦은 카탈로그를 빌드 시점에 정적으로 굳히지 않도록 함
- `src/lib/repositories/catalog.ts`: `getCategories` / `getActiveProducts` / `getActivePrebuiltPCs`. `CatalogProduct`가 Step 3의 `SelectedPart`를 확장해 변환 없이 `selectPart()`/`loadPrebuilt()`에 바로 전달 가능
- `src/lib/catalog-config.ts`: 카테고리 8종별로 카드에 보여줄 스펙과 그중 필터 대상 필드를 한 곳에서 정의 (필터 "값"은 하드코딩하지 않고 실제 상품 데이터에서 동적으로 추출)
- `src/lib/format.ts`: 원화 포맷, 할인가 계산, ENUM 값 표시 정리
- `src/components/shop/`: `build-workspace`(상태 오케스트레이션) · `category-nav`(좌) · `product-filters` + `product-grid` + `product-card`(중앙, 부품 탭) · `prebuilt-grid` + `prebuilt-card`(중앙, 완제품 탭) · `quote-panel`(우측 sticky, Step 3 스토어 구독)
- `src/components/ui/`: `button.tsx`, `badge.tsx` 범용 프리미티브
- 결제 버튼은 Step 5 전까지 클릭 시 안내 문구만 표시 (비활성/활성 조건은 이미 실제 로직: 부품 1개 이상 + 호환 에러 없음)
- README에 "메인 UI (3단 패널)" 절 추가

### Verified — Step 4

- `npm run build` 성공 (컴파일 + 타입체크 + Server/Client 컴포넌트 경계 포함). 가짜 `DATABASE_URL`로 모듈 로드까지만 확인 — `force-dynamic`이라 실제 쿼리는 빌드 시점에 실행되지 않음
- 필터(단일/다중 선택 OR, 필드 간 AND)와 정렬(인기순/가격순, 할인가 기준) 로직을 목 데이터 7개 시나리오로 독립 실행 검증
- `src/generated/prisma` 스텁에 `findMany`/`include` 형태를 확장해 `catalog.ts`의 Prisma 호출부 타입 검증 (스텁은 검증 후 삭제, 저장소에 포함되지 않음)
- lint / typecheck 전체 통과. 실제 브라우저에서 데이터가 렌더링되는지는 검증 환경 특성상 확인하지 못함 — README "알려진 이슈" 참고

### Fixed — Prisma 7 driver adapter 필수화 대응

- `prisma/schema.prisma`의 `datasource` 블록에서 `url = env("DATABASE_URL")` 제거 — Prisma 7부터 schema 파일이 이 필드를 지원하지 않음(`npm run prisma:migrate` 실행 시 `P1012` 검증 에러로 실제 확인됨)
- `src/lib/prisma.ts`가 `@prisma/adapter-pg`로 `DATABASE_URL`을 명시적으로 전달하도록 변경. `@prisma/adapter-pg`, `pg`, `@types/pg` 의존성 추가
- README "알려진 이슈"의 이전 안내(잘못된 정보였음)를 정정

### Added — Step 3: 상태 관리 & 호환성 로직

- `src/lib/compatibility/`: 부품 쌍별 순수 검증 함수(`rules.ts`) + 조합 전체를 검증하는 엔진(`checker.ts`). 스펙이 요구한 4가지 축(CPU-메인보드 소켓, 케이스-메인보드 폼팩터, PSU 와트수, 쿨러/GPU 물리적 간섭)에 더해 RAM 규격·슬롯 수, M.2 슬롯 수, 쿨러 냉각 성능(warning)까지 포함
- `src/store/build-store.ts`: `zustand/vanilla` + `persist` 미들웨어 기반 견적 스토어. 부품 선택/제거/완제품 일괄 로드 시 호환성과 가격을 자동 재계산
- README에 "호환성 검증 엔진 & Zustand 스토어" 절 추가, 카테고리당 부품 1개 제한(저장장치 다중 선택 미지원) 알려진 단순화로 명시

### Verified — Step 3

- 호환성 엔진: seed.ts와 동일한 실제 값(입문 게이밍 PC 완제품 조합 등)과, 의도적 반례(소켓 불일치·폼팩터 불일치·쿨러 높이 초과·GPU 길이 초과·라디에이터 크기 초과·PSU 용량 경고·RAM 규격/슬롯 초과) 및 부분 선택·빈 선택 엣지 케이스까지 14개 시나리오를 실제 실행해 확인
- Zustand 스토어: 선택/교체/제거/할인가 계산/clearAll/loadPrebuilt와 그때마다의 호환성 재계산까지 16개 시나리오를 실제 실행해 확인 (persist 미들웨어가 Node/SSR 환경에서도 예외 없이 동작함을 포함)
- lint / typecheck 전체 통과 (스텁을 이용한 검증 방식은 Step 2와 동일, 스텁은 검증 후 삭제)

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
