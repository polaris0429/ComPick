import assert from "node:assert/strict";
import { canUseLocalAdmin, canMutateLocalAdmin } from "../src/lib/admin/access";

Object.assign(process.env, {NODE_ENV:"production", NEXT_PUBLIC_COMPICK_DEMO_MODE:"0", ADMIN_USERNAME:"admin", ADMIN_PASSWORD:"test-only-password-123456789", ADMIN_ORIGIN:"https://168.110.119.148"});
const valid = {host:"168.110.119.148", "x-forwarded-proto":"https", authorization:`Basic ${Buffer.from("admin:test-only-password-123456789").toString("base64")}`};
assert.equal(canUseLocalAdmin(new Headers(valid)),true);
for (const patch of [{authorization:""},{authorization:"Basic invalid"},{host:"example.com"},{"x-forwarded-proto":"http"}]) assert.equal(canUseLocalAdmin(new Headers({...valid,...patch})),false);
const request=(origin:string)=>new Request("https://168.110.119.148/api/admin/products",{method:"POST",headers:{...valid,origin}});
assert.equal(canMutateLocalAdmin(request("https://168.110.119.148")),true);
assert.equal(canMutateLocalAdmin(request("http://168.110.119.148")),false);
assert.equal(canMutateLocalAdmin(request("https://example.com")),false);
process.env.ADMIN_PASSWORD="short";
assert.equal(canUseLocalAdmin(new Headers(valid)),false);
Object.assign(process.env,{NODE_ENV:"development"});
assert.equal(canUseLocalAdmin(new Headers({host:"localhost:3000"})),true);
assert.equal(canUseLocalAdmin(new Headers({host:"168.110.119.148"})),false);
console.log("PASS: HTTPS, credentials, host, origin and local-development access guards.");
