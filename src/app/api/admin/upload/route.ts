import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { canMutateLocalAdmin } from "@/lib/admin/access";

export const runtime = "nodejs";
export async function POST(request: Request) {
  if (!canMutateLocalAdmin(request)) return Response.json({error:"로컬 개발 서버에서만 업로드할 수 있습니다."},{status:403});
  const maxBytes = 20 * 1024 * 1024;
  if (Number(request.headers.get("content-length")) > maxBytes + 65536) return Response.json({error:"이미지는 20MB 이하로 선택하세요."},{status:413});
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File) || !file.size || file.size > maxBytes) return Response.json({error:"20MB 이하의 이미지 파일을 선택하세요."},{status:400});
    const buffer = Buffer.from(await file.arrayBuffer());
    let ext: string;
    if (buffer.subarray(0,3).equals(Buffer.from([0xff,0xd8,0xff]))) ext = "jpg";
    else if (buffer.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) ext = "png";
    else if (buffer.toString("ascii",0,4) === "RIFF" && buffer.toString("ascii",8,12) === "WEBP") ext = "webp";
    else return Response.json({error:"JPG, PNG, WEBP 이미지 파일만 지원합니다."},{status:400});
    const name = `${randomUUID()}.${ext}`;
    const directory = path.join(process.cwd(),"public","uploads");
    await mkdir(directory,{recursive:true});
    await writeFile(path.join(directory,name),buffer,{flag:"wx"});
    return Response.json({url:`/uploads/${name}`},{status:201});
  } catch { return Response.json({error:"이미지를 업로드하지 못했습니다."},{status:500}); }
}
