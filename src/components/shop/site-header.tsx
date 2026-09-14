"use client";

import Link from "next/link";

import { useState, type FormEvent } from "react";
import { Search, ClipboardList, Menu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShopTab = "parts" | "prebuilt" | "ai";
interface SiteHeaderProps {
  activeTab: ShopTab;
  onNavigate: (tab: ShopTab) => void;
  onSearch: (query: string) => void;
  partCount: number;
}

export function SiteHeader({ activeTab, onNavigate, onSearch, partCount }: SiteHeaderProps) {
  const [query, setQuery] = useState("");
  function search(event: FormEvent) {
    event.preventDefault();
    onSearch(query.trim());
  }
  return (
    <header className="site-header">
      <div className="utility-bar"><div className="shop-container flex items-center justify-between">
        <span>내게 맞는 PC를 고르는 기준, 컴픽</span>
        <div className="flex items-center gap-5">{process.env.NODE_ENV === "development" && <Link href="/admin/products">상품 관리</Link>}<a href="#shopping-guide">이용안내 <ArrowUpRight size={12} /></a></div>
      </div></div>
      <div className="shop-container header-main">
        <Link href="/" className="brand" aria-label="ComPick 홈">Com<span>Pick</span><small>컴픽</small></Link>
        <form role="search" onSubmit={search} className="header-search">
          <input aria-label="상품 검색" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="어떤 PC를 찾고 계세요? 부품명, 브랜드 검색" />
          <button type="submit" aria-label="검색"><Search size={22} /></button>
        </form>
        <a className="header-quote" href="#my-quote"><ClipboardList size={23} /><span>내 견적 <b>{partCount}</b></span></a>
      </div>
      <div className="nav-border"><nav className="shop-container main-nav" aria-label="쇼핑 메뉴">
        <button className="all-categories" onClick={() => onNavigate("parts")}><Menu size={18} />전체 카테고리</button>
        {([{ id: "parts", label: "PC 견적" }, { id: "prebuilt", label: "완제품 PC" }, { id: "ai", label: "Ai PC" }] as const).map((item) => (
          <button key={item.id} aria-current={activeTab === item.id ? "page" : undefined} className={cn("nav-item", activeTab === item.id && "is-active")} onClick={() => onNavigate(item.id)}>{item.label}{item.id === "ai" && <span className="nav-new">NEW</span>}</button>
        ))}
        <button className="nav-item" onClick={() => onSearch("")}>PC 부품</button>
        <a className="nav-guide" href="#shopping-guide">처음 오셨나요? <ArrowUpRight size={14} /></a>
      </nav></div>
    </header>
  );
}
