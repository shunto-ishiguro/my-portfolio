// Simple Icons (skills と統一) + Devicon (Simple Icons にないもの用)
export const techIconMap: Record<string, string> = {
  // Skills にあるもの (Simple Icons)
  TypeScript: "https://cdn.simpleicons.org/typescript",
  Go: "https://cdn.simpleicons.org/go",
  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  "shadcn/ui": "https://cdn.simpleicons.org/shadcnui",
  "Framer Motion": "https://cdn.simpleicons.org/framer",
  "Three.js": "https://cdn.simpleicons.org/threedotjs",
  "React Native": "https://cdn.simpleicons.org/react",
  Expo: "https://cdn.simpleicons.org/expo",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  Hono: "https://cdn.simpleicons.org/hono",
  tRPC: "https://cdn.simpleicons.org/trpc",
  Express: "https://cdn.simpleicons.org/express",
  Gin: "https://cdn.simpleicons.org/gin",
  zod: "https://cdn.simpleicons.org/zod",
  OpenAPI: "https://cdn.simpleicons.org/openapiinitiative",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  Supabase: "https://cdn.simpleicons.org/supabase",
  NextAuth: "https://next-auth.js.org/img/logo/logo-sm.png",
  "Supabase Auth": "https://cdn.simpleicons.org/supabase",
  Vercel: "https://cdn.simpleicons.org/vercel",
  Render: "https://cdn.simpleicons.org/render",
  "Cloudflare Workers": "https://cdn.simpleicons.org/cloudflareworkers",
  Git: "https://cdn.simpleicons.org/git",
  GitHub: "https://cdn.simpleicons.org/github",
  "GitHub Actions": "https://cdn.simpleicons.org/githubactions",
  pnpm: "https://cdn.simpleicons.org/pnpm",
  ESLint: "https://cdn.simpleicons.org/eslint",
  Biome: "https://cdn.simpleicons.org/biome",
  Playwright:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  Docker: "https://cdn.simpleicons.org/docker",
  Kubernetes: "https://cdn.simpleicons.org/kubernetes",
  AWS: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg",
  Flutter: "https://cdn.simpleicons.org/flutter",
  Figma: "https://cdn.simpleicons.org/figma",
  HTML: "https://cdn.simpleicons.org/html5",
  JavaScript: "https://cdn.simpleicons.org/javascript",
  // Devicon のみ
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Zustand:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg",
};

export function getTechIconUrl(tech: string): string | null {
  return techIconMap[tech] ?? null;
}
