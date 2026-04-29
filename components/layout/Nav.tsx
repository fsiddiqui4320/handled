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
