# Handled Project Overview

Handled is an enterprise AI operations platform specifically designed for healthcare and financial services. The project is a high-fidelity marketing website built with Next.js 14, prioritizing precision, compliance, and clarity over traditional startup playfulness.

## Core Technologies
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom color tokens (`handled-*` for greens, `stone-*` for cool-grey neutrals)
- **Animations:** Framer Motion (via `FadeIn` utility)
- **Forms:** React Hook Form

## Architecture & Conventions

### Directory Structure
- `/app`: Next.js App Router pages and layouts.
- `/components`: 
    - `/ui`: Low-level primitive components (`Button`, `Badge`, `FadeIn`).
    - `/sections`: Large homepage/landing page sections (`Hero`, `Industries`, `CTA`).
    - `/layout`: Global layout components (`Nav`, `Footer`, `LegalLayout`).
- `/content`: Centralized TypeScript files for all copy. **Never hardcode strings in components.**
- `/public`: Static assets, including the brand logo and product screenshots.

### Key Development Rules
- **Content:** Always import copy from `/content/*.ts`.
- **Legal Pages:** Use the `LegalLayout` wrapper and `prose-legal` CSS class. Content in `/content/legal/*.ts` must be rendered verbatim.
- **Styling:** Adhere to the `DESIGN.md` specification. Use `max-w-content` (1200px) for container widths.
- **Animations:** Use the `FadeIn` component. Content visibility should not be delayed by more than 0.3s.
- **Typography:** Inter is the primary font. `font-bold` (700) is reserved exclusively for the Hero H1.

## Building and Running

### Development
```bash
npm run dev      # Starts the development server at http://localhost:3000
```

### Production
```bash
npm run build    # Creates a production build and checks for TypeScript/Lint errors
npm run start    # Starts the production server
```

### Linting
```bash
npm run lint     # Runs ESLint checks
```

## Design System Summary
- **Primary Color:** `#4daf7c` (handled-300) - used for interactivity and highlights.
- **Dark Surfaces:** `#0e2318` (handled-950) - used for Hero and CTA backgrounds.
- **Neutrals:** Cool-grey scale (overriding default Tailwind stone).
- **Elevation:** Minimal use of shadows. Prefer `border border-stone-200` for cards.
- **Border Radius:** 12px (`rounded-xl`) for cards, 8px (`rounded-md`) for buttons.
