'use client'
import FadeIn from '@/components/ui/FadeIn'
import ParticleCanvas from '@/components/ui/ParticleCanvas'

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-handled-950 min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 overflow-hidden">
      <ParticleCanvas />
      <div className="pointer-events-none absolute -top-24 -right-20 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(77,175,124,0.05)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-12 -left-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(77,175,124,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <FadeIn delay={0}>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 headline-glow">
            Your team shouldn&apos;t be doing the work{' '}
            <em className="headline-glow-accent">AI can do.</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg font-light text-white/55 mb-10 max-w-lg mx-auto">
            AI agents that run your back-office operations inside your existing systems.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <button
            onClick={scrollToCTA}
            className="bg-handled-300 text-handled-950 font-semibold px-8 py-3.5 rounded-full text-[15px] hover:bg-handled-200 transition-colors"
          >
            Book a Demo
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
