# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Handled landing page with Deep Forest aesthetic — Playfair Display headlines, connected-graph particle canvas in the hero, mint-tinted content sections, and a glowing white headline.

**Architecture:** All changes are visual only — no copy, routes, or data files change. Fonts move from Inter (via `next/font/google`) to DM Sans + Playfair Display using CSS variables passed through `layout.tsx`. A new `ParticleCanvas` client component drives the connected-graph animation. Sections shift from `bg-white`/`bg-stone-50` to `bg-mint` (`#f0f7f2`).

**Tech Stack:** Next.js 14 App Router, Tailwind CSS, Framer Motion (existing), TypeScript, `next/font/google`

---

## File Map

| File | Change |
|---|---|
| `app/layout.tsx` | Replace `Inter` with `DM_Sans` + `Playfair_Display` via CSS variables |
| `app/globals.css` | Add `.headline-glow` and `.headline-glow-accent` utility classes |
| `tailwind.config.ts` | Add `mint` color token; add `fontFamily.serif`; update `fontFamily.sans` to use CSS var |
| `components/ui/ParticleCanvas.tsx` | **New.** Canvas-based connected-graph ambient animation |
| `components/layout/Nav.tsx` | Dark glass effect; updated link + button colors; logo filter for dark bg |
| `components/ui/Button.tsx` | Update `nav` variant to ghost/outline style for dark nav |
| `components/sections/Hero.tsx` | Add `ParticleCanvas`, ambient glows, Playfair `font-serif` h1 with `.headline-glow` |
| `components/ui/WorkflowCard.tsx` | Add `backdrop-blur-sm` and deeper shadow |
| `components/ui/FeatureCard.tsx` | `bg-stone-50` → `bg-white` (floats on mint) |
| `components/sections/SocialStrip.tsx` | `bg-white` → `bg-mint`; updated border |
| `components/sections/HowDifferent.tsx` | `bg-white` → `bg-mint`; h2 → `font-serif` |
| `components/sections/Industries.tsx` | `bg-stone-50` → `bg-mint`; h2 → `font-serif` |
| `components/sections/Proof.tsx` | `bg-white` → `bg-mint` |
| `components/sections/CTA.tsx` | Add ambient glow; h2 → `font-serif` |

---

## Task 1: Foundation — Fonts and Tailwind Tokens

**Files:**
- Modify: `app/layout.tsx`
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Replace Inter with DM Sans + Playfair Display in `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Handled — AI Operations for Healthcare & Financial Services',
  description: 'AI-powered back-office operations for credentialing, enrollment, retention, and onboarding. Deployed inside your existing systems. No migration required.',
  openGraph: {
    title: 'Handled',
    description: "Your team shouldn't be doing the work AI can do.",
    url: 'https://withhandled.com',
    siteName: 'Handled',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Add `mint` color, `fontFamily.serif`, and update `fontFamily.sans` in `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        handled: {
          950: '#0e2318',
          900: '#1a2c20',
          800: '#1a3d2e',
          700: '#234d3a',
          600: '#2a5c46',
          400: '#3d8c64',
          300: '#4daf7c',
          200: '#7ecfa0',
          100: '#b8e8cc',
          50:  '#e1f5ee',
        },
        stone: {
          950: '#1a2420',
          800: '#3a4440',
          600: '#5a6660',
          400: '#8a9490',
          200: '#cdd5d0',
          100: '#e8efeb',
          50:  '#f5f7f5',
        },
        mint: '#f0f7f2',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 3: Add headline glow utility classes to `app/globals.css`**

Append these classes after the existing `.prose-legal` block:

```css
.headline-glow {
  color: #ffffff;
  text-shadow:
    0 0 40px rgba(77, 175, 124, 0.35),
    0 0 80px rgba(77, 175, 124, 0.12);
}

.headline-glow-accent {
  color: #7ecfa0;
  text-shadow: 0 0 30px rgba(126, 207, 160, 0.50);
}
```

