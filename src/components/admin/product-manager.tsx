"use client";

/* eslint-disable @next/next/no-img-element -- Local admin previews preserve uploaded images without optimization. */

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { Plus, RefreshCw, ExternalLink, Upload, Trash2, Save, PackageSearch } from "lucide-react";
import { ATTRIBUTE_LABELS } from "@/lib/catalog-config";
import { SPEC_TEMPLATES, type AdminCategory, type AdminProduct, type AdminProductInput } from "@/lib/admin/product-schema";
import { formatKRW } from "@/lib/format";

type Category = {code:AdminCategory; name:string};
function blankProduct(): AdminProductInput {
  return {name:"",brand:"",categoryCode:"CPU",price:0,discountRate:0,stock:0,isActive:false,images:[],infoImages:[],infoText:"",attributes:{...SPEC_TEMPLATES.CPU}};
}
async function jsonRequest(url:string, options?:RequestInit) {
  const response = await fetch(url, {cache:"no-store",...options});
  const data = await response.json();
  if (!response.ok) throw new Error(data.error ?? "요청을 처리하지 못했습니다.");
  return data;
}

export function ProductManager() {
  const [products,setProducts] = useState<AdminProduct[]>([]);
  const [categories,setCategories] = useState<Category[]>([]);
  const [draft,setDraft] = useState<AdminProductInput>(blankProduct);
  const [search,setSearch] = useState("");
  const [categoryFilter,setCategoryFilter] = useState("");
  const [dirty,setDirty] = useState(false);
  const [busy,setBusy] = useState(false);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");
  const [notice,setNotice] = useState("");
  const [newSpec,setNewSpec] = useState("");
  const [formRevision,setFormRevision] = useState(0);
  const [jsonErrors,setJsonErrors] = useState<Record<string,string>>({});

  async function loadProducts() {
    const data = await jsonRequest("/api/admin/products");
    setProducts(data.products);
    setCategories(data.categories);
    return data.products as AdminProduct[];
  }
  useEffect(()=> {
    let cancelled = false;
    jsonRequest("/api/admin/products").then((data)=> {
      if (cancelled) return;
      setProducts(data.products); setCategories(data.categories);
      const initial = data.products.find((p:AdminProduct)=>p.name === "Ryzen 7 9800X3D") ?? data.products[0];
      if (initial) setDraft(initial);
    }).catch((e)=>{if (!cancelled) setError(e.message);}).finally(()=>{if (!cancelled) setLoading(false);});
    return ()=>{cancelled=true;};
  },[]);
  useEffect(()=> {
    if (!dirty) return;
    const protect = (event:BeforeUnloadEvent)=>event.preventDefault();
    window.addEventListener("beforeunload",protect);
    return ()=>window.removeEventListener("beforeunload",protect);
  },[dirty]);

  function change(patch:Partial<AdminProductInput>) { setDraft((p)=>({...p,...patch})); setDirty(true); setNotice(""); }
  function selectProduct(product?:AdminProduct) {
    if (dirty && !window.confirm("저장하지 않은 변경 내용이 있습니다. 이동하시겠습니까?")) return;
    setFormRevision((value)=>value+1);
    setDraft(product ?? blankProduct()); setDirty(false); setError(""); setNotice(""); setJsonErrors({});
  }
  async function refresh() {
    if (dirty && !window.confirm("저장하지 않은 변경 내용을 버리고 새로고침하시겠습니까?")) return;
    setBusy(true);setError("");
    try { const next = await loadProducts(); setDraft(next.find((p)=>p.id === draft.id) ?? blankProduct());setFormRevision((value)=>value+1);setDirty(false);setJsonErrors({}); }
    catch(e) {setError((e as Error).message);} finally {setBusy(false);}
  }
  async function save(event:FormEvent) {
    event.preventDefault();setError("");setNotice("");
    if (Object.keys(jsonErrors).length) {setError("스펙의 배열 형식을 확인해 주세요.");return;}
    setBusy(true);
    try {
      const result = await jsonRequest("/api/admin/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...draft,images:draft.images.map((s)=>s.trim()).filter(Boolean),infoImages:draft.infoImages.map((s)=>s.trim()).filter(Boolean)})});
      // The write succeeded even if the following refresh fails.
      setDirty(false);
      setDraft((previous)=>({...previous,id:result.id}));
      const next = await loadProducts();
      setDraft(next.find((p)=>p.id === result.id) ?? blankProduct());
      setNotice("저장했습니다. 쇼핑몰에서 새로고침하면 변경 내용이 반영됩니다.");
    } catch(e) {setError((e as Error).message);} finally {setBusy(false);}
  }
  async function remove() {
    if (!draft.id || !window.confirm(`‘${draft.name}’ 상품을 삭제하시겠습니까? 삭제한 상품은 복구할 수 없습니다.`)) return;
    setBusy(true);setError("");setNotice("");
    try {
      await jsonRequest("/api/admin/products",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:draft.id,updatedAt:draft.updatedAt})});
      setDraft(blankProduct());setDirty(false);setJsonErrors({});await loadProducts();setNotice("상품을 삭제했습니다.");
    } catch(e) {setError((e as Error).message);} finally {setBusy(false);}
  }
  async function upload(file:File | undefined, kind:"images"|"infoImages") {
    if (!file) return;
    setBusy(true);setError("");
    try {
      const form = new FormData();form.append("file",file);
      const result = await jsonRequest("/api/admin/upload",{method:"POST",body:form});
      change({[kind]: kind === "images" ? [result.url,...draft.images.slice(1)] : [...draft.infoImages,result.url]});
      setNotice("이미지를 올렸습니다. ‘상품 저장’을 눌러 적용하세요.");
    } catch(e) {setError((e as Error).message);} finally {setBusy(false);}
  }
  function updateSpec(key:string, value:AdminProductInput["attributes"][string]) {change({attributes:{...draft.attributes,[key]:value}});}
  const visible = products.filter((p)=>(!categoryFilter || p.categoryCode === categoryFilter) && `${p.name} ${p.brand}`.toLowerCase().includes(search.toLowerCase()));
  return <div className="admin-page">
    <header className="admin-top"><Link href="/" className="brand">Com<span>Pick</span></Link><span>상품 관리 <small>LOCAL</small></span><Link href="/" target="_blank">쇼핑몰 보기 <ExternalLink size={15}/></Link></header>
    <div className="admin-heading"><div><p>CATALOG MANAGEMENT</p><h1>상품 관리</h1><span>상품과 이미지, 상세 정보를 한곳에서 관리하세요.</span></div><button className="admin-primary" disabled={busy || loading} onClick={()=>selectProduct()}><Plus size={16}/>새 상품 등록</button></div>
    <div className="admin-workspace">
      <aside className="admin-list"><div className="admin-list-head"><strong>등록 상품 <b>{products.length}</b></strong><button aria-label="상품 목록 새로고침" disabled={busy} onClick={refresh}><RefreshCw size={16}/></button></div>
        <input aria-label="관리 상품 검색" placeholder="상품명 또는 제조사 검색" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <select aria-label="관리 카테고리 필터" value={categoryFilter} onChange={(e)=>setCategoryFilter(e.target.value)}><option value="">전체 카테고리</option>{categories.map((c)=><option key={c.code} value={c.code}>{c.name}</option>)}</select>
        <div className="admin-products">{loading ? <p className="admin-empty">상품을 불러오는 중입니다.</p> : visible.length === 0 ? <p className="admin-empty"><PackageSearch size={28}/>검색 결과가 없습니다.</p> : visible.map((p)=><button key={p.id} disabled={busy} className={p.id === draft.id ? "selected" : ""} onClick={()=>selectProduct(p)}>
          {p.images[0] ? <img src={p.images[0]} alt=""/> : <PackageSearch size={32}/>}
          <span><small>{p.brand} · {p.categoryCode}</small><strong>{p.name}</strong><span>{formatKRW(p.price)} <em>{p.isActive ? "판매 노출" : "숨김"}</em></span></span>
        </button>)}</div>
      </aside>
      <form className="admin-editor" onSubmit={save}>
        <div className="admin-editor-heading"><div><small>{draft.id ? "상품 수정" : "새 상품"}</small><h2>{draft.name || "새 상품을 등록하세요"}</h2></div><span>{dirty ? "저장하지 않은 변경 사항" : "저장된 정보"}</span></div>
        {error && <div className="admin-error" role="alert">{error}</div>}{notice && <div className="admin-notice" role="status">{notice}</div>}
        <fieldset disabled={busy || loading}>
          <section className="admin-section"><h3><span>01</span> 기본 정보</h3><div className="admin-fields">
            <label className="wide">상품명<input required value={draft.name} maxLength={200} onChange={(e)=>change({name:e.target.value})}/></label>
            <label>제조사 / 브랜드<input required value={draft.brand} onChange={(e)=>change({brand:e.target.value})}/></label>
            <label>카테고리<select value={draft.categoryCode} onChange={(e)=>{const code=e.target.value as AdminCategory;if (window.confirm("카테고리를 바꾸면 스펙이 해당 분류의 예시 값으로 초기화됩니다. 변경하시겠습니까?")) {change({categoryCode:code,attributes:{...SPEC_TEMPLATES[code]}});setJsonErrors({});}}}>{categories.map((c)=><option key={c.code} value={c.code}>{c.name}</option>)}</select></label>
            <label>판매가 (원)<input type="number" min={0} max={2147483647} required value={draft.price} onChange={(e)=>change({price:Number(e.target.value)})}/></label>
            <label>할인율 (%)<input type="number" min={0} max={100} required value={draft.discountRate} onChange={(e)=>change({discountRate:Number(e.target.value)})}/></label>
            <label>재고 수량<input type="number" min={0} required value={draft.stock} onChange={(e)=>change({stock:Number(e.target.value)})}/></label>
            <label>판매 상태<select value={String(draft.isActive)} onChange={(e)=>change({isActive:e.target.value === "true"})}><option value="true">판매 노출</option><option value="false">숨김</option></select></label>
          </div></section>
          <section className="admin-section"><h3><span>02</span> 상품 썸네일</h3><p>첫 번째 이미지가 상품 목록과 상세 팝업의 대표 사진으로 표시됩니다.</p>
            <div className="admin-media-row"><div className="admin-thumbnail">{draft.images[0] ? <img src={draft.images[0]} alt="상품 썸네일 미리보기"/> : <PackageSearch size={38}/>}</div><div className="admin-media-input"><label className="admin-upload"><Upload size={16}/>썸네일 파일 선택<input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e)=>{upload(e.target.files?.[0],"images");e.target.value="";}}/></label><label>이미지 주소 (한 줄에 하나)<textarea rows={3} value={draft.images.join("\n")} onChange={(e)=>change({images:e.target.value.split("\n")})}/></label><small>JPG · PNG · WEBP / 최대 20MB</small></div></div>
          </section>
          <section className="admin-section"><h3><span>03</span> 상품정보</h3><p>긴 상세 이미지도 원본 비율로 표시됩니다. 여러 이미지를 등록하면 위에서 아래로 이어집니다.</p>
            <label>상품 설명<textarea rows={4} value={draft.infoText} onChange={(e)=>change({infoText:e.target.value})} placeholder="상품 소개 문구를 입력하세요."/></label>
            <label className="admin-upload"><Upload size={16}/>상품정보 이미지 추가<input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e)=>{upload(e.target.files?.[0],"infoImages");e.target.value="";}}/></label>
            <label>상품정보 이미지 주소 (표시 순서대로 한 줄에 하나)<textarea rows={3} value={draft.infoImages.join("\n")} onChange={(e)=>change({infoImages:e.target.value.split("\n")})}/></label>
            <div className="admin-detail-previews">{draft.infoImages.map((url,i)=>url && <div key={`${i}-${url}`}><div><span>상세 이미지 {i+1}</span><button type="button" aria-label={`상세 이미지 ${i+1} 제거`} onClick={()=>change({infoImages:draft.infoImages.filter((_,n)=>n!==i)})}><Trash2 size={15}/></button></div><img src={url} alt={`상품정보 이미지 ${i+1} 미리보기`}/></div>)}</div>
          </section>
          <section className="admin-section"><h3><span>04</span> 상세 스펙</h3><p>호환성 검사에 사용되는 항목입니다. 기본 항목 이름은 유지하고 값만 수정하세요. 배열은 <code>{'["AM5", "LGA1851"]'}</code> 형식입니다.</p>
            <div className="admin-specs">{Object.entries(draft.attributes).map(([key,value])=><label key={`${formRevision}-${draft.id ?? "new"}-${draft.updatedAt ?? "new"}-${draft.categoryCode}-${key}`}><span>{ATTRIBUTE_LABELS[key]?.label ?? key} {ATTRIBUTE_LABELS[key]?.unit && `(${ATTRIBUTE_LABELS[key]?.unit})`}<small>{key}</small></span>
              {typeof value === "boolean" ? <select value={String(value)} onChange={(e)=>updateSpec(key,e.target.value === "true")}><option value="true">있음 / 지원</option><option value="false">없음 / 미지원</option></select> : Array.isArray(value) ? <div><input defaultValue={JSON.stringify(value)} onChange={(e)=>{try{const parsed=JSON.parse(e.target.value);if (!Array.isArray(parsed)) throw new Error();updateSpec(key,parsed);setJsonErrors((prev)=>{const next={...prev};delete next[key];return next;});}catch{setJsonErrors((prev)=>({...prev,[key]:"배열 형식을 확인하세요."}));setDirty(true);}}}/>{jsonErrors[key] && <small className="text-danger">{jsonErrors[key]}</small>}</div> : <input type={typeof value === "number" || value === null ? "number" : "text"} step="any" value={value === null ? "" : String(value)} placeholder={value === null ? "해당 없음" : ""} onChange={(e)=>updateSpec(key,typeof value === "number" || value === null ? (e.target.value === "" ? null : Number(e.target.value)) : e.target.value)}/>}
            </label>)}</div>
            <div className="admin-add-spec"><input aria-label="추가 스펙 항목명" value={newSpec} onChange={(e)=>setNewSpec(e.target.value)} placeholder="추가 항목명 (예: L3 캐시)"/><button type="button" onClick={()=>{const key=newSpec.trim();if(key && !Object.hasOwn(draft.attributes,key) && !["__proto__","constructor","prototype"].includes(key)){updateSpec(key,"");setNewSpec("");}}}><Plus size={15}/>항목 추가</button></div>
          </section>
        </fieldset>
        <div className="admin-savebar"><button type="button" className="admin-delete" disabled={busy || !draft.id} onClick={remove}><Trash2 size={15}/>상품 삭제</button><span>{busy ? "처리 중…" : "저장 후 쇼핑몰 새로고침으로 확인"}</span><button type="submit" className="admin-primary" disabled={busy || loading}><Save size={16}/>{draft.id ? "상품 저장" : "상품 등록"}</button></div>
      </form>
    </div>
  </div>;
}
