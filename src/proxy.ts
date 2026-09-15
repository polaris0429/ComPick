import { NextResponse, type NextRequest } from "next/server";
import { canUseLocalAdmin } from "@/lib/admin/access";

export function proxy(request: NextRequest) {
  if (canUseLocalAdmin(request.headers)) {
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  return new NextResponse("관리자 인증이 필요합니다.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="ComPick Admin", charset="UTF-8"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
