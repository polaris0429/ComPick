import type { CategoryCode } from "@/generated/prisma";
import { CATEGORY_PLACEHOLDER_IMAGES } from "@/lib/catalog-config";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  /** Product.images[0] (실사진). 없으면 카테고리 placeholder 일러스트로 대체 */
  imageUrl: string | null;
  categoryCode: CategoryCode;
  alt: string;
  className?: string;
}

/**
 * 실제 상품 사진이 아직 없는 상품이 많으므로(images가 빈 배열), 그 경우
 * 카테고리별 자체 제작 SVG 일러스트(public/placeholders)로 대체합니다.
 * 실제 사진을 연결하려면 Product.images에 값을 채우면 그대로 사용됩니다.
 */
export function ProductImage({ imageUrl, categoryCode, alt, className }: ProductImageProps) {
  const src = imageUrl ?? CATEGORY_PLACEHOLDER_IMAGES[categoryCode];
  return (
    // next/image는 외부 이미지 도메인을 next.config.ts에 미리 등록해야 해서,
    // 실사진 도메인이 아직 정해지지 않은 지금 단계에서는 유연한 <img>를 사용합니다.
    // (placeholder는 우리 자체 정적 파일이라 도메인 문제와 무관합니다)
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />
  );
}
