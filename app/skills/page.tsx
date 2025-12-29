interface SkillCategory {
    category: string;
    skills: string[];
}

export default function SkillsPage() {
    const skillCategories: SkillCategory[] = [
        {
            category: 'Main Languages',
            skills: ['TypeScript', 'Go', 'SQL'],
        },
        {
            category: 'Frontend',
            skills: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Framer Motion', 'Three.js', 'React Three Fiber'],
        },
        {
            category: 'Backend',
            skills: ['Express', 'Hono', 'Gin'],
        },
        {
            category: 'Validation / Schema',
            skills: ['zod', 'zod-openapi'],
        },
        {
            category: 'Database / BaaS',
            skills: ['PostgreSQL', 'Supabase'],
        },
        {
            category: 'Auth / Security',
            skills: ['Supabase Auth', 'NextAuth'],
        },
        {
            category: 'Mobile / Graphics',
            skills: ['React Native'],
        },
        {
            category: 'Infra / Deployment',
            skills: ['Docker', 'Vercel', 'Render', 'Cloudflare Workers'],
        },
        {
            category: 'Tooling / AI',
            skills: ['Git', 'GitHub', 'Claude Code'],
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="mb-12 text-center">Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="mb-4 pb-3 border-b">{category.category}</h3>
                        <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-50 transition-colors"
                                >
                                    {/* Logo placeholder */}
                                    <div className="w-8 h-8 bg-neutral-200 rounded flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs text-neutral-500">📦</span>
                                    </div>
                                    <span className="text-neutral-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-6 bg-white border border-neutral-200 rounded-lg text-center">
                <p className="text-neutral-600">
                    これらの技術を活用し、フルスタック開発からインフラ構築まで幅広く対応可能です。
                    <br />
                    常に新しい技術を学び続けます。
                </p>
            </div>
        </div>
    );
}