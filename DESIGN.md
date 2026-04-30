---
version: alpha
name: Handled
description: Enterprise AI operations platform for healthcare and financial services. Precision, compliance, and clarity over startup playfulness.
colors:
  # Brand greens
  primary: "#4daf7c"
  primary-dark: "#0e2318"
  primary-container: "#1a3d2e"
  primary-dim: "#234d3a"
  primary-muted: "#2a5c46"
  primary-mid: "#3d8c64"
  primary-light: "#7ecfa0"
  primary-subtle: "#b8e8cc"
  primary-ghost: "#e1f5ee"
  # Dark surfaces (hero, CTA backgrounds)
  surface-darkest: "#0e2318"
  surface-dark: "#1a2c20"
  # Neutrals
  on-surface: "#1a2420"
  on-surface-medium: "#3a4440"
  on-surface-muted: "#5a6660"
  on-surface-subtle: "#8a9490"
  border: "#cdd5d0"
  surface-raised: "#e8efeb"
  surface: "#f5f7f5"
  on-primary: "#0e2318"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.15
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 500
    lineHeight: 1.25
  h3:
    fontFamily: Inter
    fontSize: 1.0625rem
    fontWeight: 500
    lineHeight: 1.4
  body-lg:
    fontFamily: Inter
    fontSize: 1.0625rem
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.7
  body-sm:
    fontFamily: Inter
    fontSize: 0.9375rem
    lineHeight: 1.7
  label-caps:
    fontFamily: Inter
    fontSize: 0.625rem
    fontWeight: 500
    letterSpacing: 0.12em
  caption:
    fontFamily: Inter
    fontSize: 0.8125rem
    lineHeight: 1.5
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    typography: "{typography.body-sm}"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
  button-ghost:
    backgroundColor: transparent
    textColor: rgba(255,255,255,0.8)
    rounded: "{rounded.md}"
    padding: 10px 20px
  button-ghost-hover:
    textColor: "#ffffff"
  button-nav:
    backgroundColor: "{colors.primary-container}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: 6px 12px
  badge-workflow:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface-muted}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  badge-healthcare:
    backgroundColor: "{colors.primary-ghost}"
    textColor: "{colors.primary-container}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  badge-finance:
    backgroundColor: "#eff6ff"
    textColor: "#1e40af"
    rounded: "{rounded.full}"
    padding: 2px 10px
  badge-trust:
    backgroundColor: rgba(255,255,255,0.1)
    textColor: rgba(255,255,255,0.8)
    rounded: "{rounded.full}"
    padding: 2px 10px
  nav:
    backgroundColor: "#ffffff"
    height: 56px
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 20px
  card-industry:
    backgroundColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: 20px
  workflow-card:
    backgroundColor: rgba(26,44,32,0.8)
    rounded: "{rounded.xl}"
    padding: 20px
  section-hero:
    backgroundColor: "{colors.surface-darkest}"
    textColor: "#ffffff"
  section-cta:
    backgroundColor: "{colors.surface-darkest}"
    textColor: "#ffffff"
  section-dark-surface:
    backgroundColor: "{colors.surface-dark}"
  nav-link:
    textColor: "{colors.on-surface-muted}"
  nav-link-hover:
    textColor: "{colors.on-surface}"
  body-text:
    textColor: "{colors.on-surface}"
  body-text-secondary:
    textColor: "{colors.on-surface-medium}"
  body-text-subtle:
    textColor: "{colors.on-surface-subtle}"
  card-border:
    backgroundColor: "{colors.border}"
  industry-card-link:
    textColor: "{colors.primary-mid}"
  industry-card-link-hover:
    textColor: "{colors.primary}"
  icon-container:
    backgroundColor: "{colors.primary-dark}"
  primary-scale-dim:
    backgroundColor: "{colors.primary-dim}"
  primary-scale-muted:
    backgroundColor: "{colors.primary-muted}"
  primary-scale-subtle:
    backgroundColor: "{colors.primary-subtle}"
---

## Overview

Handled is an enterprise AI operations platform for healthcare and financial services. The visual identity is built for compliance-aware buyers — it should feel precise, confident, and trustworthy, not startup-playful or consumer-app flashy.

The design language is built around a single dark-green brand palette against cool-grey neutrals. Dark hero and CTA sections use the deepest greens as backgrounds. Content sections alternate between white and the lightest neutral (`surface`). The accent green (`primary`) is used exclusively for interactive states, CTAs, and eyebrow labels on dark backgrounds — never as decoration.

## Colors

The palette is two-sided: deep greens for brand surfaces and a single accent, cool greys for text and structure.

