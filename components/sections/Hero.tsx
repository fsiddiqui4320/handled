'use client'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import WorkflowCard from '@/components/ui/WorkflowCard'

const trustPills = ['Built by Rippling alumni', 'Wiser team', 'HIPAA-ready']

export default function Hero() {
  const scrollToHowDifferent = () => {
    document.getElementById('how-different')?.scrollIntoView({ behavior: 'smooth' })
  }

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
              Your team shouldn&apos;t be{' '}
              <span className="text-handled-300">doing the work</span>{' '}
              AI can do.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed mb-8 max-w-lg">
              Handled runs your back-office operations — credentialing, enrollment, retention, onboarding — using AI agents that work inside your existing systems. No migration. No new headcount.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button variant="primary" size="md" className="px-5 py-2.5">
                Schedule a 20-min review
              </Button>
              <Button variant="ghost" size="md" className="px-5 py-2.5" onClick={scrollToHowDifferent}>
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
