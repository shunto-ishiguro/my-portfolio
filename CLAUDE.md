# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev      # Start development server (localhost:3000)
pnpm run build    # Production build
pnpm run start    # Start production server
pnpm run lint     # Run Biome check
pnpm run lint:fix # Run Biome check with auto-fix
pnpm run format   # Run Biome formatter
```

## Architecture

This is a Next.js 16 portfolio site using the App Router with React Server Components.

### Key Technologies
- **Next.js 16** with App Router (RSC enabled)
- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** (new-york style) - components in `components/ui/`
- **Lucide React** for icons

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)
- `@/components`, `@/lib`, `@/components/ui` are primary import paths

### Project Structure
- `app/` - Pages using App Router with Japanese locale (`lang="ja"`)
  - `page.tsx` - Homepage with profile, strengths, navigation
  - `experience/`, `skills/`, `works/`, `contact/` - Section pages
  - `works/[id]/` - Dynamic work detail pages
- `components/` - Shared components (`Header.tsx`, `WorksGrid.tsx`)
- `components/ui/` - shadcn/ui components
- `lib/utils.ts` - `cn()` helper for Tailwind class merging
- `lib/works.ts` - Works data with `Work` interface

### Styling
- CSS variables for theming defined in `app/globals.css` (OKLCH color space)
- Dark mode support via `.dark` class
- Uses `tw-animate-css` for animations
