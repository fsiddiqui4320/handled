# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (run this to check for TypeScript errors)
npm run lint     # ESLint check
```

## Architecture

Next.js 14 App Router. All pages are server components by default. Sections with Framer Motion animations or React state (`'use client'` directive) are client components.

**Content lives in `/content/*.ts` — never hardcode copy in components.** Legal page content is in `/content/legal/*.ts`.

All pages use `max-w-content` (1200px) as the max container width, centered with `mx-auto`.

## Key constraints

**Legal pages** (`/security`, `/data-processors`, `/privacy`, `/terms`):
- Use `LegalLayout` as the outer wrapper — never a custom layout
- Render content from `/content/legal/*.ts` verbatim — no paraphrasing, restructuring, or rewording
- All four are linked in the Footer bottom bar — do not remove them
- The `prose-legal` CSS class (in `app/globals.css`) handles all typography for legal pages

**Color tokens** — both defined in `tailwind.config.ts`, not Tailwind defaults:
- `handled-*` — brand greens (950 darkest → 50 lightest)
- `stone-*` — cool-grey neutrals (overrides Tailwind's warm stone)

**Animations** — client components that use Framer Motion import `FadeIn` from `components/ui/FadeIn.tsx`. No animation should delay content visibility by more than 0.3s.

**Form** — `CTA.tsx` is mocked. Submitting shows a success message; there is no real API call. Do not wire up a real endpoint without updating the plan.
