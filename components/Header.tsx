"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Top" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary border-b border-primary">
      <nav
        aria-label="メインナビゲーション"
        className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center"
      >
        <Link href="/" className="font-medium text-primary-foreground">
          Shunto Ishiguro
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-primary-foreground font-medium"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-b border-primary/50 bg-primary">
          <div className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 ${
                  pathname === item.href
                    ? "text-primary-foreground font-medium"
                    : "text-primary-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
