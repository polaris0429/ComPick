import type { ShopTab } from "@/components/shop/site-header";

export interface ShopBanner {
  id: string;
  label: string;
  alt: string;
  target: ShopTab;
  imageUrl: string;
}

export const SHOP_BANNERS: [ShopBanner, ...ShopBanner[]] = [
  {
    id: "ryzen-ai-max",
    label: "Ryzen AI MAX+ 395",
    alt: "AMD Ryzen AI MAX+ 395 미니 PC — Ai PC 구성 살펴보기",
    target: "ai",
    imageUrl: "/banners/amd-ryzen-ai-max-395.png",
  },
  {
    id: "ryzen-9800x3d",
    label: "Ryzen 7 9800X3D",
    alt: "AMD Ryzen 7 9800X3D 게이밍 프로세서 — PC 견적 시작하기",
    target: "parts",
    imageUrl: "/banners/amd-ryzen7-9800x3d.png",
  },
  {
    id: "intel-ultra",
    label: "Intel Core Ultra 270 Plus",
    alt: "Intel Core Ultra 270 Plus — Ai PC 구성 살펴보기",
    target: "ai",
    imageUrl: "/banners/intel-core-ultra-270plus.png",
  },
];
