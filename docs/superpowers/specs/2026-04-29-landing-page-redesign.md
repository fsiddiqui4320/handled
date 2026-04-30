# Handled Landing Page Redesign

**Date:** 2026-04-29
**Status:** Approved — ready for implementation planning

---

## Overview

A visual redesign of the Handled landing page (`/`). The content, copy, page structure, and all section order remain identical. This spec covers only visual and motion changes. Legal pages are out of scope.

---

## Design Decisions

All five decisions were confirmed visually during brainstorming:

| Decision | Choice |
|---|---|
| Aesthetic direction | Deep Forest — existing dark green pushed harder |
| Particle effect | Connected Graph — drifting nodes that link with faint lines |
| Headline font | Playfair Display Bold (+ DM Sans for body) |
| Section color treatment | Dark hero → mint-tinted sections → dark CTA bookend |
| Headline treatment | Pure white with subtle green `text-shadow` glow |

---

## Visual Identity

### Color Tokens

No existing tokens are removed. One new token is added to `tailwind.config.ts`:

```ts
mint: '#f0f7f2'  // replaces bg-white in all content sections
```

Existing `handled-*` and `stone-*` tokens are preserved and still used.

### Typography

Two Google Fonts replace Inter for display use. Inter is removed entirely.

| Role | Font | Weight |
|---|---|---|
| Display headlines (h1, h2) | Playfair Display | 700 |
| Italic accent phrases | Playfair Display | 700 italic |
| Body / UI | DM Sans | 300, 400, 500, 600 |

Import added to `app/globals.css` via `@import` from Google Fonts. `tailwind.config.ts` `fontFamily.sans` updated to `['DM Sans', ...]`.

### Headline Glow

Applied to every Playfair Display headline in the hero:

```css
/* Main headline text */
color: #ffffff;
text-shadow:
  0 0 40px rgba(77, 175, 124, 0.35),
  0 0 80px rgba(77, 175, 124, 0.12);

/* Italic green accent span */
color: #7ecfa0;
text-shadow: 0 0 30px rgba(126, 207, 160, 0.50);
```

Applied only in the Hero section. Section headlines below the fold use Playfair Display without glow.

---

## Section-by-Section Changes

### Nav (`components/layout/Nav.tsx`)

- Logo text: Playfair Display italic, `#b8e8cc`
- Nav links: DM Sans, `#4d7a62`, hover → `#7ecfa0`
- CTA button: ghost style — transparent bg, `border: 1px solid #2a5c46`, text `#4daf7c`
- Glass effect: always-on — `backdrop-filter: blur(12px)`, `background: rgba(14,35,24,0.75)`, `border-bottom: 1px solid rgba(42,92,70,0.4)`. No scroll listener needed; Nav always sits over dark content.
- No structural changes

### Hero (`components/sections/Hero.tsx`)

- Background: `#0e2318` (unchanged)
- Add `<ParticleCanvas />` as absolute-positioned canvas behind content (see new component below)
- Add two ambient radial glow `div`s (absolute, pointer-events: none):
  - Top-right: `600×600px`, `radial-gradient(circle, #4daf7c0d, transparent)`
  - Bottom-left: `400×400px`, `radial-gradient(circle, #4daf7c08, transparent)`
- Eyebrow: unchanged (`text-handled-300 opacity-70`)
- `h1`: Playfair Display Bold, `text-white`, + glow `text-shadow` (see above). Italic accent via `<em>` with green glow.
- Body text: DM Sans Light (weight 300), `#3d6650`
- Buttons: unchanged styles, DM Sans font
- Trust pills: unchanged
- WorkflowCard: add `backdrop-filter: blur(8px)` and `box-shadow: 0 24px 60px rgba(0,0,0,0.35)`

### SocialStrip (`components/sections/SocialStrip.tsx`)

