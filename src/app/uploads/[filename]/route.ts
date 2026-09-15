import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export async function GET(_request: Request, {params}: {params: Promise<{filename:string}>}) {
  const {filename} = await params;
  if (!/^[0-9a-f-]{36}\.(jpg|png|webp)$/.test(filename)) return new Response(null, {status:404});
  try {
    const root = process.env.UPLOAD_DIRECTORY ?? path.join(process.cwd(), "public", "uploads");
    const file = await readFile(path.join(root, filename));
    const type = filename.endsWith(".png") ? "image/png" : filename.endsWith(".webp") ? "image/webp" : "image/jpeg";
    return new Response(new Uint8Array(file), {headers:{"Content-Type":type,"X-Content-Type-Options":"nosniff","Cache-Control":"public, max-age=31536000, immutable"}});
  } catch { return new Response(null, {status:404}); }
}