- [ ] **Step 4: Verify build passes**

```bash
npm run build
```

Expected: clean build, no TypeScript errors. The font variable names (`--font-dm-sans`, `--font-playfair`) and `mint` token should be available from this point forward.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx tailwind.config.ts app/globals.css
git commit -m "feat: add Playfair Display + DM Sans fonts and mint color token"
```

---

## Task 2: ParticleCanvas Component

**Files:**
- Create: `components/ui/ParticleCanvas.tsx`

- [ ] **Step 1: Create `components/ui/ParticleCanvas.tsx`**

```tsx
'use client'
import { useEffect, useRef } from 'react'

interface ParticleCanvasProps {
  nodeCount?: number
  maxDist?: number
  className?: string
}

export default function ParticleCanvas({
  nodeCount = 40,
  maxDist = 100,
  className = '',
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Node = { x: number; y: number; vx: number; vy: number; r: number }
    let nodes: Node[] = []
    let W = 0
    let H = 0
    let animId: number

    function init() {
      W = canvas!.width = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = `rgba(77,175,124,${(1 - dist / maxDist) * 0.25})`
            ctx!.lineWidth = 0.6
            ctx!.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(77,175,124,0.6)'
        ctx!.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(init)
    ro.observe(canvas)
    init()
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [nodeCount, maxDist])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: clean build. ParticleCanvas exports a default function and has no external dependencies beyond React.

- [ ] **Step 3: Commit**

```bash
git add components/ui/ParticleCanvas.tsx
git commit -m "feat: add ParticleCanvas connected-graph animation component"
```

---

## Task 3: Nav and Button

**Files:**
- Modify: `components/layout/Nav.tsx`
- Modify: `components/ui/Button.tsx`

- [ ] **Step 1: Update `nav` variant in `components/ui/Button.tsx`**

Change the `nav` variant from dark green fill to ghost/outline for use on a dark nav background:

```tsx
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'nav'
  size?: 'sm' | 'md'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-handled-300 focus:ring-offset-2 rounded-md'
    const variants = {
      primary: 'bg-handled-300 text-handled-950 hover:bg-handled-200',
      ghost: 'border border-white/30 text-white/80 hover:border-white/60 hover:text-white bg-transparent',
      nav: 'border border-handled-600 text-handled-300 hover:border-handled-300 hover:text-handled-200 bg-transparent',
    }
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
    }
    return (
      <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
export default Button
```

- [ ] **Step 2: Rewrite `components/layout/Nav.tsx` with dark glass treatment**

The logo is an SVG image. `brightness-0 invert` filters it to white on the dark background. Mobile menu also goes dark.

```tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { navLinks } from '@/content/nav'
import Button from '@/components/ui/Button'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-handled-950/75 backdrop-blur-md border-b border-handled-700/40">
      <div className="mx-auto max-w-content px-6 h-14 flex items-center justify-between">
        {/* Logo — brightness-0 invert renders the SVG white on the dark nav */}
        <Link href="/">
          <Image
            src="/logos/handled-logo.svg"
            alt="Handled"
            width={120}
            height={37}
            priority
            className="brightness-0 invert opacity-90"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-handled-400 hover:text-handled-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button variant="nav" size="sm" className="hidden sm:inline-flex">
            Schedule a review
          </Button>
          <button
            className="md:hidden p-1 text-handled-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              ) : (
                <path d="M3 7h14M3 13h14" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-handled-700/40 bg-handled-950/95 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-handled-400 hover:text-handled-200 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="nav" size="sm" className="w-full sm:hidden mt-2">
            Schedule a review
          </Button>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 4: Commit**

```bash
git add components/layout/Nav.tsx components/ui/Button.tsx
git commit -m "feat: dark glass nav with Handled green link colors and outline CTA"
```

---

## Task 4: Hero and WorkflowCard

**Files:**
- Modify: `components/sections/Hero.tsx`
- Modify: `components/ui/WorkflowCard.tsx`

- [ ] **Step 1: Rewrite `components/sections/Hero.tsx`**

The section becomes `relative overflow-hidden`. ParticleCanvas sits at z-0. Two ambient glow divs. Hero content at `z-10`. The h1 uses `font-serif` (Playfair Display via CSS var) with `.headline-glow` / `.headline-glow-accent` classes. Body text gets `font-light`.

```tsx
'use client'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import WorkflowCard from '@/components/ui/WorkflowCard'
import FadeIn from '@/components/ui/FadeIn'
import ParticleCanvas from '@/components/ui/ParticleCanvas'

const trustPills = ['Built by Rippling alumni', 'Wiser team', 'HIPAA-ready']

export default function Hero() {
  const scrollToHowDifferent = () => {
    document.getElementById('how-different')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-handled-950 pt-16 pb-20 px-6 overflow-hidden">
      <ParticleCanvas />
      <div className="pointer-events-none absolute -top-24 -right-20 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(77,175,124,0.05)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-12 -left-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(77,175,124,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <FadeIn delay={0}>
              <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-5 opacity-70">
                AI operations for regulated industries
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5 headline-glow">
                Your team shouldn&apos;t be doing the work{' '}
                <em className="headline-glow-accent">AI can do.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[17px] font-light text-white/60 leading-relaxed mb-8 max-w-lg">
                Handled runs your back-office operations — credentialing, enrollment, retention, onboarding — using AI agents that work inside your existing systems. No migration. No new headcount.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button variant="primary" size="md" className="px-5 py-2.5">
                  Schedule a 20-min review
                </Button>
                <Button variant="ghost" size="md" className="px-5 py-2.5" onClick={scrollToHowDifferent}>
                  See how it works
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-2">
                {trustPills.map(pill => (
                  <Badge key={pill} variant="trust">{pill}</Badge>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — WorkflowCard */}
          <div className="flex justify-center lg:justify-end">
            <WorkflowCard />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update `components/ui/WorkflowCard.tsx` — add glass blur and deeper shadow**

Change only the outer wrapper's className. Find:
```tsx
<div className="bg-handled-900/80 border border-handled-700/50 rounded-2xl p-5 shadow-xl w-full max-w-sm mx-auto">
```

Replace with:
```tsx
<div className="bg-handled-900/80 border border-handled-700/50 rounded-2xl p-5 shadow-2xl shadow-black/35 backdrop-blur-sm w-full max-w-sm mx-auto">
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

Expected: clean build. The `bg-[radial-gradient(...)]` arbitrary value classes are valid Tailwind v3 syntax.

- [ ] **Step 4: Start dev server and visually verify the hero**

```bash
npm run dev
```

Open `http://localhost:3000`. Check:
- Particle nodes drift and connect with faint lines over the dark green background
- Headline renders in Playfair Display, white with a subtle green glow
- *AI can do.* is italic and slightly brighter green
- Two ambient glow blobs visible (faint radial gradients) but subtle
- WorkflowCard has visible glass blur against the particles
- Nav is dark glass with the logo appearing white

- [ ] **Step 5: Commit**

```bash
git add components/sections/Hero.tsx components/ui/WorkflowCard.tsx
git commit -m "feat: hero redesign — particle canvas, Playfair headline, ambient glows"
```

---

## Task 5: FeatureCard

**Files:**
- Modify: `components/ui/FeatureCard.tsx`

- [ ] **Step 1: Update `components/ui/FeatureCard.tsx` — white bg for mint context**

`bg-stone-50` becomes `bg-white` so cards float cleanly on the mint section background.

```tsx
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  body: string
}

export default function FeatureCard({ icon, title, body }: FeatureCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5">
      <div className="w-9 h-9 bg-handled-800 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-medium text-stone-950 text-[15px] mb-2">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
    </div>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/ui/FeatureCard.tsx
git commit -m "feat: FeatureCard white bg for mint section context"
```

---

## Task 6: SocialStrip and HowDifferent

**Files:**
- Modify: `components/sections/SocialStrip.tsx`
- Modify: `components/sections/HowDifferent.tsx`

- [ ] **Step 1: Update `components/sections/SocialStrip.tsx` — mint background**

```tsx
import { integrations } from '@/content/integrations'

export default function SocialStrip() {
  return (
    <section className="bg-mint border-t border-handled-700/30 border-b border-stone-200 py-3 px-8">
      <div className="mx-auto max-w-content flex items-center gap-4 overflow-x-auto">
        <span className="text-[10px] text-stone-400 whitespace-nowrap flex-shrink-0">Integrates with</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {integrations.map(name => (
            <span key={name} className="bg-white border border-stone-200 text-stone-600 text-xs px-3 py-1 rounded-md whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
        <span className="text-[10px] text-stone-400 whitespace-nowrap flex-shrink-0">+ your data warehouse</span>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update `components/sections/HowDifferent.tsx` — mint background and Playfair headline**

```tsx
import FeatureCard from '@/components/ui/FeatureCard'
import FadeIn from '@/components/ui/FadeIn'

const QueueIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="3" width="14" height="2" rx="1" fill="white" opacity="0.9"/>
    <rect x="2" y="8" width="10" height="2" rx="1" fill="white" opacity="0.7"/>
    <rect x="2" y="13" width="12" height="2" rx="1" fill="white" opacity="0.5"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" opacity="0.9"/>
    <path d="M9 5v4l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
  </svg>
)

export default function HowDifferent() {
  return (
    <section id="how-different" className="bg-mint py-20 px-6">
      <div className="mx-auto max-w-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <FadeIn>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">How we&apos;re different</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 leading-tight mb-5">
              The tools changed.<br />The manual work didn&apos;t.
            </h2>
            <p className="text-[16px] text-stone-600 leading-relaxed">
              More software, same repetitive work: checking portals, chasing follow-ups, re-entering data across systems. Handled encodes that work into AI agents that run inside your existing systems — operated by your team or managed end-to-end by ours.
            </p>
          </div>
        </FadeIn>

        {/* Right — 2-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeIn delay={0}>
            <FeatureCard
              icon={<QueueIcon />}
              title="AI harness for your team"
              body="A custom work queue deployed into your existing tools. Our AI agents surface what needs attention, draft next steps, and handle portal interactions."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <FeatureCard
              icon={<ClockIcon />}
              title="Fully managed"
              body="Our operators run the operation end-to-end. Same AI agents, same integrations — you get completed work and clear visibility without adding headcount."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/sections/SocialStrip.tsx components/sections/HowDifferent.tsx
git commit -m "feat: SocialStrip and HowDifferent — mint bg, Playfair headline"
```

---

## Task 7: Industries and Proof

**Files:**
- Modify: `components/sections/Industries.tsx`
- Modify: `components/sections/Proof.tsx`

- [ ] **Step 1: Update `components/sections/Industries.tsx` — mint background and Playfair headline**

```tsx
import IndustryCard from '@/components/ui/IndustryCard'
import { industries } from '@/content/industries'
import FadeIn from '@/components/ui/FadeIn'

export default function Industries() {
  return (
    <section className="bg-mint py-20 px-6">
      <div className="mx-auto max-w-content">
        <FadeIn>
          <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">
            Purpose-built for regulated industries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mb-10 leading-tight">
            Deep in the workflows that matter most.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((industry, i) => (
            <FadeIn key={industry.tag} delay={i * 0.1}>
              <IndustryCard {...industry} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update `components/sections/Proof.tsx` — mint background**

```tsx
import Link from 'next/link'

export default function Proof() {
  return (
    <section className="bg-mint py-20 px-6">
      <div className="mx-auto max-w-content flex justify-center">
        <div className="max-w-[560px] text-center">
          <blockquote className="text-[16px] text-stone-700 leading-relaxed mb-4">
            &ldquo;Built by early team members from Rippling and the team behind Wiser — a revenue intelligence platform used by teams at Superhuman and Lithic.&rdquo;
          </blockquote>
          <Link href="/about" className="text-sm text-handled-400 hover:text-handled-300 font-medium transition-colors">
            About Handled →
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/sections/Industries.tsx components/sections/Proof.tsx
git commit -m "feat: Industries and Proof sections — mint background"
```

---

## Task 8: CTA Section

**Files:**
- Modify: `components/sections/CTA.tsx`

- [ ] **Step 1: Update `components/sections/CTA.tsx` — ambient glow and Playfair headline**

The section already has the correct dark background (`bg-handled-950`). Add the ambient glow div and switch h2 to `font-serif`.

```tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FadeIn from '@/components/ui/FadeIn'

interface FormValues { email: string }

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log('CTA form:', data)
    setSubmitted(true)
  }

  return (
    <section className="relative bg-handled-950 py-20 px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(77,175,124,0.05)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-content flex justify-center">
        <FadeIn direction="none">
          <div className="w-full max-w-[480px] text-center">
            <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-4">Work with us</p>
            <h2 className="font-serif text-[28px] font-bold text-white mb-3 leading-tight">
              Tell us which operation is slowing you down.
            </h2>
            <p className="text-sm text-white/40 mb-8">
              We&apos;ll map out how Handled works inside your existing setup. No commitment, no pitch deck.
            </p>

            {submitted ? (
              <p className="text-handled-300 text-[15px]">We&apos;ll reach out within one business day.</p>
            ) : (
              <>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 w-full max-w-[400px] mx-auto">
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    type="email"
                    placeholder="Work email"
                    className="flex-1 w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-handled-300"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-handled-300 text-handled-950 rounded-md px-4 py-2 text-sm font-medium hover:bg-handled-200 transition-colors whitespace-nowrap"
                  >
                    Schedule 20 min
                  </button>
                </form>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-2">Please enter a valid email address.</p>
                )}
                <p className="text-[10px] text-stone-500 mt-4">
                  No sales call. We map your workflow and show you what Handled would actually do.
                </p>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/sections/CTA.tsx
git commit -m "feat: CTA section — ambient glow and Playfair headline"
```

---

## Task 9: Final Smoke Test

- [ ] **Step 1: Full production build**

```bash
npm run build
```

Expected: clean build, no TypeScript or Tailwind errors.

- [ ] **Step 2: Start dev server and walk every section**

```bash
npm run dev
```

Open `http://localhost:3000`. Scroll top to bottom and verify:

| Section | Check |
|---|---|
| Nav | Dark glass, logo is white, links are handled-green, CTA button is outline style |
| Hero | Particle nodes drift and link; headline is Playfair Bold white with green glow; *AI can do.* italic and brighter green; WorkflowCard has glass blur |
| SocialStrip | Mint background, thin top border separating from dark hero |
| HowDifferent | Mint background; h2 is Playfair; FeatureCards are white on mint |
| Industries | Mint background; h2 is Playfair; IndustryCards visible |
| Proof | Mint background; blockquote readable |
| CTA | Dark background, ambient glow visible in top-right, h2 is Playfair |
| Footer | Links and logo still visible (SVG invert applies only in Nav) |

- [ ] **Step 3: Check sub-pages**

Open `/healthcare`, `/finance`, `/about`. Verify the dark glass Nav still looks correct on these pages (it will sit over whatever background the sub-pages have).

- [ ] **Step 4: Check legal pages**

Open `/privacy`. Verify `LegalLayout` still renders correctly and `prose-legal` typography is unaffected.

- [ ] **Step 5: Mobile check**

Resize browser to 375px width. Verify:
- Nav hamburger menu opens with dark background
- Hero headline wraps cleanly
- ParticleCanvas fills the section without overflow

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat: landing page redesign complete — Deep Forest aesthetic"
```
