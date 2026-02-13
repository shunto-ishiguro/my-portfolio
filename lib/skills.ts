export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
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
      "Astro",
      "React Native",
      "Expo",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Hono",
      "tRPC",
      "Gin",
      "zod",
      "OpenAPI",
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "Supabase",
      "NextAuth",
      "Better Auth",
      "Supabase Auth",
    ],
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
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Bun",
      "pnpm",
      "ESLint",
      "Biome",
      "Playwright",
    ],
  },
];
