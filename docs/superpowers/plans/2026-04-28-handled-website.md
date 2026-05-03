# Handled Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full Handled website redesign as a locally-runnable Next.js 14 mockup with all pages, animations, and verbatim legal content.

**Architecture:** Next.js 14 App Router; all content in `/content/*.ts`; animated sections are `'use client'` components using Framer Motion; legal pages share a `LegalLayout` wrapper; CTA form is mocked (no API call).

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, react-hook-form

---

## File Map

```
/app
  layout.tsx                  — root layout, Inter font, global metadata
  page.tsx                    — home page (assembles sections)
  healthcare/page.tsx
  finance/page.tsx
  about/page.tsx
  security/page.tsx
  data-processors/page.tsx
  privacy/page.tsx
  terms/page.tsx

/components
  /layout
    Nav.tsx                   — sticky nav, hamburger on mobile
    Footer.tsx                — two-col + legal links bottom bar
    LegalLayout.tsx           — shared wrapper for all 4 legal pages
  /sections
    Hero.tsx                  — two-col hero + WorkflowCard
    SocialStrip.tsx           — integration logo chips
    HowDifferent.tsx          — problem statement + 2 feature cards
    Industries.tsx            — healthcare + finance cards
    Proof.tsx                 — pull-quote credibility block
    CTA.tsx                   — mocked email form
  /ui
    WorkflowCard.tsx          — animated credentialing queue widget
    FeatureCard.tsx           — used in HowDifferent
    IndustryCard.tsx          — used in Industries
    Button.tsx
    Badge.tsx

/content
  nav.ts
  integrations.ts
  industries.ts
  /legal
    security.ts
    data-processors.ts
    privacy.ts
    terms.ts
```

---

### Task 1: Initialize project

**Files:** `package.json`, `tailwind.config.ts`, `tsconfig.json` (all generated)

- [ ] **Step 1: Scaffold Next.js 14**

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias="@/*"
```

When prompted: answer Yes to all defaults.

- [ ] **Step 2: Install animation + form deps**

```bash
npm install framer-motion react-hook-form
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Open http://localhost:3000 — default Next.js page should load.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: initialize Next.js 14 project with Tailwind and Framer Motion"
```

---

### Task 2: Tailwind design tokens

**Files:** `tailwind.config.ts`

- [ ] **Step 1: Replace tailwind config**

```ts
// tailwind.config.ts
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
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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

- [ ] **Step 2: Commit**

```bash
git add tailwind.config.ts && git commit -m "feat: add handled color tokens and typography to tailwind config"
```

---

### Task 3: App root layout

**Files:** `app/layout.tsx`, `app/globals.css`

- [ ] **Step 1: Update globals.css**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #f5f7f5;
  color: #1a2420;
}
```

- [ ] **Step 2: Update app/layout.tsx**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx app/globals.css && git commit -m "feat: configure root layout with Inter font and metadata"
```

---

### Task 4: UI primitives — Button and Badge

**Files:** `components/ui/Button.tsx`, `components/ui/Badge.tsx`

- [ ] **Step 1: Create Button**

```tsx
// components/ui/Button.tsx
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
      nav: 'bg-handled-800 text-white hover:bg-handled-700',
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

- [ ] **Step 2: Create Badge**

```tsx
// components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode
  variant?: 'trust' | 'workflow' | 'healthcare' | 'finance'
  className?: string
}

export default function Badge({ children, variant = 'workflow', className = '' }: BadgeProps) {
  const variants = {
    trust: 'bg-white/10 text-white/80 border border-white/20',
    workflow: 'bg-stone-100 text-stone-600 border border-stone-200',
    healthcare: 'bg-handled-50 text-handled-800 border border-handled-100',
    finance: 'bg-blue-50 text-blue-800 border border-blue-100',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/ui/Button.tsx components/ui/Badge.tsx && git commit -m "feat: add Button and Badge UI primitives"
```

---

### Task 5: Nav component

**Files:** `components/layout/Nav.tsx`, `content/nav.ts`

- [ ] **Step 1: Create nav content**

```ts
// content/nav.ts
export const navLinks = [
  { label: 'Healthcare', href: '/healthcare' },
  { label: 'Finance', href: '/finance' },
  { label: 'How it works', href: '/#how-different' },
  { label: 'About', href: '/about' },
]
```

- [ ] **Step 2: Create Nav**

```tsx
// components/layout/Nav.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { navLinks } from '@/content/nav'
import Button from '@/components/ui/Button'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="mx-auto max-w-content px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-handled-800 rounded flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
              <rect x="9" y="1" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
              <rect x="1" y="9" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
              <rect x="9" y="9" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span className="font-medium text-stone-950 text-sm tracking-tight">Handled</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm text-stone-600 hover:text-stone-950 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA always visible */}
        <div className="flex items-center gap-3">
          <Button variant="nav" size="sm" className="hidden sm:inline-flex">Schedule a review</Button>
          <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round"/>
              ) : (
                <path d="M3 7h14M3 13h14" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm text-stone-600" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button variant="nav" size="sm" className="w-full sm:hidden mt-2">Schedule a review</Button>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/Nav.tsx content/nav.ts && git commit -m "feat: add sticky Nav with mobile hamburger"
```

---

### Task 6: Footer component

**Files:** `components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer**

```tsx
// components/layout/Footer.tsx
import Link from 'next/link'

const productLinks = [
  { label: 'Healthcare', href: '/healthcare' },
  { label: 'Finance', href: '/finance' },
  { label: 'How it works', href: '/#how-different' },
]
const companyLinks = [
  { label: 'About', href: '/about' },
]
const legalLinks = [
  { label: 'Security', href: '/security' },
  { label: 'Data Processors', href: '/data-processors' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="mx-auto max-w-content px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-handled-800 rounded flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
                <rect x="9" y="1" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
                <rect x="1" y="9" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
                <rect x="9" y="9" width="4" height="4" rx="0.5" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-medium text-stone-950 text-sm">Handled</span>
          </div>
          <p className="text-stone-500 text-[13px] leading-relaxed max-w-xs">
            AI-powered back-office operations for healthcare and financial services.
          </p>
        </div>

        {/* Right — link groups */}
        <div className="flex gap-12">
          <div>
            <p className="text-xs font-medium text-stone-950 uppercase tracking-widest mb-3">Product</p>
            <ul className="space-y-2">
              {productLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm text-stone-500 hover:text-stone-950 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-stone-950 uppercase tracking-widest mb-3">Company</p>
            <ul className="space-y-2">
              {companyLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm text-stone-500 hover:text-stone-950 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-100">
        <div className="mx-auto max-w-content px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400">© 2026 Handled AI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {legalLinks.map(l => (
              <Link key={l.href} href={l.href} className="text-xs text-stone-400 hover:text-stone-600 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/Footer.tsx && git commit -m "feat: add Footer with legal links and product nav groups"
```

---

### Task 7: LegalLayout component

**Files:** `components/layout/LegalLayout.tsx`

- [ ] **Step 1: Create LegalLayout**

```tsx
// components/layout/LegalLayout.tsx
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

interface LegalLayoutProps {
  title: string
  lastUpdated?: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Nav />
      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-[28px] font-medium text-stone-950 mb-2">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-stone-400 mb-10">{lastUpdated}</p>
          )}
          <div className="prose-legal">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Add prose-legal styles to globals.css**

Append to `app/globals.css`:

```css
.prose-legal {
  font-size: 15px;
  line-height: 1.7;
  color: #1a2420;
}
.prose-legal h2 {
  font-size: 18px;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #1a2420;
}
.prose-legal h3 {
  font-size: 15px;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a2420;
}
.prose-legal p {
  margin-bottom: 1rem;
}
.prose-legal ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.prose-legal ul li {
  margin-bottom: 0.4rem;
}
.prose-legal table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  margin-bottom: 1.5rem;
}
.prose-legal table th {
  background: #e8efeb;
  font-weight: 500;
  text-align: left;
  padding: 8px 12px;
  border: 1px solid #cdd5d0;
}
.prose-legal table td {
  padding: 8px 12px;
  border: 1px solid #cdd5d0;
  vertical-align: top;
}
.prose-legal table tr:nth-child(even) td {
  background: #f5f7f5;
}
.prose-legal em.in-short {
  display: block;
  color: #5a6660;
  font-style: italic;
  margin-bottom: 0.75rem;
  padding-left: 0.75rem;
  border-left: 2px solid #cdd5d0;
}
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/LegalLayout.tsx app/globals.css && git commit -m "feat: add LegalLayout and prose-legal typography styles"
```

---

### Task 8: Legal content — Security and Data Processors

**Files:** `content/legal/security.ts`, `content/legal/data-processors.ts`

- [ ] **Step 1: Create security content**

```ts
// content/legal/security.ts
export const securityCards = [
  {
    icon: '🛡',
    title: 'SOC 2 Type II (In Progress)',
    body: 'Active compliance program with continuous monitoring and evidence collection. Observation period began February 2026, with report available under NDA upon completion.',
  },
  {
    icon: '🔒',
    title: 'HIPAA (In Progress)',
    body: 'Business Associate Agreements available for healthcare environments. Dedicated infrastructure for PHI. Compliance program in progress.',
  },
  {
    icon: '🔑',
    title: 'Encryption',
    body: 'AES-256 at rest. TLS in transit. All data encrypted across every layer of the stack.',
  },
  {
    icon: '☂',
    title: 'Cyber Insurance',
    body: 'E&O and Cyber Liability coverage across all verticals.',
  },
]

