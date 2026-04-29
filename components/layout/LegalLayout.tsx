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
