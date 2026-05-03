'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import ParticleCanvas from '@/components/ui/ParticleCanvas'

const ROTATING_WORDS = ['hate', 'ignore', 'avoid', 'delay'] as const

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex(i => (i + 1) % ROTATING_WORDS.length)
    }, 1500)
    return () => clearInterval(id)
  }, [])

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-handled-950 min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 overflow-hidden">
      <ParticleCanvas />
      <div className="hero-glow-tr" />
      <div className="hero-glow-bl" />
      <div className="hero-glow-center" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <FadeIn delay={0}>
          <h1 className="mb-6">
            <span className="block font-sans font-semibold text-white tracking-tight leading-[0.92] text-[clamp(3rem,calc(4vw_+_2rem),5rem)]">
              All the work you{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
              ,
            </span>
            <em className="block font-serif font-normal headline-glow-accent leading-[1.05] text-[clamp(3rem,calc(4vw_+_2rem),5rem)]">
              handled.
            </em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg font-light text-white/60 mb-10 max-w-lg mx-auto">
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
