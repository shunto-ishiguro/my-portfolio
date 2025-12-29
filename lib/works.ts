export interface Work {
    id: string
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    demoUrl?: string
}

export const worksData: Work[] = [
    {
        id: 'work-1',
        title: 'はこんだてプロジェクト',
        description:
            '高度ICT演習での学習支援システム。設計補助とデザインを担当し、UI/UXの改善に貢献。',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
        githubUrl: '#',
        demoUrl: '#',
    },
    {
        id: 'work-2',
        title: '美唄ハッカソン プロジェクト',
        description:
            '地域課題解決をテーマにしたハッカソンでの成果物。デザインとフロントエンド実装を担当。',
        technologies: ['Next.js', 'TypeScript', 'shadcn/ui', 'Framer Motion'],
        githubUrl: '#',
    },
    {
        id: 'work-3',
        title: 'JPHACKS2025 プロジェクト',
        description:
            '全国規模のハッカソンでの開発プロジェクト。デザインシステム構築とフロントエンド開発を主導。',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
        githubUrl: '#',
        demoUrl: '#',
    },
    {
        id: 'work-4',
        title: 'TAMABLE インターン開発',
        description:
            '長期インターンでのフルスタック開発。認証機能、API設計、フロントエンド実装を担当。',
        technologies: ['Next.js', 'Go', 'PostgreSQL', 'Docker'],
    },
    {
        id: 'work-5',
        title: 'P2HACKS2025 プロジェクト',
        description:
            'バックエンドとインフラに重点を置いた開発。Docker環境構築、API実装、デプロイフローを担当。',
        technologies: ['Go', 'Gin', 'PostgreSQL', 'Docker', 'Render'],
        githubUrl: '#',
    },
    {
        id: 'work-6',
        title: '個人プロジェクト: ポートフォリオサイト',
        description:
            'このポートフォリオサイト自体も技術力の証明の一つ。レスポンシブデザインとアクセシビリティを重視。',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        githubUrl: '#',
        demoUrl: '#',
    },
]
