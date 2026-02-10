import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ExternalLinksSection } from "@/components/ExternalLinksSection";
import { ProfileSection } from "@/components/ProfileSection";
import { StrengthsSection } from "@/components/StrengthsSection";

export const metadata: Metadata = {
  title: "石黒 隼大 | ポートフォリオ",
  description:
    "石黒 隼大のポートフォリオサイトです。Web開発・モバイル開発を中心としたスキルや制作物を紹介しています。",
};

export default function TopSectionPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <ProfileSection />
      <AboutSection />
      <StrengthsSection />
      <ExternalLinksSection />
    </div>
  );
}
