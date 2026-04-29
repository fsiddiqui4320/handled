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
