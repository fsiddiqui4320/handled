import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
