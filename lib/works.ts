export interface Work {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  roles?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const worksData: Work[] = [
  {
    id: "work-1",
    title: "美唄ハッカソン2025",
    description:
      "美唄市をテーマにしたハッカソンでの成果物。フロントエンドの実装を担当。",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    roles: ["フロントエンド実装"],
    demoUrl: "https://bibai-hackathon-team-magan.vercel.app/",
  },
  {
    id: "work-2",
    title: "JPHACKS2025",
    description:
      "現在地を取得して、そこから条件に合うお店を取得してランダムで決めてくれるアプリケーションを開発。フロントエンドの実装を担当。",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Vercel",
    ],
    roles: ["フロントエンド実装", "技術選定"],
    githubUrl: "https://github.com/jphacks/sp_2504",
    demoUrl: "https://sp-2504.vercel.app/",
  },
  {
    id: "work-3",
    title: "TAMABLE 長期インターン: 勤怠・日報システム",
    description:
      "社内で専用の勤怠・日報システムの開発。フロントエンドの実装からバックエンドの実装まで担当。",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "zod",
      "OpenAPI",
      "Hono",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "GitHub Actions",
      "pnpm",
      "ESlint",
      "Vercel",
      "Cloudflare Workers",
    ],
    roles: [
      "フロントエンド実装",
      "バックエンド実装",
      "データベース管理",
      "データベース設計",
      "API設計",
      "認証基盤設計",
      "技術選定",
      "コードレビュー",
    ],
    githubUrl: "https://github.com/TAM-ABLE/attendance-manager",
  },
  {
    id: "work-4",
    title: "P2HACKS2025",
    description:
      "イラストをレビューしてほしい人を結び付けるマッチングアプリ開発。バックエンドとインフラを担当し、API、テストや並行処理を実装。",
    technologies: [
      "Flutter",
      "Go",
      "Gin",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Render",
    ],
    roles: [
      "バックエンド実装",
      "データベース管理",
      "データベース設計",
      "API設計",
      "APIテスト実装",
      "技術選定",
    ],
    githubUrl: "https://github.com/p2hacks2025/pre-12",
  },
  {
    id: "work-5",
    title: "個人プロジェクト: ポートフォリオサイト",
    description:
      "このポートフォリオサイトについて。レスポンシブデザインとアクセシビリティを重視。",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "GitHub Actions",
      "ESLint",
      "Vercel",
    ],
    githubUrl: "https://github.com/shunto-ishiguro/my-portfolio",
  },
];
