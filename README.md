# Portfolio

Personal portfolio site scaffold.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- HeroUI v3
- Framer Motion
- React Icons
- next-themes (dark by default)

## Getting started

```bash
npm install
npm run dev
```

## Structure

```
app/                   routes, layout, providers, global styles
components/
  ui/                   reusable primitives (Button, Container, Section)
  layout/               header/footer/nav (add as built)
  sections/             page sections: Hero, About, Projects, ... (add as built)
lib/                    utils (cn helper, etc.)
types/                  shared TypeScript types
data/                   static content (nav links, site config, project data, ...)
hooks/                  custom hooks
public/images/          static image assets
```

## Notes

- Dark theme is the default (`app/providers.tsx`); toggle later with `useTheme()` from `next-themes`.
- Smooth scrolling is enabled globally in `app/globals.css` and respects `prefers-reduced-motion`.
- Global typography is wired through `next/font` (Inter) → CSS variable → Tailwind's `@theme inline`, so swapping fonts only touches `app/layout.tsx` and `app/globals.css`.
- `Button` wraps HeroUI's `Button` with a shared Framer Motion hover/tap interaction — use it instead of importing `@heroui/react`'s `Button` directly, everywhere else import HeroUI components as needed.
