import { createHash, timingSafeEqual } from "node:crypto";

function equalSecret(actual: string, expected: string): boolean {
  return timingSafeEqual(createHash("sha256").update(actual).digest(), createHash("sha256").update(expected).digest());
}

/** Local development remains convenient; the deployed admin requires HTTPS and credentials. */
export function canUseLocalAdmin(headers: Headers): boolean {
  if (process.env.NEXT_PUBLIC_COMPICK_DEMO_MODE === "1") return false;
  const host = headers.get("host") ?? "";
  if (process.env.NODE_ENV === "development") return /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host);
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const origin = process.env.ADMIN_ORIGIN;
  if (!username || !password || password.length < 20 || !origin) return false;
  try {
    if (new URL(origin).protocol !== "https:" || new URL(origin).host !== host || headers.get("x-forwarded-proto") !== "https") return false;
    const authorization = headers.get("authorization") ?? "";
    if (!authorization.startsWith("Basic ")) return false;
    return equalSecret(Buffer.from(authorization.slice(6), "base64").toString("utf8"), `${username}:${password}`);
  } catch { return false; }
}

export function canMutateLocalAdmin(request: Request): boolean {
  if (!canUseLocalAdmin(request.headers)) return false;
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    if (process.env.NODE_ENV === "production") return origin === process.env.ADMIN_ORIGIN;
    return new URL(origin).host === request.headers.get("host") && ["http:", "https:"].includes(new URL(origin).protocol);
  } catch { return false; }
}