- Background: `bg-mint` (was `bg-white` or similar)
- Thin top border: `border-t border-handled-700/30` to separate from dark hero
- Typography: DM Sans, no Playfair needed here

### HowDifferent (`components/sections/HowDifferent.tsx`)

- Background: `bg-mint` (was `bg-white`)
- Section `h2`: Playfair Display Bold, `text-stone-950`
- Eyebrow: unchanged (`text-stone-400`)
- Body: DM Sans, `text-stone-600`
- FeatureCards: white bg (`bg-white`) with `border border-stone-200` — cards float on mint

### Industries (`components/sections/Industries.tsx`)

- Background: `bg-mint`
- Section `h2`: Playfair Display Bold
- IndustryCards: white bg with `border border-stone-200`

### Proof (`components/sections/Proof.tsx`)

- Background: `bg-mint`
- Blockquote text: DM Sans, `text-stone-700` (unchanged in weight)
- "About Handled →" link: `text-handled-400` (unchanged)

### CTA (`components/sections/CTA.tsx`)

- Background: `bg-handled-950` (unchanged — dark bookend)
- Add the same ambient radial glow div as the hero (top-right, smaller: 400×400px)
- `h2`: Playfair Display Bold (was font-medium)
- Body and form: DM Sans (unchanged behavior — still mocked)

### Footer (`components/layout/Footer.tsx`)

- DM Sans throughout
- No structural changes

---

## New Component: `ParticleCanvas`

**File:** `components/ui/ParticleCanvas.tsx`
**Type:** `'use client'` component

### Behavior

- Full-width, full-height `<canvas>` absolutely positioned behind hero content
- `z-index: 0`; hero content sits at `z-index: 1` or higher
- Resizes with `ResizeObserver` on the canvas element
- 40 nodes, each with:
  - Random starting position across the canvas
  - Slow random velocity (`±0.35 px/frame`)
  - Bounces off all four edges
  - Radius: `1–2.8px`
- Connections:
  - Draw a line between any two nodes closer than `100px`
  - Line opacity: `(1 - dist/100) * 0.25`
  - Line color: `rgba(77, 175, 124, alpha)`
  - Line width: `0.6px`
- Node color: `rgba(77, 175, 124, 0.6)`
- No mouse interaction (purely ambient)
- `requestAnimationFrame` loop

### Props

```ts
interface ParticleCanvasProps {
  nodeCount?: number   // default 40
  maxDist?: number     // default 100
  className?: string
}
```

---

## Preserved (No Changes)

- All page copy and content data files (`/content/*.ts`)
- All page routes and structure
- Legal pages and `LegalLayout`
- `FadeIn` scroll animation component and all existing FadeIn usage
- CTA form behavior (still mocked, no real endpoint)
- `max-w-content` (1200px) container width
- All legal page links in Footer
- Mobile layout breakpoints

---

## Files Touched

| File | Change type |
|---|---|
| `app/globals.css` | Add Google Fonts import, update body font |
| `tailwind.config.ts` | Add `mint` color token, update `fontFamily.sans` |
| `components/ui/ParticleCanvas.tsx` | **New file** |
| `components/layout/Nav.tsx` | Logo font, link styles, glass effect |
| `components/sections/Hero.tsx` | Add ParticleCanvas, ambient glows, Playfair h1 with glow, DM Sans body |
| `components/sections/SocialStrip.tsx` | `bg-mint` |
| `components/sections/HowDifferent.tsx` | `bg-mint`, Playfair h2 |
| `components/sections/Industries.tsx` | `bg-mint`, Playfair h2 |
| `components/sections/Proof.tsx` | `bg-mint` |
| `components/sections/CTA.tsx` | Ambient glow, Playfair h2 |
| `components/layout/Footer.tsx` | DM Sans font class |
| `components/ui/FeatureCard.tsx` | `bg-white border border-stone-200` for mint context |
| `components/ui/IndustryCard.tsx` | `bg-white border border-stone-200` for mint context |
