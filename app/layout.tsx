// app/layout.tsx
import "./globals.css";
import { Header } from "@/components/Header";

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
