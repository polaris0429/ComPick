ALTER TABLE "users" ADD COLUMN "nameEncrypted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "loginId" TEXT, ADD COLUMN "loginIdHash" TEXT;
CREATE UNIQUE INDEX "users_loginIdHash_key" ON "users"("loginIdHash");
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";
ALTER TABLE "orders" ALTER COLUMN "userId" DROP NOT NULL;
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
CREATE TABLE "member_sessions" (
 "tokenHash" TEXT PRIMARY KEY, "userId" TEXT NOT NULL, "expiresAt" TIMESTAMP(3) NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT "member_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "member_sessions_userId_idx" ON "member_sessions"("userId");
CREATE INDEX "member_sessions_expiresAt_idx" ON "member_sessions"("expiresAt");
CREATE TABLE "cart_items" (
 "id" TEXT PRIMARY KEY, "userId" TEXT NOT NULL, "productId" TEXT, "prebuiltPCId" TEXT, "quantity" INTEGER NOT NULL DEFAULT 1,
 "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
 CONSTRAINT "cart_items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT "cart_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT "cart_items_prebuiltPCId_fkey" FOREIGN KEY ("prebuiltPCId") REFERENCES "prebuilt_pcs"("id") ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT "cart_items_target_check" CHECK (("productId" IS NULL) <> ("prebuiltPCId" IS NULL)),
 CONSTRAINT "cart_items_quantity_check" CHECK ("quantity" BETWEEN 1 AND 99)
);
CREATE UNIQUE INDEX "cart_items_userId_productId_key" ON "cart_items"("userId","productId");
CREATE UNIQUE INDEX "cart_items_userId_prebuiltPCId_key" ON "cart_items"("userId","prebuiltPCId");
CREATE TABLE "member_rate_limits" ("key" TEXT PRIMARY KEY, "attempts" INTEGER NOT NULL DEFAULT 1, "expiresAt" TIMESTAMP(3) NOT NULL);
CREATE INDEX "member_rate_limits_expiresAt_idx" ON "member_rate_limits"("expiresAt");
