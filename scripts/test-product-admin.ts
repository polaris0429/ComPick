import assert from "node:assert/strict";
import { readFile, unlink } from "node:fs/promises";
import path from "node:path";
import { SPEC_TEMPLATES, productInput } from "../src/lib/admin/product-schema";

const base = "http://127.0.0.1:3000";
const headers = {"Content-Type":"application/json",Origin:base};
async function list() {const response=await fetch(`${base}/api/admin/products`);assert.equal(response.status,200);return response.json();}
async function post(body:unknown) {return fetch(`${base}/api/admin/products`,{method:"POST",headers,body:JSON.stringify(body)});}
let id:string | undefined;
let uploaded:string | undefined;
async function main() {
  const before = await list();
  const ryzen = before.products.find((p:{name:string})=>p.name === "Ryzen 7 9800X3D");
  assert.equal(ryzen.images[0],"/products/ryzen-9800x3d/thumbnail.jpeg");
  assert.equal(ryzen.infoImages[0],"/products/ryzen-9800x3d/info.jpg");
  const draft = {name:`__admin_smoke_${Date.now()}`,brand:"TEST",categoryCode:"CPU",price:100000,discountRate:5,stock:2,isActive:false,images:[],infoImages:[],infoText:"등록 확인",attributes:SPEC_TEMPLATES.CPU};
  assert.equal(productInput.safeParse(draft).success,true);
  assert.equal((await post({...draft,discountRate:101})).status,400);
  assert.equal((await post({...draft,attributes:{}})).status,400);
  assert.equal((await fetch(`${base}/api/admin/products`,{method:"POST",headers:{...headers,Origin:"https://example.com"},body:JSON.stringify(draft)})).status,403);
  const created = await post(draft);assert.equal(created.status,201);id=(await created.json()).id;
  let current=(await list()).products.find((p:{id:string})=>p.id===id);
  assert.equal(current.infoText,"등록 확인");
  const saved=await post({...current,price:123456,attributes:{...current.attributes,cores:12},infoText:"수정 확인"});assert.equal(saved.status,200);
  assert.equal((await post({...current,price:1})).status,409);
  current=(await list()).products.find((p:{id:string})=>p.id===id);
  assert.equal(current.price,123456);assert.equal(current.attributes.cores,12);assert.equal(current.infoText,"수정 확인");
  const invalid=new FormData();invalid.append("file",new File(["<svg></svg>"],"not-an-image.svg",{type:"image/svg+xml"}));
  assert.equal((await fetch(`${base}/api/admin/upload`,{method:"POST",headers:{Origin:base},body:invalid})).status,400);
  const form=new FormData();form.append("file",new File([await readFile("public/products/ryzen-9800x3d/thumbnail.jpeg")],"thumbnail.jpeg",{type:"image/jpeg"}));
  const upload=await fetch(`${base}/api/admin/upload`,{method:"POST",headers:{Origin:base},body:form});assert.equal(upload.status,201);uploaded=(await upload.json()).url;
  const image=await fetch(`${base}${uploaded}`);assert.equal(image.status,200);assert.match(image.headers.get("content-type")??"",/image/);
  assert.equal((await post({...current,images:[uploaded],infoImages:[ryzen.infoImages[0]]})).status,200);
  current=(await list()).products.find((p:{id:string})=>p.id===id);assert.equal(current.images[0],uploaded);assert.equal(current.infoImages[0],ryzen.infoImages[0]);
  const removed=await fetch(`${base}/api/admin/products`,{method:"DELETE",headers,body:JSON.stringify({id,updatedAt:current.updatedAt})});assert.equal(removed.status,200);id=undefined;
  assert.equal((await list()).products.length,before.products.length);
  console.log("PASS: create, update, delete, persistence, validation, conflict detection, origin guard, image upload and Ryzen images.");
}
main().finally(async()=> {
  if(id){const current=(await list()).products.find((p:{id:string})=>p.id===id);if(current)await fetch(`${base}/api/admin/products`,{method:"DELETE",headers,body:JSON.stringify({id,updatedAt:current.updatedAt})});}
  if(uploaded && /^\/uploads\/[a-f0-9-]+\.jpg$/.test(uploaded))await unlink(path.join(process.cwd(),"public",uploaded));
}).catch((e)=>{console.error(e);process.exitCode=1;});
