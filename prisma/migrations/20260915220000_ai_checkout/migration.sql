ALTER TABLE prebuilt_pcs ADD COLUMN kind TEXT NOT NULL DEFAULT 'STANDARD', ADD COLUMN stock INTEGER NOT NULL DEFAULT 0, ADD COLUMN "specText" TEXT NOT NULL DEFAULT '', ADD COLUMN "infoImages" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE orders ADD COLUMN "requestKey" TEXT, ADD COLUMN "shippingEncrypted" TEXT, ADD COLUMN inventory JSONB, ADD COLUMN "stockReserved" BOOLEAN NOT NULL DEFAULT false;
CREATE UNIQUE INDEX "orders_requestKey_key" ON orders("requestKey");
ALTER TABLE order_items ADD COLUMN name TEXT NOT NULL DEFAULT '';
ALTER TABLE prebuilt_pcs ADD CONSTRAINT prebuilt_stock_nonnegative CHECK (stock >= 0);
