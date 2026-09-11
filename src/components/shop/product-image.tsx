import type { LucideIcon } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";
import { CATEGORY_ICONS } from "@/lib/catalog-config";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  icon: LucideIcon;
  alt: string;
  className?: string;
}

/**
 * 실제 사진이 없을 때 쓰는 자리표시자. 회색 빈 박스 대신 아이콘 + 그리드
 * 패턴 배경으로, "사진 로드 실패"가 아니라 의도된 스펙시트풍 표시임을
 * 드러냅니다.
 */
export function ImagePlaceholder({ icon: Icon, alt, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("flex h-full w-full items-center justify-center bg-paper", className)}
      style={{
        backgroundImage:
          "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    >
      <Icon className="h-10 w-10 text-copper" strokeWidth={1.5} />
    </div>
  );
}

interface ProductImageProps {
  imageUrl: string | null;
  categoryCode: CategoryCode;
  alt: string;
  className?: string;
}

/**
 * 실제 상품 사진(imageUrl)이 없을 때는 카테고리 아이콘 기반 ImagePlaceholder를
 * 보여줍니다. 실제 상품 사진을 연결하려면 Product.imageUrl에 값을 채우면
 * 그대로 사용됩니다.
 */
export function ProductImage({ imageUrl, categoryCode, alt, className }: ProductImageProps) {
  if (imageUrl) {
    return (
      // next/image는 외부 이미지 도메인을 next.config.ts에 미리 등록해야 해서,
      // 도메인이 아직 정해지지 않은 지금 단계에서는 유연한 <img>를 사용합니다.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={imageUrl} alt={alt} className={cn("h-full w-full object-cover", className)} />
    );
  }

  return <ImagePlaceholder icon={CATEGORY_ICONS[categoryCode]} alt={alt} className={className} />;
}
