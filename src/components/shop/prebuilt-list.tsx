import type { PrebuiltSummary } from "@/lib/repositories/catalog";
import { PrebuiltCard } from "@/components/shop/prebuilt-card";

interface PrebuiltListProps {
  prebuilts: PrebuiltSummary[];
  onSelect: (prebuilt: PrebuiltSummary) => void;
}

export function PrebuiltList({ prebuilts, onSelect }: PrebuiltListProps) {
  if (prebuilts.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-line bg-paper-raised py-16 text-center text-sm text-ink-muted">
        등록된 상품이 아직 없습니다.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-line bg-paper-raised">
      {prebuilts.map((prebuilt) => (
        <PrebuiltCard key={prebuilt.id} prebuilt={prebuilt} onSelect={() => onSelect(prebuilt)} />
      ))}
    </div>
  );
}
