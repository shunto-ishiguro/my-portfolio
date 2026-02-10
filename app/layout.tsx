// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "石黒 隼大 | ポートフォリオ",
    template: "%s | 石黒 隼大",
  },
  description:
    "石黒 隼大のポートフォリオサイトです。Web開発・モバイル開発を中心としたスキルや制作物を紹介しています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-16 pb-20">{children}</main>
      </body>
    </html>
  );
}
