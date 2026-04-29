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
