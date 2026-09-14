"use client";

import { AlertTriangle, CheckCircle2, Circle } from "lucide-react";
import { useBuildStore } from "@/store/build-store";
import { cn } from "@/lib/utils";

const CHECK_GROUPS: { label: string; ruleIds: string[] }[] = [
  { label: "소켓 호환성", ruleIds: ["cpu-mb-socket", "cooler-cpu-socket"] },
  { label: "폼팩터 호환성", ruleIds: ["mb-case-formfactor", "psu-case-formfactor"] },
  { label: "전력 용량", ruleIds: ["psu-power-capacity"] },
  { label: "물리적 간섭", ruleIds: ["gpu-case-length", "cooler-case-clearance"] },
];

export function StatusBar() {
  const issues = useBuildStore((s) => s.compatibility.issues);
  const hasAnyPart = useBuildStore((s) => Object.keys(s.selectedParts).length > 0);

  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg border border-line bg-paper-raised p-3 sm:grid-cols-4">
      {CHECK_GROUPS.map((group) => {
        const groupIssues = issues.filter((i) => group.ruleIds.includes(i.ruleId));
        const hasError = groupIssues.some((i) => i.severity === "error");
        const hasWarning = groupIssues.some((i) => i.severity === "warning");

        return (
          <div key={group.label} className="flex items-center gap-2 px-2 py-1">
            {!hasAnyPart ? (
              <Circle className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={2} />
            ) : hasError ? (
              <AlertTriangle className="h-4 w-4 shrink-0 text-danger" />
            ) : hasWarning ? (
              <AlertTriangle className="h-4 w-4 shrink-0 text-warning" />
            ) : (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
            )}
            <span
              className={cn(
                "text-xs font-medium",
                !hasAnyPart && "text-ink-muted",
                hasError && "text-danger",
                !hasError && hasWarning && "text-warning",
                hasAnyPart && !hasError && !hasWarning && "text-success",
              )}
            >
              {group.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