export const architectureCommitments = [
  'Dedicated environments per industry. Healthcare and financial services data never share infrastructure',
  'Tenant isolation with row-level security on every data table',
  'MFA enforced on all production systems',
  'Centralized audit logging with persistent evidence collection',
  'Penetration testing by independent third-party assessors',
  'Documented incident response and business continuity procedures',
  'All deployments through pull request with automated security review',
  'Vendor SOC 2 certifications verified across our infrastructure stack',
]

export const dataHandling = [
  'We are a data processor. We process data only as directed by our customers.',
  'AI models are used in inference-only mode with zero data retention.',
  'No customer data is used for model training or fine-tuning. We may use aggregated and de-identified data to improve our services.',
  'Daily backups with 14-day retention, operational logs with 12-month retention, and documented recovery procedures.',
]
```

- [ ] **Step 2: Create data-processors content**

```ts
// content/legal/data-processors.ts
export interface SubProcessor {
  name: string
  purpose: string
  dataProcessed: string
  location: string
  scope: string
}

export interface ProcessorGroup {
  heading: string
  processors: SubProcessor[]
}

export const processorGroups: ProcessorGroup[] = [
  {
    heading: 'Infrastructure & Hosting',
    processors: [
      { name: 'Vercel', purpose: 'Application hosting, serverless compute, and edge delivery', dataProcessed: 'Application data, deployment artifacts', location: 'United States', scope: 'All accounts' },
      { name: 'Supabase', purpose: 'Database and storage', dataProcessed: 'Application data, file storage', location: 'United States', scope: 'All accounts' },
      { name: 'GitHub', purpose: 'Source control, CI/CD, and deployment automation', dataProcessed: 'Source code, build configuration', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'AI & Machine Learning',
    processors: [
      { name: 'Anthropic', purpose: 'AI inference (zero-retention)', dataProcessed: 'Workflow data for AI processing', location: 'United States', scope: 'Selected by account based on model routing' },
      { name: 'OpenAI', purpose: 'AI inference (zero-retention)', dataProcessed: 'Workflow data for AI processing', location: 'United States', scope: 'Selected by account based on model routing' },
      { name: 'Google Vertex AI', purpose: 'AI inference and document processing', dataProcessed: 'Workflow data for AI processing', location: 'United States', scope: 'Selected by account based on model routing' },
      { name: 'ElevenLabs', purpose: 'AI voice agent capabilities', dataProcessed: 'Voice interaction data', location: 'United States', scope: 'Voice-enabled builds only' },
      { name: 'Retell AI', purpose: 'AI voice agent capabilities', dataProcessed: 'Voice interaction data', location: 'United States', scope: 'Voice-enabled builds only' },
    ],
  },
  {
    heading: 'Security & Compliance',
    processors: [
      { name: 'Comp AI', purpose: 'SOC 2 compliance monitoring', dataProcessed: 'System configuration and audit logs', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'Logging & Monitoring',
    processors: [
      { name: 'Axiom', purpose: 'Centralized log aggregation', dataProcessed: 'Application logs, system event metadata', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'Analytics',
    processors: [
      { name: 'PostHog', purpose: 'Product analytics', dataProcessed: 'Usage events, anonymized visitor data', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'Communications',
    processors: [
      { name: 'Twilio', purpose: 'SMS and telephony capabilities', dataProcessed: 'Phone numbers, message metadata', location: 'United States', scope: 'If applicable' },
    ],
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add content/legal/security.ts content/legal/data-processors.ts && git commit -m "feat: add security and data-processors content files"
```

---

### Task 9: Legal content — Privacy and Terms

**Files:** `content/legal/privacy.ts`, `content/legal/terms.ts`

- [ ] **Step 1: Create privacy content**

```ts
// content/legal/privacy.ts
export const privacySections = [
  {
    number: 1,
    heading: 'What Information Do We Collect?',
    inShort: 'We collect personal information that you provide to us.',
    content: `We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:

- email addresses
- phone numbers
- names

Sensitive Information. We do not directly collect sensitive personal information from visitors to our website. In our capacity as a service provider to our customers, we may process data that includes sensitive categories (such as health information or financial data) as described in Section 13 (Data Processing on Behalf of Customers).

All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.`,
    subsections: [
      {
        heading: 'Information automatically collected',
        inShort: 'Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.',
        content: `We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

Like many businesses, we also collect information through cookies and similar technologies.

The information we collect includes:

- **Log and Usage Data.** Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
- **Device Data.** We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
- **Location Data.** We collect approximate location data based on your IP address. We do not collect precise geolocation data (such as GPS coordinates).`,
      },
    ],
  },
  {
    number: 2,
    heading: 'How Do We Process Your Information?',
    inShort: 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.',
    content: `We process your personal information for a variety of reasons, depending on how you interact with our Services, including:

- **To deliver and facilitate delivery of services to the user.** We may process your information to provide you with the requested service.
- **To respond to user inquiries/offer support to users.** We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
- **To protect our Services.** We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
- **To evaluate and improve our Services, products, marketing, and your experience.** We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
- **To identify usage trends.** We may process information about how you use our Services to better understand how they are being used so we can improve them.
- **To comply with our legal obligations.** We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.`,
  },
  {
    number: 3,
    heading: 'What Legal Bases Do We Rely On to Process Your Personal Information?',
    inShort: 'We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.',
    content: `If you are located in Canada, this section applies to you. We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.

In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:

- If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
- For investigations and fraud detection and prevention
- For business transactions provided certain conditions are met
- If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
- For identifying injured, ill, or deceased persons and communicating with next of kin
- If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
- If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
- If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
- If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
- If the collection is solely for journalistic, artistic, or literary purposes
- If the information is publicly available and is specified by the regulations
- We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments`,
  },
  {
    number: 4,
    heading: 'When and With Whom Do We Share Your Personal Information?',
    inShort: 'We may share information in specific situations described in this section and/or with the following categories of third parties.',
    content: `Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.

The categories of third parties we may share personal information with are as follows:

- Data Analytics Services
- Website Hosting Service Providers

We also may need to share your personal information in the following situations:

**Business Transfers.** We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.`,
  },
  {
    number: 5,
    heading: 'Do We Use Cookies and Other Tracking Technologies?',
    inShort: 'We may use cookies and other tracking technologies to collect and store your information.',
    content: `We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. We use these technologies for site analytics and to maintain the security and functionality of our Services. We do not use cookies for targeted advertising, and we do not serve third-party advertisements on our Services.`,
  },
  {
    number: 6,
    heading: 'Do We Offer Artificial Intelligence-Based Products?',
    inShort: 'We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.',
    content: `As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.

**Use of AI Technologies**

We provide the AI Products through third-party service providers ("AI Service Providers"), including Google Cloud AI, Anthropic, OpenAI, ElevenLabs, and Retell AI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "When and With Whom Do We Share Your Personal Information?" You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.

**Our AI Products**

Our AI Products are designed for the following functions:

- AI-powered work queue prioritization and signal detection
- AI-assisted document generation and workflow automation
- AI voice agent capabilities for customer and provider communications
- AI-driven analytics and insights
- Custom AI solutions developed for specific customer requirements

**How We Process Your Data Using AI**

All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.

Our AI Service Providers process data using zero-retention, inference-only configurations. No customer data is used for AI model training or fine-tuning unless explicitly authorized in writing by the applicable customer. We may use aggregated and de-identified data derived from use of the Services to improve the Services generally; such data does not identify any individual or customer.`,
  },
  {
    number: 7,
    heading: 'How Long Do We Keep Your Information?',
    inShort: 'We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.',
    content: `We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). We will not retain your personal information for longer than is necessary to fulfill the purposes described in this policy, or as required by applicable law or customer agreements.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.`,
  },
  {
    number: 8,
    heading: 'How Do We Keep Your Information Safe?',
    inShort: 'We aim to protect your personal information through a system of organizational and technical security measures.',
    content: `We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.`,
  },
  {
    number: 9,
    heading: 'Do We Collect Information from Minors?',
    inShort: 'We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.',
    content: `We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at privacy@withhandled.com.`,
  },
  {
    number: 10,
    heading: 'What Are Your Privacy Rights?',
    inShort: 'Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.',
    content: `In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below.

We will consider and act upon any request in accordance with applicable data protection laws.

**Withdrawing your consent:** If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below.

However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

**Opting out of marketing and promotional communications:** You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section "How Can You Contact Us About This Notice?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.

**Cookies and similar technologies:** Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.

If you have questions or comments about your privacy rights, you may email us at privacy@withhandled.com.`,
  },
  {
    number: 11,
    heading: 'Controls for Do-Not-Track Features',
    content: `Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.

California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.`,
  },
  {
    number: 12,
    heading: 'Do United States Residents Have Specific Privacy Rights?',
    inShort: 'If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.',
    content: `**Categories of Personal Information We Collect**

The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "What Information Do We Collect?"`,
    table: {
      headers: ['Category', 'Examples', 'Collected'],
      rows: [
        ['A. Identifiers', 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name', 'YES'],
        ['B. Personal information as defined in the California Customer Records statute', 'Name, contact information, education, employment, employment history, and financial information', 'YES'],
        ['C. Protected classification characteristics under state or federal law', 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', 'NO'],
        ['D. Commercial information', 'Transaction information, purchase history, financial details, and payment information', 'NO'],
        ['E. Biometric information', 'Fingerprints and voiceprints', 'NO'],
        ['F. Internet or other similar network activity', 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements', 'YES'],
        ['G. Geolocation data', 'Approximate location derived from IP address', 'YES'],
        ['H. Audio, electronic, sensory, or similar information', 'Images and audio, video or call recordings created in connection with our business activities', 'NO'],
        ['I. Professional or employment-related information', 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us', 'NO'],
        ['J. Education Information', 'Student records and directory information', 'NO'],
        ['K. Inferences drawn from collected personal information', 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual\'s preferences and characteristics', 'NO'],
        ['L. Sensitive personal Information', '', 'NO'],
      ],
    },
    contentAfterTable: `We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:

- Receiving help through our customer support channels;
- Participation in customer surveys or contests; and
- Facilitation in the delivery of our Services and to respond to your inquiries.

We will use and retain the collected personal information as needed to provide the Services or for:

- Category A – As long as necessary to fulfill the purpose of collection or as required by law
- Category B – As long as necessary to fulfill the purpose of collection or as required by law
- Category F – 1 year
- Category G – 1 year

**Sources of Personal Information**

Learn more about the sources of personal information we collect in "What Information Do We Collect?"

**How We Use and Share Personal Information**

Learn more about how we use your personal information in the section, "How Do We Process Your Information?"

**Will your information be shared with anyone else?** We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, "When and With Whom Do We Share Your Personal Information?"

We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.

We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months.

We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:

- Category F. Internet or other similar network activity
- Category G. Geolocation data

The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "When and With Whom Do We Share Your Personal Information?"

**Your Rights**

You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:

- Right to know whether or not we are processing your personal data
- Right to access your personal data
- Right to correct inaccuracies in your personal data
- Right to request the deletion of your personal data
- Right to obtain a copy of the personal data you previously shared with us
- Right to non-discrimination for exercising your rights
- Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")

Depending upon the state where you live, you may also have the following rights:

- Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)
- Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)
- Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)
- Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)
- Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)
- Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)
- Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)

**How to Exercise Your Rights**

To exercise these rights, you can contact us by emailing us at privacy@withhandled.com, or by referring to the contact details at the bottom of this document.

Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.

**Request Verification**

Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.

If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.

**Appeals**

Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at privacy@withhandled.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.

**California "Shine The Light" Law**

California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "How Can You Contact Us About This Notice?"`,
  },
  {
    number: 13,
    heading: 'Data Processing on Behalf of Customers',
    content: `In addition to the limited data we collect through our website as described above, Handled AI operates as a service provider and data processor on behalf of our business customers. In this capacity, we process data — which may include personal information, financial data, and protected health information — solely as directed by our customers and in accordance with our agreements with them (including Data Processing Agreements and HIPAA Business Associate Agreements). If you are an end user of one of our customer's applications, your use of that application is governed by that customer's privacy policy, not this one. To exercise any data rights related to data processed on behalf of a customer, please contact that customer directly.`,
  },
  {
    number: 14,
    heading: 'Do We Make Updates to This Notice?',
    inShort: 'Yes, we will update this notice as necessary to stay compliant with relevant laws.',
    content: `We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.`,
  },
  {
    number: 15,
    heading: 'How Can You Contact Us About This Notice?',
    content: `If you have questions or comments about this notice, you may email us at privacy@withhandled.com or contact us by post at:

Handled AI, Inc.
3500 South DuPont Highway
Dover, DE 19901
United States`,
  },
  {
    number: 16,
    heading: 'How Can You Review, Update, or Delete the Data We Collect from You?',
    content: `Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please email us at privacy@withhandled.com.`,
  },
]

export const privacyIntro = `This Privacy Notice for Handled AI, Inc. ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:

- Visit our website at withhandled.com or any website of ours that links to this Privacy Notice
- Use Handled AI. Handled AI is a B2B software platform that provides AI-powered work queues and managed services for back office teams in financial services and healthcare organizations. We operate as a service provider on behalf of our customers, processing data under customer agreements (DPAs and BAAs). Our marketing website at withhandled.com collects minimal visitor data through analytics.
- Engage with us in other related ways, including any marketing or events

Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at privacy@withhandled.com.`

export const privacySummary = `This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.

**What personal information do we process?** When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.

**Do we process any sensitive personal information?** Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not directly collect sensitive personal information from visitors to our website. In our capacity as a service provider, we may process sensitive data categories (such as health or financial data) on behalf of our customers, as described in Section 13.

**Do we collect any information from third parties?** We do not collect any information from third parties.

**How do we process your information?** We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.

**In what situations and with which types of parties do we share personal information?** We may share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share your personal information.

**How do we keep your information safe?** We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.

**What are your rights?** Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.

**How do you exercise your rights?** The easiest way to exercise your rights is by emailing us at privacy@withhandled.com, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.

Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.`
```

- [ ] **Step 2: Create terms content**

```ts
// content/legal/terms.ts
export const termsContent = {
  intro: `If you signed a separate Cover Page to access the Product with the same account, and that agreement has not ended, the terms below do not apply to you. Instead, your separate Cover Page applies to your use of the Product.

This Agreement is between Handled AI, Inc. and the company or person accessing or using the Product. This Agreement consists of: (1) the Order Form below and (2) the Framework Terms defined below.

If you are accessing or using the Product on behalf of your company, you represent that you are authorized to accept this Agreement on behalf of your company. By signing up, accessing, or using the Product, Customer indicates its acceptance of this Agreement and agrees to be bound by the terms and conditions of this Agreement.`,

  coverPage: {
    heading: 'Cover Page',
    orderForm: {
      heading: 'Order Form',
      body: `Framework Terms: This Order Form incorporates and is governed by the Framework Terms that are made up of the Key Terms below and the Common Paper Cloud Service Agreement Standard Terms Version 2.1, which are incorporated by reference. Any modifications to the Standard Terms made in the Cover Page will control over conflicts with the Standard Terms. Capitalized words have the meanings given in the Cover Page or the Standard Terms.

Cloud Service: Handled AI's cloud-based platform for financial services and healthcare organizations. The Cloud Service provides AI-powered work queues and managed services that connect to customers' existing systems of record, surface prioritized work, and enable teams to detect signals, prioritize workflows, and execute actions. The Cloud Service includes integrations with customer systems (e.g., Salesforce, Slack, EHR/practice management systems), AI-driven document generation, and voice agent capabilities. The Cloud Service is delivered as a hosted web application accessible at a custom domain or Provider subdomain. The specific scope, configuration, service model (managed service or customer-operated), and integrations for each Customer are described in the applicable Order Form.

Order Date: The Effective Date

Subscription Period: As specified in the applicable Order Form.

Fees and Payment: Fees are as set forth in the applicable Order Form. Provider will invoice Customer as specified in the Order Form. Payment is due within thirty (30) days of invoice date unless otherwise specified in the Order Form. Provider will not automatically charge funds from a payment method on file.

Non-Renewal Notice Period: At least 30 days before the end of the current Subscription Period.

Use Limitations: As specified in the applicable Order Form.`,
    },
  },

  keyTerms: [
    { term: 'Customer', definition: 'The company or person who accesses or uses the Product. If the person accepting this Agreement is doing so on behalf of a company, all use of the word "Customer" in the Agreement will mean that company.' },
    { term: 'Provider', definition: 'Handled AI, Inc.' },
    { term: 'Effective Date', definition: 'The date Customer first accepts this Agreement.' },
    { term: 'Governing Law', definition: 'The laws of the State of Delaware.' },
    { term: 'Chosen Courts', definition: 'The state or federal courts located in Delaware.' },
    {
      term: 'Covered Claims',
      definition: `Provider Covered Claims: Any action, proceeding, or claim that the Cloud Service, when used by Customer according to the terms of the Agreement, violates, misappropriates, or otherwise infringes upon anyone else's intellectual property or other proprietary rights.
Customer Covered Claims: Any action, proceeding, or claim that (1) the Customer Content, when used according to the terms of the Agreement, violates, misappropriates, or otherwise infringes upon anyone else's intellectual property or other proprietary rights; or (2) results from Customer's breach or alleged breach of Section 2.1 (Restrictions on Customer).`,
    },
    { term: 'General Cap Amount', definition: 'As specified in the applicable Order Form.' },
    {
      term: 'Notice Address',
      definition: `For Provider: legal@withhandled.com\nFor Customer: The main email address on Customer's account.`,
    },
  ],

  attachments: [
    {
      heading: 'Data Processing Agreement',
      body: "Provider's Data Processing Agreement, available at the URL provided in the applicable Order Form or upon request, is incorporated by reference.",
    },
    {
      heading: 'Prohibited Data Modification',
      body: 'Notwithstanding Section 2.5 of the Standard Terms, Customer may submit financial data (including financial account numbers) and health-related data to the Cloud Service to the extent necessary for the Cloud Service to function as described in the applicable Order Form and subject to the Data Processing Agreement and, where applicable, a Business Associate Agreement.',
    },
    {
      heading: 'Customer Content Deletion',
      body: 'Upon termination or expiration of this Agreement, Provider will delete all Customer Content within thirty (30) days, except for copies retained in automated backup systems, which will be deleted in accordance with Provider\'s standard backup retention schedule.',
    },
    {
      heading: 'AI and Machine Learning',
      body: `Provider may use aggregated and de-identified data derived from Customer's use of the Cloud Service to improve the Cloud Service generally. Provider will not use Customer Content (in identifiable form) to train or fine-tune machine learning models unless explicitly authorized in writing by Customer.

The applicable Order Form may specify additional restrictions on AI and machine learning data usage.`,
    },
    {
      heading: 'Security Policy',
      body: 'Provider maintains a security program designed to protect Customer Content that includes the following measures:',
      bullets: [
        'Encryption at rest using AES-256 and in transit using TLS 1.2 or higher.',
        'Multi-factor authentication (MFA) required for all personnel accessing production systems.',
        'Annual third-party penetration testing, with remediation reports available to Customer upon request under NDA.',
        'SOC 2 Type II audit. Provider will make its most recent SOC 2 Type II report available to Customer upon request under NDA. Provider is currently in the process of obtaining its initial SOC 2 Type II certification, and will provide its audit report upon completion.',
        'HIPAA compliance program for healthcare customers operating under an executed Business Associate Agreement.',
        'Provider will promptly notify Customer of any Security Incident as defined in the Standard Terms.',
      ],
    },
  ],
}
```

- [ ] **Step 3: Commit**

```bash
git add content/legal/privacy.ts content/legal/terms.ts && git commit -m "feat: add verbatim privacy policy and terms of service content files"
```

---

### Task 10: Legal pages — /security and /data-processors

**Files:** `app/security/page.tsx`, `app/data-processors/page.tsx`

- [ ] **Step 1: Create /security page**

```tsx
// app/security/page.tsx
import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import { securityCards, architectureCommitments, dataHandling } from '@/content/legal/security'

export const metadata: Metadata = { title: 'Handled | Security' }

export default function SecurityPage() {
  return (
    <LegalLayout title="Enterprise security for sensitive operations.">
      <p className="text-stone-600 leading-relaxed mb-10">
        Handled is built to handle sensitive data across healthcare and financial services. Our security posture is designed around SOC 2 Type II and HIPAA requirements, both currently in progress, alongside the data protection standards of regulated industries.
      </p>

      {/* 2x2 compliance cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {securityCards.map(card => (
          <div key={card.title} className="bg-white border border-stone-200 rounded-xl p-5">
            <div className="text-2xl mb-3">{card.icon}</div>
            <h3 className="font-medium text-stone-950 text-[15px] mb-2">{card.title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      <h2>Architecture commitments</h2>
      <ul>
        {architectureCommitments.map(item => <li key={item}>{item}</li>)}
      </ul>

      <h2>Data handling</h2>
      <ul>
        {dataHandling.map(item => <li key={item}>{item}</li>)}
      </ul>

      <p className="mt-8 text-sm text-stone-600">
        For security questionnaires, BAA requests, or to report a security concern, contact{' '}
        <a href="mailto:security@withhandled.com" className="text-handled-400 hover:underline">security@withhandled.com</a>
      </p>
    </LegalLayout>
  )
}
```

- [ ] **Step 2: Create /data-processors page**

```tsx
// app/data-processors/page.tsx
import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import { processorGroups } from '@/content/legal/data-processors'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Handled | Data Sub-Processors' }

export default function DataProcessorsPage() {
  return (
    <LegalLayout title="Data Sub-Processors" lastUpdated="Last updated March 20, 2026">
      <p>
        Handled AI, Inc. ("Handled") uses the following sub-processors to deliver our services. Each sub-processor has been evaluated for security, compliance, and data handling practices consistent with our commitments under our Data Processing Agreements (DPAs) and HIPAA Business Associate Agreements (BAAs).
      </p>
      <p>
        Not all sub-processors apply to every account. The Scope column indicates which sub-processors are active for a given deployment. Your Data Processing Agreement or BAA specifies the sub-processors applicable to your account.
      </p>
      <p>
        For questions about our sub-processors or data handling practices, contact us at{' '}
        <a href="mailto:privacy@withhandled.com" className="text-handled-400 hover:underline">privacy@withhandled.com</a>.
      </p>

      {processorGroups.map(group => (
        <div key={group.heading}>
          <h2>{group.heading}</h2>
          <table>
            <thead>
              <tr>
                <th>Sub-Processor</th>
                <th>Purpose</th>
                <th>Data Processed</th>
                <th>Location</th>
                <th>Scope</th>
              </tr>
            </thead>
            <tbody>
              {group.processors.map(p => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.purpose}</td>
                  <td>{p.dataProcessed}</td>
                  <td>{p.location}</td>
                  <td>{p.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2>Notifications</h2>
      <p>
        We will notify customers of changes to this list at least 30 days before a new sub-processor begins processing customer data. Notifications are sent to the email address on file for each customer's DPA contact.
      </p>

      <p>
        See also our{' '}
        <Link href="/privacy" className="text-handled-400 hover:underline">Privacy Policy</Link>{' '}
        and{' '}
        <Link href="/security" className="text-handled-400 hover:underline">Security page</Link>{' '}
        for more information about how we protect your data.
      </p>
    </LegalLayout>
  )
}
```

- [ ] **Step 3: Run dev and verify both pages render**

```bash
npm run dev
```

Visit http://localhost:3000/security and http://localhost:3000/data-processors. Verify tables render, cards appear in 2×2 grid, mailto links are correct.

- [ ] **Step 4: Commit**

```bash
git add app/security/page.tsx app/data-processors/page.tsx && git commit -m "feat: add /security and /data-processors legal pages"
```

---

### Task 11: Legal pages — /privacy and /terms

**Files:** `app/privacy/page.tsx`, `app/terms/page.tsx`

- [ ] **Step 1: Create a Markdown-to-HTML helper**

```tsx
// components/ui/SimpleMarkdown.tsx
// Renders a small subset of markdown: **bold**, bullet lists, line breaks
export default function SimpleMarkdown({ text }: { text: string }) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []

  const flushList = () => {
    if (listItems.length) {
      elements.push(
        <ul key={elements.length}>
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
          ))}
        </ul>
      )
      listItems = []
    }
  }

  const renderInline = (str: string) =>
    str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

  lines.forEach((line, i) => {
    if (line.startsWith('- ')) {
      listItems.push(line.slice(2))
    } else {
      flushList()
      if (line.trim() === '') {
        // skip blank lines between blocks
      } else {
        elements.push(
          <p key={i} dangerouslySetInnerHTML={{ __html: renderInline(line) }} />
        )
      }
    }
  })
  flushList()

  return <>{elements}</>
}
```

- [ ] **Step 2: Create /privacy page**

```tsx
// app/privacy/page.tsx
import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import SimpleMarkdown from '@/components/ui/SimpleMarkdown'
import { privacyIntro, privacySummary, privacySections } from '@/content/legal/privacy'

export const metadata: Metadata = { title: 'Handled | Privacy Policy' }

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="Last updated March 19, 2026">
      <SimpleMarkdown text={privacyIntro} />

      <h2>Summary of Key Points</h2>
      <SimpleMarkdown text={privacySummary} />

      <h2>Table of Contents</h2>
      <ol className="list-decimal pl-5 space-y-1 mb-8">
        {privacySections.map(s => (
          <li key={s.number}>
            <a href={`#section-${s.number}`} className="text-handled-400 hover:underline text-sm">
              {s.heading}
            </a>
          </li>
        ))}
      </ol>

      {privacySections.map(section => (
        <div key={section.number} id={`section-${section.number}`}>
          <h2>{section.number}. {section.heading}</h2>

          {section.inShort && (
            <em className="in-short">In Short: {section.inShort}</em>
          )}

          <SimpleMarkdown text={section.content} />

          {section.table && (
            <>
              <table>
                <thead>
                  <tr>{section.table.headers.map(h => <th key={h}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
              {section.contentAfterTable && <SimpleMarkdown text={section.contentAfterTable} />}
            </>
          )}

          {section.subsections?.map(sub => (
            <div key={sub.heading}>
              <h3>{sub.heading}</h3>
              {sub.inShort && <em className="in-short">In Short: {sub.inShort}</em>}
              <SimpleMarkdown text={sub.content} />
            </div>
          ))}

          {/* Special handling for Section 15 mailing address */}
          {section.number === 15 && (
            <address className="not-italic text-sm text-stone-600 mt-4 leading-relaxed">
              Handled AI, Inc.<br />
              3500 South DuPont Highway<br />
              Dover, DE 19901<br />
              United States
            </address>
          )}
        </div>
      ))}
    </LegalLayout>
  )
}
```

- [ ] **Step 3: Create /terms page**

```tsx
// app/terms/page.tsx
import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import { termsContent } from '@/content/legal/terms'

export const metadata: Metadata = { title: 'Handled | Terms of Service' }

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="Last Updated: March 19, 2026">
      {termsContent.intro.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>{termsContent.coverPage.heading}</h2>
      <h3>{termsContent.coverPage.orderForm.heading}</h3>
      {termsContent.coverPage.orderForm.body.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>Key Terms</h2>
      <dl className="space-y-4">
        {termsContent.keyTerms.map(item => (
          <div key={item.term}>
            <dt className="font-medium text-stone-950">{item.term}</dt>
            <dd className="text-stone-600 mt-1 pl-4">
              {item.definition.split('\n').map((line, i) => (
                <span key={i}>{line}{i < item.definition.split('\n').length - 1 && <br />}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <h2>Attachments and Supplements</h2>
      {termsContent.attachments.map(attachment => (
        <div key={attachment.heading}>
          <h3>{attachment.heading}</h3>
          {attachment.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          {attachment.bullets && (
            <ul>
              {attachment.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}

      <p className="mt-8 text-sm text-stone-600">
        Questions? Contact us at{' '}
        <a href="mailto:legal@withhandled.com" className="text-handled-400 hover:underline">
          legal@withhandled.com
        </a>
      </p>
    </LegalLayout>
  )
}
```

- [ ] **Step 4: Verify all legal pages**

Visit http://localhost:3000/privacy and http://localhost:3000/terms. Check: 16 sections render, Table of Contents anchor links work, Section 12 table appears, mailing address block shows, mailto links functional.

- [ ] **Step 5: Commit**

```bash
git add app/privacy/page.tsx app/terms/page.tsx components/ui/SimpleMarkdown.tsx && git commit -m "feat: add /privacy and /terms legal pages with full verbatim content"
```

---

### Task 12: WorkflowCard component

**Files:** `components/ui/WorkflowCard.tsx`

- [ ] **Step 1: Create WorkflowCard**

```tsx
// components/ui/WorkflowCard.tsx
'use client'
import { useEffect, useState } from 'react'

const queueItems = [
  { label: 'CAQH profile verified' },
  { label: 'Availity enrollment submitted' },
  { label: 'Payer portal follow-up' },
  { label: 'License renewal' },
]

export default function WorkflowCard() {
  const [checkedCount, setCheckedCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckedCount(prev => (prev >= queueItems.length ? 0 : prev + 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-handled-900/80 border border-handled-700/50 rounded-2xl p-5 shadow-xl w-full max-w-sm mx-auto">
      {/* Header */}
      <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-4">
        Credentialing queue — live
      </p>

      {/* Queue items */}
      <div className="space-y-3 mb-5">
        {queueItems.map((item, i) => {
          const isChecked = i < checkedCount
          const isInProgress = i === checkedCount && i < queueItems.length

          return (
            <div key={item.label} className="flex items-center gap-3">
              {/* Status dot */}
              <div className="relative flex-shrink-0">
                {isChecked ? (
                  <div className="w-5 h-5 rounded-full bg-handled-300 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#0e2318" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : isInProgress ? (
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse mt-1.5 ml-1.5" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-handled-700 mt-1.5 ml-1.5" />
                )}
              </div>

              {/* Label */}
              <span className={`text-sm ${isChecked ? 'text-white/50 line-through' : isInProgress ? 'text-white/90' : 'text-white/40'}`}>
                {item.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-handled-700/50 mb-4" />

      {/* Stats row */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-2xl font-medium text-white">14</p>
          <p className="text-[11px] text-white/40">providers active this week</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-medium text-handled-300">3 days</p>
          <p className="text-[11px] text-white/40">avg. cycle time</p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Visual check**

Add `<WorkflowCard />` temporarily to `app/page.tsx`, run dev server, confirm items cycle through with animation, amber dot pulses on current item, stats row renders. Remove temp import after verifying.

- [ ] **Step 3: Commit**

```bash
git add components/ui/WorkflowCard.tsx && git commit -m "feat: add animated WorkflowCard with 1s item cycle loop"
```

---

### Task 13: Marketing content files

**Files:** `content/integrations.ts`, `content/industries.ts`

- [ ] **Step 1: Create integrations content**

```ts
// content/integrations.ts
export const integrations = [
  'CAQH',
  'CMS PECOS',
  'Availity',
  'Salesforce',
  'Epic / PM/EHR',
  'Core banking',
]
```

- [ ] **Step 2: Create industries content**

```ts
// content/industries.ts
export const industries = [
  {
    tag: 'Healthcare',
    tagVariant: 'healthcare' as const,
    heading: 'Credentialing, enrollment, and referral management',
    pain: 'Enrollment backlogs, credentialing delays, and referrals that fall through the cracks.',
    workflows: ['Credentialing', 'Payer enrollment', 'Licensing', 'Referral management', 'Patient engagement'],
    href: '/healthcare',
  },
  {
    tag: 'Financial services',
    tagVariant: 'finance' as const,
    heading: 'Retention, churn detection, and proactive outreach',
    pain: 'Act on retention signals before the relationship is gone.',
    workflows: ['Churn detection', 'Deposit monitoring', 'Proactive outreach', 'CRM integration'],
    href: '/finance',
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add content/integrations.ts content/industries.ts && git commit -m "feat: add integrations and industries content files"
```

---

### Task 14: FeatureCard and IndustryCard components

**Files:** `components/ui/FeatureCard.tsx`, `components/ui/IndustryCard.tsx`

- [ ] **Step 1: Create FeatureCard**

```tsx
// components/ui/FeatureCard.tsx
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  body: string
}

export default function FeatureCard({ icon, title, body }: FeatureCardProps) {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
      <div className="w-9 h-9 bg-handled-800 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-medium text-stone-950 text-[15px] mb-2">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
    </div>
  )
}
```

- [ ] **Step 2: Create IndustryCard**

```tsx
// components/ui/IndustryCard.tsx
import Link from 'next/link'
import Badge from '@/components/ui/Badge'

interface IndustryCardProps {
  tag: string
  tagVariant: 'healthcare' | 'finance'
  heading: string
  pain: string
  workflows: string[]
  href: string
}

export default function IndustryCard({ tag, tagVariant, heading, pain, workflows, href }: IndustryCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col">
      <Badge variant={tagVariant} className="self-start mb-4">{tag}</Badge>
      <h3 className="font-medium text-stone-950 text-[17px] mb-2 leading-snug">{heading}</h3>
      <p className="text-sm text-stone-500 mb-4 leading-relaxed">{pain}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {workflows.map(w => (
          <Badge key={w} variant="workflow">{w}</Badge>
        ))}
      </div>
      <div className="mt-auto">
        <Link href={href} className="text-sm text-handled-400 hover:text-handled-300 transition-colors font-medium">
          Learn more →
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/ui/FeatureCard.tsx components/ui/IndustryCard.tsx && git commit -m "feat: add FeatureCard and IndustryCard UI components"
```

---

### Task 15: Home page sections — Hero

**Files:** `components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero**

```tsx
// components/sections/Hero.tsx
'use client'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import WorkflowCard from '@/components/ui/WorkflowCard'

const trustPills = ['Built by Rippling alumni', 'Wiser team', 'HIPAA-ready']

export default function Hero() {
  return (
    <section className="bg-handled-950 pt-16 pb-20 px-6">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-5">
              AI operations for regulated industries
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Your team shouldn't be doing the work AI can do.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed mb-8 max-w-lg">
              Handled runs your back-office operations — credentialing, enrollment, retention, onboarding — using AI agents that work inside your existing systems. No migration. No new headcount.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button variant="primary" size="md" className="px-5 py-2.5">
                Schedule a 20-min review
              </Button>
              <Button variant="ghost" size="md" className="px-5 py-2.5" onClick={() => document.getElementById('how-different')?.scrollIntoView({ behavior: 'smooth' })}>
                See how it works
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {trustPills.map(pill => (
                <Badge key={pill} variant="trust">{pill}</Badge>
              ))}
            </div>
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

- [ ] **Step 2: Commit**

```bash
git add components/sections/Hero.tsx && git commit -m "feat: add Hero section with two-column layout and trust pills"
```

---

### Task 16: SocialStrip, HowDifferent, Industries, Proof, CTA sections

**Files:** 5 section components

- [ ] **Step 1: Create SocialStrip**

```tsx
// components/sections/SocialStrip.tsx
import { integrations } from '@/content/integrations'

export default function SocialStrip() {
  return (
    <section className="bg-white border-b border-stone-100 py-3 px-8">
      <div className="mx-auto max-w-content flex items-center gap-4 overflow-x-auto">
        <span className="text-[10px] text-stone-400 whitespace-nowrap flex-shrink-0">Integrates with</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {integrations.map(name => (
            <span key={name} className="bg-stone-50 border border-stone-200 text-stone-600 text-xs px-3 py-1 rounded-md whitespace-nowrap">
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

- [ ] **Step 2: Create HowDifferent**

```tsx
// components/sections/HowDifferent.tsx
import FeatureCard from '@/components/ui/FeatureCard'

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
    <section id="how-different" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">How we're different</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-stone-950 leading-tight mb-5">
            The tools changed.<br />The manual work didn't.
          </h2>
          <p className="text-[16px] text-stone-600 leading-relaxed">
            More software, same repetitive work: checking portals, chasing follow-ups, re-entering data across systems. Handled encodes that work into AI agents that run inside your existing systems — operated by your team or managed end-to-end by ours.
          </p>
        </div>

        {/* Right — 2-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            icon={<QueueIcon />}
            title="AI harness for your team"
            body="A custom work queue deployed into your existing tools. Our AI agents surface what needs attention, draft next steps, and handle portal interactions."
          />
          <FeatureCard
            icon={<ClockIcon />}
            title="Fully managed"
            body="Our operators run the operation end-to-end. Same AI agents, same integrations — you get completed work and clear visibility without adding headcount."
          />
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create Industries**

```tsx
// components/sections/Industries.tsx
import IndustryCard from '@/components/ui/IndustryCard'
import { industries } from '@/content/industries'

export default function Industries() {
  return (
    <section className="bg-stone-50 py-20 px-6">
      <div className="mx-auto max-w-content">
        <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">
          Purpose-built for regulated industries
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium text-stone-950 mb-10 leading-tight">
          Deep in the workflows that matter most.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map(industry => (
            <IndustryCard key={industry.tag} {...industry} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create Proof**

```tsx
// components/sections/Proof.tsx
import Link from 'next/link'

export default function Proof() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-content flex justify-center">
        <div className="max-w-[560px] text-center">
          <blockquote className="text-[16px] text-stone-700 leading-relaxed mb-4">
            "Built by early team members from Rippling and the team behind Wiser — a revenue intelligence platform used by teams at Superhuman and Lithic."
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

- [ ] **Step 5: Create CTA (mocked form)**

```tsx
// components/sections/CTA.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormValues { email: string; company?: string }

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    // Mocked: just show success state
    console.log('CTA form data:', data)
    setSubmitted(true)
  }

  return (
    <section className="bg-handled-950 py-20 px-6">
      <div className="mx-auto max-w-content flex justify-center">
        <div className="w-full max-w-[480px] text-center">
          <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-4">Work with us</p>
          <h2 className="text-[28px] font-medium text-white mb-3 leading-tight">
            Tell us which operation is slowing you down.
          </h2>
          <p className="text-sm text-white/40 mb-8">
            We'll map out how Handled works inside your existing setup. No commitment, no pitch deck.
          </p>

          {submitted ? (
            <p className="text-handled-300 text-[15px]">We'll reach out within one business day.</p>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 w-full max-w-[400px] mx-auto">
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                  type="email"
                  placeholder="Work email"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-handled-300"
                />
                <button
                  type="submit"
                  className="bg-handled-300 text-handled-950 rounded-md px-4 py-2 text-sm font-medium hover:bg-handled-200 transition-colors whitespace-nowrap"
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
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add components/sections/ && git commit -m "feat: add all home page sections (SocialStrip, HowDifferent, Industries, Proof, CTA)"
```

---

### Task 17: Home page and app layout wiring

**Files:** `app/page.tsx`

- [ ] **Step 1: Assemble home page**

```tsx
// app/page.tsx
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import SocialStrip from '@/components/sections/SocialStrip'
import HowDifferent from '@/components/sections/HowDifferent'
import Industries from '@/components/sections/Industries'
import Proof from '@/components/sections/Proof'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialStrip />
        <HowDifferent />
        <Industries />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Visual review checklist**

Run `npm run dev` and open http://localhost:3000. Check:
- Hero: dark green bg, two columns at lg, WorkflowCard animates, trust pills visible
- SocialStrip: integration chips in single scrollable row
- HowDifferent: heading + two feature cards
- Industries: two cards side-by-side at md+
- Proof: centered pull-quote
- CTA: dark green bg, form submits and shows success message
- Nav: sticky, CTA button visible, hamburger on mobile
- Footer: legal links in bottom bar

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: assemble home page from all sections"
```

---

### Task 18: Framer Motion animations

**Files:** `components/ui/FadeIn.tsx`, update all section components

- [ ] **Step 1: Create reusable FadeIn wrapper**

```tsx
// components/ui/FadeIn.tsx
'use client'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'none'
}

export default function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 16 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Apply animations to Hero (left column only)**

In `components/sections/Hero.tsx`, wrap the heading, subhead, and CTA buttons in `<FadeIn>` with staggered delays:

```tsx
// Inside Hero, replace the left column content with:
import FadeIn from '@/components/ui/FadeIn'

// eyebrow
<FadeIn delay={0}>
  <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-5">
    AI operations for regulated industries
  </p>
</FadeIn>

// h1
<FadeIn delay={0.1}>
  <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
    Your team shouldn't be doing the work AI can do.
  </h1>
</FadeIn>

// subhead
<FadeIn delay={0.15}>
  <p className="text-[17px] text-white/60 leading-relaxed mb-8 max-w-lg">
    Handled runs your back-office operations ...
  </p>
</FadeIn>

// CTAs + trust pills (same FadeIn, delay 0.2)
<FadeIn delay={0.2}>
  <div className="flex flex-col sm:flex-row gap-3 mb-8"> ... </div>
  <div className="flex flex-wrap gap-2"> ... </div>
</FadeIn>
```

- [ ] **Step 3: Apply staggered fade-up to FeatureCards in HowDifferent**

In `components/sections/HowDifferent.tsx`:

```tsx
import FadeIn from '@/components/ui/FadeIn'

// Wrap the section heading block
<FadeIn><div>...</div></FadeIn>

// Wrap each card with staggered delay
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <FadeIn delay={0}><FeatureCard .../></FadeIn>
  <FadeIn delay={0.1}><FeatureCard .../></FadeIn>
</div>
```

- [ ] **Step 4: Apply staggered fade-up to IndustryCards**

In `components/sections/Industries.tsx`:

```tsx
import FadeIn from '@/components/ui/FadeIn'

<FadeIn><div className="mb-10">...</div></FadeIn>
<div className="grid ...">
  {industries.map((industry, i) => (
    <FadeIn key={industry.tag} delay={i * 0.1}>
      <IndustryCard {...industry} />
    </FadeIn>
  ))}
</div>
```

- [ ] **Step 5: Apply fadeIn (no movement) to CTA section**

In `components/sections/CTA.tsx`:

```tsx
import FadeIn from '@/components/ui/FadeIn'

// Wrap the inner content block
<FadeIn direction="none"><div className="w-full max-w-[480px] ...">...</div></FadeIn>
```

- [ ] **Step 6: Verify no animation delays content visibility > 0.3s**

Run dev server, scroll through page. All sections should animate in smoothly. No section should appear blank for more than 0.3s on scroll enter.

- [ ] **Step 7: Commit**

```bash
git add components/ui/FadeIn.tsx components/sections/Hero.tsx components/sections/HowDifferent.tsx components/sections/Industries.tsx components/sections/CTA.tsx && git commit -m "feat: add Framer Motion scroll animations to home page sections"
```

---

### Task 19: Healthcare sub-page

**Files:** `app/healthcare/page.tsx`

- [ ] **Step 1: Create healthcare page**

```tsx
// app/healthcare/page.tsx
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Handled | Healthcare Operations',
  description: 'AI-powered credentialing, payer enrollment, referral management, and patient engagement for healthcare organizations.',
}

const workflows = [
  { name: 'Credentialing', desc: 'Automate CAQH profile maintenance, primary source verifications, and payer credentialing submissions. Reduce cycle times from weeks to days.' },
  { name: 'Payer enrollment', desc: 'Track enrollment applications across CMS PECOS, Availity, and payer portals. Surface follow-ups before they become delays.' },
  { name: 'Referral management', desc: 'Catch referrals before they fall through the cracks. AI agents monitor referral status, trigger outreach, and log actions back into your EHR.' },
  { name: 'Patient engagement', desc: 'Proactive outreach for appointments, care gaps, and re-engagement — triggered by signals in your PM system, not a manual list.' },
]

const integrations = ['CAQH', 'CMS PECOS', 'Availity', 'Epic / PM/EHR']

const deploymentOptions = [
  { title: 'AI Harness', desc: 'Deployed into your existing tools. Your team gets a prioritized work queue, AI-drafted next steps, and portal automation — without leaving their current workflow.' },
  { title: 'Fully Managed', desc: 'Our team runs the operation end-to-end. Same AI agents, same integrations — you get completed work and a clear audit trail.' },
]

export default function HealthcarePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-handled-950 py-20 px-6">
          <div className="mx-auto max-w-content">
            <Badge variant="healthcare" className="mb-5">Healthcare</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
              Credentialing, enrollment, and referral management — automated.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl">
              Enrollment backlogs, credentialing delays, and referrals that fall through the cracks cost your organization time and revenue. Handled runs these operations using AI agents inside your existing systems.
            </p>
          </div>
        </section>

        {/* Workflows */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Specific workflows</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-10">What Handled automates for healthcare teams.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {workflows.map(w => (
                <div key={w.name} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h3 className="font-medium text-stone-950 mb-2">{w.name}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="bg-stone-50 py-16 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Integrations</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-6">Works inside the systems you already use.</h2>
            <div className="flex flex-wrap gap-3">
              {integrations.map(name => (
                <span key={name} className="bg-white border border-stone-200 text-stone-600 text-sm px-4 py-2 rounded-lg">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Deployment options</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-8">How Handled fits into your team.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {deploymentOptions.map(opt => (
                <div key={opt.title} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h3 className="font-medium text-stone-950 mb-2">{opt.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/healthcare/page.tsx && git commit -m "feat: add healthcare sub-page"
```

---

### Task 20: Finance and About sub-pages

**Files:** `app/finance/page.tsx`, `app/about/page.tsx`

- [ ] **Step 1: Create finance page**

```tsx
// app/finance/page.tsx
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Handled | Financial Services Operations',
  description: 'AI-powered churn detection, deposit monitoring, and proactive outreach for financial services teams.',
}

const workflows = [
  { name: 'Churn detection', desc: 'Surface at-risk accounts before they close. AI agents monitor behavioral signals across your CRM and core banking data to flag relationships that need attention.' },
  { name: 'Deposit monitoring', desc: 'Track deposit flow patterns and alert your team to meaningful changes — outflows, inactivity, concentration risk — before they become losses.' },
  { name: 'Proactive outreach', desc: 'Trigger personalized outreach at the right moment. AI agents draft and schedule communications based on signals, not a calendar.' },
  { name: 'CRM integration', desc: 'Every action logged back to your CRM automatically. No manual entry. Full audit trail for compliance.' },
]

const integrations = ['Salesforce', 'Core banking', 'Data warehouse', 'CRM']

const deploymentOptions = [
  { title: 'AI Harness', desc: 'Your team gets a prioritized work queue surfacing which accounts to act on today, with AI-drafted outreach and action logs — inside tools they already use.' },
  { title: 'Fully Managed', desc: 'Our team runs retention operations end-to-end. You get completed work, clear visibility, and no additional headcount.' },
]

export default function FinancePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-handled-950 py-20 px-6">
          <div className="mx-auto max-w-content">
            <Badge variant="finance" className="mb-5">Financial services</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
              Retention, churn detection, and proactive outreach — automated.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl">
              Act on retention signals before the relationship is gone. Handled runs these operations using AI agents inside your existing systems — no migration, no new headcount.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Specific workflows</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-10">What Handled automates for financial services teams.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {workflows.map(w => (
                <div key={w.name} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h3 className="font-medium text-stone-950 mb-2">{w.name}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-16 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Integrations</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-6">Works inside the systems you already use.</h2>
            <div className="flex flex-wrap gap-3">
              {integrations.map(name => (
                <span key={name} className="bg-white border border-stone-200 text-stone-600 text-sm px-4 py-2 rounded-lg">{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Deployment options</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-8">How Handled fits into your team.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {deploymentOptions.map(opt => (
                <div key={opt.title} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h3 className="font-medium text-stone-950 mb-2">{opt.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Create about page**

```tsx
// app/about/page.tsx
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Handled | About',
  description: 'Built by early team members from Rippling and the team behind Wiser.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-handled-950 py-20 px-6">
          <div className="mx-auto max-w-content max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Built by people who've run these operations.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed">
              Handled was started by early team members from Rippling and the team behind Wiser — a revenue intelligence platform used by teams at Superhuman and Lithic.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <div className="max-w-2xl">
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-6">Why Handled</p>
              <h2 className="text-3xl font-medium text-stone-950 mb-6 leading-tight">
                The back-office work never went away. We're making it disappear.
              </h2>
              <div className="space-y-4 text-[16px] text-stone-600 leading-relaxed">
                <p>
                  Every regulated industry runs on operational work that's invisible from the outside — credentialing queues, enrollment follow-ups, retention outreach, payer portal checks. It's not strategic work, but it determines whether revenue actually lands.
                </p>
                <p>
                  Handled encodes that work into AI agents that operate inside existing systems. We've built it for compliance-aware buyers who can't afford shortcuts — healthcare organizations that need HIPAA controls, financial services teams that need audit trails.
                </p>
                <p>
                  Two deployment models: a work queue your team operates, or an operation our team runs end-to-end. Either way, the output is the same: the work gets done, the follow-ups don't fall through, and your team focuses on decisions instead of tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/finance/page.tsx app/about/page.tsx && git commit -m "feat: add finance and about sub-pages"
```

---

### Task 21: Mobile responsiveness pass

- [ ] **Step 1: Check all breakpoints in browser DevTools**

Open http://localhost:3000, toggle DevTools to iPhone 14 (390px width). Verify:
- Hero: single column, WorkflowCard appears below headline (not hidden)
- SocialStrip: horizontal scroll works, no wrapping
- HowDifferent: cards stack vertically
- Industries: cards stack vertically
- CTA form: input full width, button full width below

- [ ] **Step 2: Fix CTA form layout on mobile**

In `components/sections/CTA.tsx`, change the form's flex direction on small screens:

```tsx
<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 w-full max-w-[400px] mx-auto">
  <input ... className="w-full sm:flex-1 ..." />
  <button ... className="w-full sm:w-auto ...">Schedule 20 min</button>
</form>
```

- [ ] **Step 3: Verify Nav hamburger on mobile**

At 390px, confirm hamburger appears, CTA button visible, menu opens/closes correctly.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "fix: mobile layout pass — CTA form stacks, all sections single column at sm"
```

---

### Task 22: CLAUDE.md

**Files:** `CLAUDE.md`

- [ ] **Step 1: Create CLAUDE.md**

```markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev commands

\`\`\`bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint check
\`\`\`

## Architecture

Next.js 14 App Router. All pages are server components except sections with Framer Motion animations (marked `'use client'`).

**Content lives in `/content/*.ts` — never hardcode copy in components.**

Legal page content is in `/content/legal/*.ts`. These files contain verbatim legal text — do not paraphrase or reword anything in them.

## Key constraints

- Legal pages (`/security`, `/data-processors`, `/privacy`, `/terms`) use `LegalLayout` and render content from `/content/legal/*.ts` verbatim. All four must appear in the Footer.
- The `prose-legal` CSS class (defined in `globals.css`) handles all typography for legal pages.
- Animated sections import `FadeIn` from `components/ui/FadeIn.tsx` and must be `'use client'`.
- Color tokens: `handled-*` (brand greens) and custom `stone-*` (cool-grey neutrals) — both defined in `tailwind.config.ts`.
- Form in `CTA.tsx` is mocked — no real API call. Submitting shows a success message.
```

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md && git commit -m "docs: add CLAUDE.md with dev commands and architecture notes"
```

---

## Self-review

**Spec coverage:**
- ✅ All 8 pages (Home, Healthcare, Finance, About, /security, /data-processors, /privacy, /terms)
- ✅ All home page sections (Hero, SocialStrip, HowDifferent, Industries, Proof, CTA)
- ✅ All 4 legal pages use LegalLayout
- ✅ All 4 legal pages linked in Footer bottom bar
- ✅ Privacy policy 16 sections with table in section 12
- ✅ Data processors tables (6 groups)
- ✅ All mailto links (privacy@, security@, legal@)
- ✅ WorkflowCard animation
- ✅ Framer Motion on home sections
- ✅ Mocked CTA form with success state
- ✅ Color tokens exact per spec
- ✅ Mobile responsive layout rules
- ✅ Last Updated dates preserved verbatim

**No placeholders found.**

**Type consistency:** `BadgeProps.variant` uses `'healthcare' | 'finance'` — `industries.ts` exports `tagVariant: 'healthcare' | 'finance'` — matches. `FadeIn` props consistent across all usages.
