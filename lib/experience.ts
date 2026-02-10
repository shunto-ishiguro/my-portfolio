export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: "education" | "project" | "internship" | "hackathon";
}

export const timeline: TimelineItem[] = [
  {
    date: "2024年4月",
    title: "公立はこだて未来大学 入学",
    description: "コンピュータサイエンスを専攻",
    type: "education",
  },
  {
    date: "2024年4月 - 2025年3月",
    title: "高度ICT演習はこんだてプロジェクト",
    description:
      "実際にリリースしているアプリケーション「はこんだて」のメンバーとしてプロジェクトに携わった",
    type: "project",
  },
  {
    date: "2025年3月",
    title: "美唄ハッカソン",
    description: "フロントエンド開発を担当",
    type: "hackathon",
  },
  {
    date: "2024年10月",
    title: "競技プログラミング",
    description: "AtCoderでアルゴリズム・データ構造の学習を始める",
    type: "education",
  },
  {
    date: "2025年10月",
    title: "JPHACKS2025",
    description: "フロントエンド開発を担当",
    type: "hackathon",
  },
  {
    date: "2025年11月 - 現在",
    title: "株式会社TAMABLE 長期インターン",
    description: "エンジニアとして社内ツールやECサイトの開発に携わる",
    type: "internship",
  },
  {
    date: "2025年12月",
    title: "P2HACKS2025",
    description: "バックエンド・インフラを担当",
    type: "hackathon",
  },
];

export const typeConfig: Record<
  TimelineItem["type"],
  { label: string; style: string }
> = {
  education: {
    label: "教育",
    style:
      "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  },
  project: {
    label: "プロジェクト",
    style:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800",
  },
  internship: {
    label: "インターン",
    style:
      "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
  },
  hackathon: {
    label: "ハッカソン",
    style:
      "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800",
  },
};
