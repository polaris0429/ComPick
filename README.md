# ComPick (컴픽)

소켓, 용량, 와트수까지 — 부품을 고르는 즉시 호환 여부를 확인하는 맞춤형 조립 PC 쇼핑몰입니다. "다나와 PC 견적"과 유사한 3단 패널(부품 탐색 · 상품 리스트 · 실시간 견적) 경험을 목표로 합니다.

> 현재 상태: **Step 4 / 6 완료** — 좌/중/우 3단 패널 메인 UI + 상품 필터링/정렬. 진행 상황은 [CHANGELOG.md](./CHANGELOG.md)와 아래 [개발 로드맵](#개발-로드맵)을 참고하세요.

## 기술 스택

| 영역 | 기술 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router, Turbopack) |
| 언어 | TypeScript 5.9 |
| 스타일 | Tailwind CSS v4 (CSS-first `@theme`) |
| 상태 관리 | Zustand 5 (persist 미들웨어) |
| DB / ORM | PostgreSQL + Prisma 7 |
| 인증 | Auth.js (next-auth v5) |
| 결제 | 토스페이먼츠 v2 SDK |
| 차트 | Recharts 3 |
| 배포 | Docker / Docker Compose |

버전을 포함한 전체 목록은 [`package.json`](./package.json)을 참고하세요. 이 스캐폴딩은 2026년 8월 기준 npm 레지스트리의 실제 최신 안정 버전을 확인하여 고정했습니다 (버전 선정 이유는 아래 [알려진 이슈](#알려진-이슈--버전-노트) 참고).

## 시작하기

### 사전 요구사항

- Node.js ≥ 22
- Docker / Docker Compose (DB 및 프로덕션형 컨테이너 실행용)

### 로컬 개발 (권장 워크플로)

앱은 로컬에서 핫리로드로 띄우고, DB만 Docker로 띄우는 방식을 권장합니다.

```bash
npm install
cp .env.example .env
# .env를 열어 DATABASE_URL(기본값 그대로 써도 됨)과 FIELD_ENCRYPTION_KEY를 채웁니다.
# FIELD_ENCRYPTION_KEY 생성: openssl rand -base64 32

npm run docker:up         # docker-compose.yml의 db(PostgreSQL) 서비스만 실행

npm run prisma:migrate    # 마이그레이션 생성 + 적용 (최초 실행 시 이름을 물어보면 "init" 등 입력)
npm run prisma:generate   # Prisma Client 생성 → src/generated/prisma
npm run prisma:seed       # 더미 부품 데이터 24종 + 완제품 PC 2종 채우기

npm run dev                # http://localhost:3000
```

> Prisma 7부터 `migrate dev`가 `generate`나 시드를 자동으로 실행하지 않습니다. 위 순서(migrate → generate → seed)대로 각각 명시적으로 실행해야 합니다.

### 전체 스택을 Docker로 실행

DB뿐 아니라 Next.js 앱까지 컨테이너로 띄우고 싶을 때 사용합니다. `Dockerfile`은 deps → builder → runner 3단계 멀티스테이지로 구성되어 있고, `output: "standalone"` 설정으로 런타임 이미지를 최소화합니다.

```bash
npm run docker:up:all      # = docker compose up -d --build
npm run docker:down
```

> ⚠️ `NEXT_PUBLIC_TOSS_CLIENT_KEY`처럼 `NEXT_PUBLIC_` 접두사가 붙은 값은 `next build` 시점에 클라이언트 번들에 고정되므로, `.env`에만 두지 말고 `docker-compose.yml`의 `app.build.args`로도 전달되도록 이미 구성해 두었습니다.

## 데이터 모델 & 필드 레벨 암호화

`prisma/schema.prisma`는 `User` · `Category` · `Product` · `PrebuiltPC`/`PrebuiltPCComponent` · `Order`/`OrderItem` 모델로 구성됩니다.

- **Product.attributes (JSONB)**: 카테고리(CPU/메인보드/RAM/GPU/저장장치/파워/케이스/쿨러)마다 스펙 형태가 다르므로 JSONB 한 필드에 유연하게 담습니다. 형태 계약은 [`src/types/product-attributes.ts`](./src/types/product-attributes.ts)에 정의되어 있고, Step 3의 호환성 검증 로직과 Step 4의 필터 UI가 이 타입을 그대로 재사용할 예정입니다.
- **User.email 암호화**: `email` 컬럼에는 평문이 아니라 [`src/lib/encryption.ts`](./src/lib/encryption.ts)의 AES-256-GCM으로 암호화한 값이 저장됩니다. 문제는 "암호화된 값은 매 저장마다 달라져서 `WHERE email = ...` 조회가 안 된다"는 점인데, 그래서 별도의 `emailHash`(HMAC-SHA256, 결정적 해시) 컬럼을 두어 로그인 등 조회는 이 컬럼으로 합니다. 암호화 키와 해시 키는 하나의 `FIELD_ENCRYPTION_KEY`에서 HKDF로 용도별로 분리해 파생시켜, 같은 키를 두 목적에 재사용하지 않습니다.
- 이 암호화 로직이 실제로 이메일 조회·표시에 자연스럽게 연결되도록 [`src/lib/repositories/user.ts`](./src/lib/repositories/user.ts)에 `createUser` / `findUserByEmail` / `findUserForAuth`(로그인 검증 전용, passwordHash 포함) / `updateUserProfile` 등을 미리 만들어 뒀습니다. Step 6의 Auth.js 연동은 이 리포지토리를 그대로 호출하면 됩니다.
- `prisma/seed.ts`는 User를 다루지 않습니다(스펙상 시드 대상은 "부품 더미 데이터"). 카테고리 8종, 부품 24종(같은 소켓/폼팩터 계열도 있고 Step 3에서 호환성 검증이 실제로 걸릴 반례 조합도 일부러 섞어 넣었습니다), 완제품 PC 2종을 채웁니다.

## 메인 UI (3단 패널)

`/`(홈)가 곧 조립 PC 빌더입니다. 다나와식으로 좌측에서 카테고리를 고르고, 중앙에서 상품을 담고, 우측에서 실시간 견적을 확인합니다.

- **데이터 흐름**: `src/app/page.tsx`(Server Component)가 `getCategories`/`getActiveProducts`/`getActivePrebuiltPCs`(`src/lib/repositories/catalog.ts`)로 한 번에 가져와 `BuildWorkspace`(Client Component)에 내려줍니다. 상품 수가 적어(24개) 필터·정렬은 서버 재요청 없이 클라이언트에서 처리합니다. 가격/재고가 자주 바뀌는 데이터라 `export const dynamic = "force-dynamic"`으로 빌드 시점 정적 스냅샷을 만들지 않습니다.
- **좌측 `CategoryNav`**: 8개 카테고리 + "완제품 PC" 진입점.
- **중앙**: `ProductFilters`(카테고리별 동적 필터 칩 + 인기순/가격순 정렬) + `ProductGrid`(부품 카드) 또는 `PrebuiltGrid`(완제품 카드), 탭으로 전환. 필터 칩의 "값"은 하드코딩하지 않고 그 카테고리 상품 데이터에서 실제로 등장하는 값만 동적으로 뽑습니다(`src/lib/catalog-config.ts`가 "어떤 필드가 필터 대상인지"만 정의).
- **우측 `QuotePanel`**: Step 3의 `useBuildStore`를 그대로 구독하는 sticky 패널. 선택 부품 목록, 정가/할인가 합계, 호환성 배지(정상/확인 필요/불가)와 이슈 메시지, 결제 버튼을 보여줍니다. 결제 버튼은 Step 5 전까지는 클릭 시 "Step 5에서 제공됩니다" 안내만 표시합니다.
- **카탈로그 상품 = 빌드 스토어 부품**: `CatalogProduct`가 Step 3의 `SelectedPart`를 확장하는 형태라, 상품 카드의 "담기" 버튼이 변환 없이 `selectPart(product)`를 그대로 호출합니다. 완제품의 "이 구성으로 시작" 버튼도 마찬가지로 `loadPrebuilt(prebuilt.components)`를 바로 호출합니다.

## 호환성 검증 엔진 & Zustand 스토어

`src/lib/compatibility/`가 순수 함수로 이루어진 검증 엔진이고, `src/store/build-store.ts`가 이를 소비하는 견적(빌드) 상태입니다.

- **규칙(`rules.ts`)**: 부품 쌍 하나당 함수 하나(`checkCpuMotherboardSocket`, `checkGpuCaseLength` 등). 스펙 요구사항 4가지(소켓 / 폼팩터 / 파워 와트수 / 물리적 간섭)에 더해, 실제로 자주 문제되는 RAM 규격·슬롯 수 초과, M.2 슬롯 수 초과, 쿨러 냉각 성능 부족(warning)까지 포함되어 있습니다.
- **에러 vs 경고**: 장착이 물리적으로 불가능하면 `error`(예: 소켓 불일치, 폼팩터 불일치, 치수 초과), 장착은 되지만 권장 사양 미달이면 `warning`(예: PSU 용량이 GPU 권장치보다 낮음)으로 구분합니다. `isCompatible`은 `error`가 하나라도 있으면 `false`, `warning`만 있으면 `true`입니다.
- **엔진(`checker.ts`)**: 선택된 부품 조합에서 관련 부품이 "둘 다 선택되었을 때만" 해당 규칙을 실행합니다. 소비전력은 `CPU TDP + GPU 실측 소비전력 + 기본 여유치(80W)`로 추정합니다.
- **스토어(`build-store.ts`)**: `zustand/vanilla`의 `createStore` + `persist` 미들웨어로 localStorage에 견적을 저장합니다. 카테고리별로 부품을 하나씩 선택/교체/제거할 수 있고, 매번 자동으로 호환성과 가격(정가/할인가)이 재계산됩니다. `loadPrebuilt()`로 완제품 PC 구성을 한 번에 불러올 수 있어 Step 4의 "완제품" 탭이 그대로 재사용할 수 있습니다.
- **알려진 단순화**: 현재 스토어는 카테고리당 부품을 1개만 담습니다. 저장장치를 여러 개 장착하는 실제 시나리오(M.2 + SATA 병행 등)는 아직 지원하지 않으며, `checker.ts`의 M.2 슬롯 수 검증도 이 때문에 항상 "기존 개수 0"으로 계산됩니다(주석으로 명시되어 있습니다). 필요해지면 `selectedParts`에 저장장치만 배열로 다루도록 확장하면 됩니다.

## 프로젝트 구조

```
compick/
├── .cursorrules            # AI 코딩 어시스턴트용 컨벤션 (CHANGELOG 자동 갱신 규칙 포함)
├── docker-compose.yml       # db(PostgreSQL) + app(Next.js) 서비스 정의
├── Dockerfile                # deps / builder / runner 멀티스테이지 빌드
├── prisma.config.ts          # Prisma 7 CLI 설정 (schema 위치, 마이그레이션 경로, seed 명령)
├── prisma/
│   ├── schema.prisma         # User/Category/Product/PrebuiltPC/Order 전체 모델
│   └── seed.ts                # 카테고리 8종 + 부품 24종 + 완제품 2종 더미 데이터
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # 루트 레이아웃, Pretendard 폰트 적용
│   │   ├── page.tsx           # 홈 = 3단 패널 빌더 (Server Component, 카탈로그 데이터 fetch)
│   │   ├── fonts.ts            # Pretendard Variable 셀프 호스팅
│   │   └── globals.css          # Tailwind v4 @theme 디자인 토큰
│   ├── components/
│   │   ├── layout/    # (Step 6에서 헤더 로그인 상태 등 추가 예정)
│   │   ├── shop/
│   │   │   ├── build-workspace.tsx  # 3단 레이아웃 + 탭/카테고리/필터/정렬 상태
│   │   │   ├── category-nav.tsx      # 좌측 패널
│   │   │   ├── product-filters.tsx    # 중앙 상단 - 동적 필터 칩 + 정렬
│   │   │   ├── product-grid.tsx        # 중앙 - 부품 카드 그리드 + 빈 상태
│   │   │   ├── product-card.tsx         # 부품 카드
│   │   │   ├── prebuilt-grid.tsx         # 중앙 - 완제품 탭 콘텐츠
│   │   │   ├── prebuilt-card.tsx          # 완제품 카드
│   │   │   └── quote-panel.tsx             # 우측 sticky 견적 패널
│   │   ├── admin/      # 관리자 대시보드 컴포넌트 (Step 6)
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── badge.tsx
│   ├── generated/prisma/  # `prisma generate` 산출물 (git에 커밋되지 않음, 직접 만들지 않음)
│   ├── lib/
│   │   ├── compatibility/
│   │   │   ├── rules.ts        # 부품 쌍별 순수 검증 함수
│   │   │   ├── checker.ts       # 선택된 조합 전체를 검증하는 엔진 + 소비전력 추정
│   │   │   ├── types.ts          # CompatibilityIssue/Report 등 공유 타입
│   │   │   └── index.ts           # 공개 API 배럴
│   │   ├── catalog-config.ts # 카테고리별 카드 표시/필터 대상 필드 정의
│   │   ├── format.ts          # 가격 포맷, 할인가 계산
│   │   ├── encryption.ts    # AES-256-GCM 암호화 + HMAC 조회용 해시
│   │   ├── prisma.ts          # PrismaClient 싱글턴 (adapter-pg driver adapter)
│   │   ├── utils.ts            # cn() Tailwind 클래스 병합 헬퍼
│   │   └── repositories/
│   │       ├── catalog.ts       # 카테고리/상품/완제품 조회 (UI 형태로 가공)
│   │       └── user.ts          # User 암호화를 캡슐화한 데이터 접근 함수들
│   ├── store/
│   │   └── build-store.ts  # 견적 상태 (persist) — 선택 시 호환성/가격 자동 재계산
│   ├── types/
│   │   └── product-attributes.ts  # 카테고리별 JSONB 속성 타입 계약
│   └── hooks/           # 커스텀 훅
└── ...설정 파일들 (next.config.ts, tsconfig.json, eslint.config.mjs 등)
```

## 사용 가능한 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 로컬 개발 서버 (Turbopack) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드된 앱 실행 |
| `npm run lint` / `lint:fix` | ESLint 검사 / 자동 수정 |
| `npm run typecheck` | `tsc --noEmit` 타입 검사 |
| `npm run prisma:generate` | Prisma Client 생성 |
| `npm run prisma:migrate` | 개발용 마이그레이션 (Step 2부터 사용) |
| `npm run prisma:studio` | Prisma Studio 실행 |
| `npm run prisma:seed` | 더미 데이터 시드 (Step 2부터 사용) |
| `npm run docker:up` | DB 컨테이너만 실행 |
| `npm run docker:up:all` | 전체 스택 빌드 후 실행 |
| `npm run docker:down` | 컨테이너 종료 |

## 개발 로드맵

- [x] **Step 1 — 프로젝트 구조**: Next.js 16 스캐폴딩, Tailwind v4, Docker(DB + 앱), README/CHANGELOG/.cursorrules
- [x] **Step 2 — 데이터베이스 설계**: Prisma 스키마(User/Product/Order/Category/PrebuiltPC), 필드 레벨 암호화, 더미 시드 데이터
- [x] **Step 3 — 상태 관리 & 호환성 로직**: Zustand persist 스토어, 소켓 · 폼팩터 · 와트수 호환성 검증 매트릭스
- [x] **Step 4 — 메인 UI**: 좌(카테고리) · 중(상품 리스트, 필터/정렬) · 우(sticky 견적 패널) 3단 레이아웃
- [ ] **Step 5 — 결제 연동**: 토스페이먼츠 v2 SDK 클라이언트 호출 + 서버 액션 결제 승인/위변조 검증
- [ ] **Step 6 — 인증 & 관리자**: Auth.js 로그인, 상품/회원 CRUD, Recharts 매출·판매량 대시보드

## 알려진 이슈 · 버전 노트

프로덕션 스캐폴딩이라 임의로 버전을 고르지 않고, npm 레지스트리에서 직접 확인 후 아래처럼 의도적으로 조정했습니다.

- **ESLint는 10.x가 아닌 9.39.5로 고정했습니다.** `eslint-config-next`가 내부적으로 사용하는 `eslint-plugin-react`(현재 최신 7.37.5 기준)가 아직 ESLint 10의 규칙 컨텍스트 API 변경(`context.getFilename()` 제거)에 대응하지 못해 `npm run lint` 실행 시 런타임 오류가 발생하는 것을 실제로 확인했습니다. `eslint-plugin-react`가 ESLint 10을 지원하면 업그레이드하세요.
- **`prisma`/`@prisma/client`는 8.0.0 RC가 아닌 안정 버전 7.10.0으로 고정했습니다.** `npm audit`에서 `@prisma/config`의 전이 의존성 `deepmerge-ts`(재귀 객체 병합 시 스택 소진)와 `mysql2`(<3.22.0) high severity 권고가 리포트되지만, 둘 다 Prisma CLI가 내부적으로 물고 있는 전이 의존성이라 애플리케이션 코드가 직접 사용하지 않고, 이 시점 기준 Prisma 7.x 라인 전체에 아직 패치가 반영되지 않았습니다(`npm audit fix`는 오히려 6.12.0으로의 다운그레이드를 제안합니다). 정식 패치가 나오면 반영하는 쪽을 택했습니다.
- **TypeScript는 7.x가 아닌 5.9.3으로 고정했습니다.** `typescript-eslint`가 아직 `typescript@<6.1.0` 범위만 지원합니다.
- **Docker 이미지 빌드(`prisma generate` 포함)는 실제 인터넷 접속이 되는 환경에서 최종 검증이 필요합니다.** `npm install` / `lint` / `typecheck` / `next build`(standalone 산출물 포함)는 모두 정상 동작을 확인했지만, Prisma 엔진 바이너리 다운로드는 네트워크가 제한된 검증 환경에서는 직접 실행해보지 못했습니다. `docker compose up --build` 로 한 번 확인해 주세요.
- **(정정) Prisma 7의 schema.prisma는 `datasource.url`을 지원하지 않습니다.** Step 2 문서에서는 `url = env("DATABASE_URL")`이 schema.prisma에 그대로 남는다고 안내했는데, 실제로 `npm run prisma:migrate`를 실행하면 `P1012` 스키마 검증 에러(`The datasource property 'url' is no longer supported in schema files`)로 막힙니다 — 잘못된 안내였습니다. Prisma 7은 연결 정보를 **CLI용**(`prisma.config.ts`의 `datasource.url`)과 **앱 런타임용**(`PrismaClient` 생성자에 넘기는 driver adapter)으로 완전히 분리했습니다. 그래서 `schema.prisma`의 datasource 블록에서는 `url` 줄을 제거했고, `src/lib/prisma.ts`가 `@prisma/adapter-pg`(+`pg`)로 `DATABASE_URL`을 명시적으로 전달하도록 바꿨습니다.
- **`prisma generate`/`prisma migrate`는 이 환경(제 검증 샌드박스)에서 직접 실행해보지 못했습니다.** Prisma CLI가 스키마 엔진 바이너리를 `binaries.prisma.sh`에서 받아오는데, 검증 환경의 네트워크 허용 목록에 이 도메인이 없어 403으로 막힙니다(driver adapter로 바꾼 뒤에도 동일하게 막히는 것을 재확인했습니다 — adapter 여부와 무관하게 `generate`/`migrate` 자체에 필요). 대신 (1) `schema.prisma`를 동등한 SQL DDL로 변환해 실제 PostgreSQL에 적용해 모델 설계 자체를, (2) `src/generated/prisma`의 실제 타입 형태를 흉내낸 임시 스텁으로 Prisma 호출부 타입을, (3) 이메일 암호화 로직의 실제 PostgreSQL 저장·조회 왕복을, (4) 호환성 검증 엔진과 Zustand 스토어는 실제 seed 데이터 값으로 30개 시나리오를 직접 실행해 각각 검증했습니다(스텁은 검증 후 삭제했으며 이 저장소에는 포함되지 않습니다). 그래도 `prisma generate`/`migrate` 자체는 여러분 환경에서의 첫 실행이 진짜 최종 확인입니다.
- **Step 4의 실제 데이터 렌더링(브라우저에서 진짜 상품이 보이는지)은 확인하지 못했습니다.** `npm run build`(가짜 `DATABASE_URL`로 모듈 로드만 통과 확인, `force-dynamic`이라 실제 쿼리는 시도하지 않음), `npm run lint`/`typecheck`, 그리고 필터·정렬 로직 자체는 목(mock) 데이터로 7개 시나리오를 실행해 확인했습니다. 하지만 `npm run dev`로 브라우저에 띄워 실제 24개 상품이 카드로 보이고 클릭이 잘 되는지는 여러분 환경에서 처음 확인하시게 됩니다.

## 라이선스

TBD