- **primary (#4daf7c):** Accent green — CTA buttons, active states, eyebrow labels on dark backgrounds. Never used as a background color on light sections.
- **surface-darkest (#0e2318):** Hero and CTA section backgrounds. The deepest brand surface.
- **primary-container (#1a3d2e):** Nav CTA button background, icon containers.
- **on-surface (#1a2420):** All body text on light backgrounds. Near-black with a green tint.
- **on-surface-muted (#5a6660):** Secondary text, nav links, captions.
- **border (#cdd5d0):** Card borders, dividers, table borders.
- **surface (#f5f7f5):** Page background, alternating section backgrounds.
- **on-primary (#0e2318):** Text color when placed on `primary` buttons — ensures contrast.

Typography on dark green surfaces (`surface-darkest`, `primary-container`) uses white at varying opacities: headlines at full white, body copy at `white/60`, secondary labels at `white/40`.

## Typography

Inter is the sole typeface across all surfaces. The weight scale is restrained: headings at 500 (medium) except the hero H1 which is 700 (bold). Never use 700 weight outside the primary hero headline.

- **h1:** 48px / bold / 1.15 line-height. Hero only. Partial green highlight allowed: a span of key words rendered in `primary` to emphasize the problem statement.
- **h2:** 36px / medium / 1.25. Section headings on light backgrounds.
- **h3:** 17px / medium / 1.4. Card titles, feature names.
- **body-lg:** 17px / regular / 1.7. Hero subhead, sub-page intro paragraphs.
- **body-md:** 16px / regular / 1.7. Section body copy.
- **label-caps:** 10px / medium / tracking 0.12em / uppercase. Section eyebrows, card headers on dark surfaces. Use `primary` on dark backgrounds, `on-surface-subtle` on light.
- **caption:** 13px / regular. Footer tagline, form helper text, legal small print.

## Layout

Max content width is 1200px, centered. All sections use `px-6` horizontal padding on their containers.

Section structure follows a strict alternation:
- **Dark sections** (`surface-darkest`): Hero, CTA. White text.
- **White sections**: HowDifferent, Proof. `on-surface` text.
- **Light sections** (`surface`): Integration strip, Industries.

The hero is a two-column grid at `lg` breakpoint (1024px): pitch copy left, WorkflowCard right. Below `lg`, single column with the WorkflowCard below the copy.

The HowDifferent section is two-column at `lg`: problem statement left, 2×1 feature card grid right.

Industry cards are two-column at `md` (768px), single column below.

CTA form is flex-row at `sm` (640px), stacked single column below — input full width, button full width below.

Max content width applies inside every section. Sections themselves are full-bleed.

## Elevation & Depth

Elevation is used sparingly. Only the WorkflowCard uses a shadow (`shadow-xl`) to lift it off the dark hero background. All other cards use border-only elevation (`border border-stone-200`) — no shadows. This keeps the design flat and precise, appropriate for enterprise compliance contexts.

## Shapes

Border radius is consistent by component type:
- **Cards** (FeatureCard, IndustryCard, legal compliance cards): `rounded-xl` (12px)
- **WorkflowCard** (hero widget): `rounded-2xl` (16px)
- **Buttons**: `rounded-md` (8px)
- **Badges / pills**: `rounded-full`
- **Integration chips**: `rounded-md` (8px)

Never use `rounded-sm` on cards. Never use `rounded-xl` on buttons.

## Components

### Nav
Sticky, white background, 1px bottom border (`border`). Logo mark: 28×28px `primary-container` square with a 2×2 grid icon in white. Wordmark: "Handled" in `on-surface`, font-medium, 14px. Center links in `on-surface-muted`. Right CTA uses `button-nav`. Mobile: hamburger collapses center links, CTA button always visible.

### WorkflowCard
Rendered on the hero dark background. Card surface is `rgba(26,44,32,0.8)` with a subtle green border. Header label uses `label-caps` in `primary`. Queue items show three states: done (green checkmark circle), in-progress (amber pulsing dot, `animate-pulse`, amber text), queued (muted dot, low-opacity text). Completed items get a strikethrough. Stats row: provider count in white / `body-lg` bold, cycle time in `primary` / `body-lg` bold. The animation cycles items every 1.2s.

### FeatureCard
`surface` background, `border` stroke, `rounded-xl`. Icon container: 36×36px `primary-container` square, `rounded-lg`, white SVG icon inside. Title in `h3`. Body in `body-sm` / `on-surface-muted`.

### IndustryCard
White background, `border` stroke, `rounded-xl`, flex column so the "Learn more →" link is always pinned to the bottom via `mt-auto`. Tag badge at top. Pain line in `on-surface-subtle`. Workflow chips use `badge-workflow`. Link color: `primary-mid` → `primary` on hover.

### LegalLayout
Used for all four legal pages (`/security`, `/data-processors`, `/privacy`, `/terms`). White background. Content column max-width 768px, centered. Page `h1` at 28px / medium. `lastUpdated` line in `caption` / `on-surface-subtle`. All legal copy rendered inside `.prose-legal` CSS class — do not alter its typographic rules.

### CTA Form (mocked)
Input: semi-transparent dark bg (`white/10`), muted border (`white/20`), white placeholder at `white/40`. Focus border: `primary`. Button: `button-primary`. On submit: replace the form with a single success line in `primary`. Error state: `text-red-400` below the input, no page reload.

## Do's and Don'ts

**Do:**
- Use `label-caps` for all eyebrow labels. Never use regular body weight for eyebrows.
- Render `primary` only as an interactive color (buttons, links, active states) or as an eyebrow label on dark surfaces.
- Keep all section copy in `/content/*.ts` — components must import from content files, not hardcode strings.
- Use `border border-stone-200` for card elevation. No shadows on cards.
- Keep the WorkflowCard animation cycle at ~1.2s per item. Faster feels hectic; slower feels broken.

**Don't:**
- Use `font-bold` (700) anywhere except the hero `h1`.
- Add parallax, hero video, modals on load, or confetti on form submit.
- Use stock photography of doctors, nurses, or bankers.
- Add fake urgency ("limited slots", countdown timers).
- Alter legal page content — wording is frozen. Layout and typography may change; copy may not.
- Add a CTA section or marketing copy to any legal page.
- Use Tailwind's default `stone-*` palette — the project overrides it with a cooler custom scale.
