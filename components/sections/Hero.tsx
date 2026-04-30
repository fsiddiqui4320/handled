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
