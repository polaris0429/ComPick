import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { canUseLocalAdmin } from "@/lib/admin/access";
import { ProductManager } from "@/components/admin/product-manager";

export const dynamic = "force-dynamic";
export default async function AdminProductsPage() {
  if (!canUseLocalAdmin(await headers())) notFound();
  return <><nav className="p-4"><a href="/admin/ai-pcs">Ai PC · 완제품 관리 →</a>　<a href="/admin/orders">주문 관리 →</a></nav><ProductManager /></>;
}
