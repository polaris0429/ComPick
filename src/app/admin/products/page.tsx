import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { canUseLocalAdmin } from "@/lib/admin/access";
import { ProductManager } from "@/components/admin/product-manager";

export const dynamic = "force-dynamic";
export default async function AdminProductsPage() {
  if (!canUseLocalAdmin(await headers())) notFound();
  return <ProductManager />;
}
