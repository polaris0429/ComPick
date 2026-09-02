import type { Metadata } from "next";
import { pretendard } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComPick | 나에게 맞는 조립 PC, 컴픽",
  description:
    "소켓, 용량, 와트수까지 — 부품을 고르는 즉시 호환 여부를 확인하는 맞춤형 조립 PC 쇼핑몰, 컴픽(ComPick).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
