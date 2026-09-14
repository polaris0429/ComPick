"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { SHOP_BANNERS } from "@/lib/shop-banners";
import type { ShopTab } from "@/components/shop/site-header";

export function HeroBanner({ onNavigate }: { onNavigate: (tab: ShopTab) => void }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(motion.matches);
    const syncVisibility = () => setHidden(document.hidden);
    syncMotion();
    syncVisibility();
    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    return () => {
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);
  const stopped = paused || hovered || focused || hidden || reducedMotion;
  useEffect(() => {
    if (stopped) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % SHOP_BANNERS.length), 5000);
    return () => window.clearTimeout(timer);
  }, [index, stopped]);
  const banner = SHOP_BANNERS[index] ?? SHOP_BANNERS[0];
  function move(delta: number) { setIndex((current) => (current + delta + SHOP_BANNERS.length) % SHOP_BANNERS.length); }

  return (
    <section className="hero-banner" aria-label="컴픽 기획 배너" aria-roledescription="캐러셀"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}>
      <div className="banner-image-stage" role="group" aria-roledescription="슬라이드" aria-label={`${index + 1} / ${SHOP_BANNERS.length}: ${banner.label}`}>
        {SHOP_BANNERS.map((item, i) => (
          <button key={item.id} hidden={i !== index} className="banner-image-link" onClick={() => onNavigate(item.target)}>
            {/* Keep the supplied artwork intact; preload all three local slides for smooth switching. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.imageUrl} alt={item.alt} width={2172} height={724} loading="eager" fetchPriority={i === 0 ? "high" : "auto"} />
          </button>
        ))}
      </div>
      <div className="shop-container banner-toolbar">
        <div className="banner-tabs" aria-label="배너 선택">
          {SHOP_BANNERS.map((item, i) => <button key={item.id} aria-pressed={i === index} onClick={() => setIndex(i)}>{item.label}</button>)}
        </div>
        <div className="banner-controls">
          <span className="banner-count"><b>{String(index + 1).padStart(2, "0")}</b><span> / {String(SHOP_BANNERS.length).padStart(2, "0")}</span></span>
          <button aria-label="이전 배너" onClick={() => move(-1)}><ChevronLeft size={17} /></button>
          <button aria-label="다음 배너" onClick={() => move(1)}><ChevronRight size={17} /></button>
          {!reducedMotion && <button aria-label={paused ? "배너 자동 재생" : "배너 일시정지"} onClick={() => setPaused(!paused)}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
        </div>
      </div>
    </section>
  );
}
