import type { Metadata } from "next";
import { WorksGrid } from "@/components/WorksGrid";
import { worksData } from "@/lib/works";

export const metadata: Metadata = {
  title: "Works",
  description: "石黒 隼大が携わったプロジェクトや制作物の一覧です。",
};

export default function WorksPage() {
  return <WorksGrid works={worksData} />;
}
