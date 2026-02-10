import Image from "next/image";
import { getTechIconUrl } from "@/lib/tech-icons";

interface SkillCategory {
  category: string;
  skills: string[];
}

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Main Languages",
      skills: ["TypeScript", "Go"],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Zustand",
        "Framer Motion",
        "Three.js",
        "React Native",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Hono", "tRPC", "Gin", "zod", "OpenAPI"],
    },
    {
      category: "Database / Auth",
      skills: ["PostgreSQL", "Supabase", "Supabase Auth", "NextAuth"],
    },
    {
      category: "Infra / Deployment",
      skills: [
        "Docker",
        "Kubernetes",
        "Vercel",
        "Render",
        "Cloudflare Workers",
        "AWS",
      ],
    },
    {
      category: "Tooling",
      skills: ["Git", "GitHub", "GitHub Actions", "pnpm", "ESLint", "Biome"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="mb-12 text-center text-primary font-bold">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className="bg-card border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
          >
            <h3 className="mb-4 pb-3 border-b border-primary/30 font-semibold text-primary">
              {category.category}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill) => {
                const iconUrl = getTechIconUrl(skill);
                return (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {iconUrl && (
                        <Image
                          src={iconUrl}
                          alt={skill}
                          title={skill}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                          unoptimized
                        />
                      )}
                    </div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-primary/10 border border-primary/30 rounded-lg text-center">
        <p className="text-foreground">
          これらの技術を活用し、幅広く対応可能です。
          <br />
          常に新しい技術も学び続けます。
        </p>
      </div>
    </div>
  );
}
