/** Temporary admin is available only through a loopback host in development. */
export function canUseLocalAdmin(headers: Headers): boolean {
  if (process.env.NODE_ENV !== "development" || process.env.NEXT_PUBLIC_COMPICK_DEMO_MODE === "1") return false;
  const host = headers.get("host") ?? "";
  return /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host);
}

export function canMutateLocalAdmin(request: Request): boolean {
  if (!canUseLocalAdmin(request.headers)) return false;
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === request.headers.get("host") &&
      ["http:", "https:"].includes(new URL(origin).protocol);
  } catch { return false; }
}
