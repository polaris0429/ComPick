"use client";

import { ArrowUpRight } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";

const AI_CATEGORIES = [
  { code: "GPU", label: "이미지 생성 · 로컬 AI", title: "그래픽카드", description: "사용할 모델의 VRAM 요구량부터 확인하세요.", marker: "01" },
  { code: "RAM", label: "데이터 처리 · 멀티태스킹", title: "메모리", description: "데이터 크기와 동시 작업에 맞춰 용량을 고르세요.", marker: "02" },
  { code: "CPU", label: "개발 · 일상 작업", title: "프로세서", description: "사용할 프로그램에 맞는 CPU 사양을 비교하세요.", marker: "03" },
] as const;

export function AiPcGuide({ activeCategory, onSelectCategory }: { activeCategory: CategoryCode; onSelectCategory: (category: CategoryCode) => void }) {
  return <section className="ai-guide" aria-label="Ai PC 부품 가이드">
    <div className="section-heading"><div><p className="section-eyebrow">Ai PC</p><h1>어떤 작업을 하시나요?</h1></div><span>작업에 맞는 부품부터 시작하세요</span></div>
    <div className="ai-options">{AI_CATEGORIES.map((item) => <button key={item.code} aria-pressed={activeCategory === item.code} onClick={() => onSelectCategory(item.code)}>
      <span className="ai-marker">{item.marker}<ArrowUpRight size={17} /></span><small>{item.label}</small><strong>{item.title}</strong><p>{item.description}</p>
    </button>)}</div>
    <p className="ai-note">AI 소프트웨어마다 지원 하드웨어가 다릅니다. 구매 전 GPU 지원 여부와 메모리 요구사항을 확인해 주세요.</p>
  </section>;
}
