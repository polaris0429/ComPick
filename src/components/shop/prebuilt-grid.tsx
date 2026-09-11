import type { PrebuiltSummary } from "@/lib/repositories/catalog";
import { PrebuiltCard } from "@/components/shop/prebuilt-card";

interface PrebuiltGridProps {
  prebuilts: PrebuiltSummary[];
  onSelect: (prebuilt: PrebuiltSummary) => void;
}

export function PrebuiltGrid({ prebuilts, onSelect }: PrebuiltGridProps) {
  if (prebuilts.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-line py-16 text-center text-sm text-ink-muted">
        준비된 완제품 구성이 아직 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {prebuilts.map((prebuilt) => (
        <PrebuiltCard key={prebuilt.id} prebuilt={prebuilt} onSelect={() => onSelect(prebuilt)} />
      ))}
    </div>
  );
}
