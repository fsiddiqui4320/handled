import Link from 'next/link'
import Image from 'next/image'

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
          <div className="mb-3">
            <Image
              src="/logos/handled-logo.svg"
              alt="Handled"
              width={100}
              height={30}
              className="opacity-80"
            />
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
