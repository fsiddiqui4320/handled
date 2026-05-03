'use client'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import ParticleCanvas from '@/components/ui/ParticleCanvas'

const ROTATING_WORDS = ['hate', 'ignore', 'avoid', 'delay'] as const

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [slotWidth, setSlotWidth] = useState<number | null>(null)
  const measureRef = useRef<HTMLSpanElement>(null)

  // Measure every word before the first paint so the container never changes size.
  // useLayoutEffect fires synchronously — no flash, no layout shift ever.
  useLayoutEffect(() => {
    const span = measureRef.current
    if (!span) return
    const maxWidth = Math.max(
      ...ROTATING_WORDS.map(word => {
        span.textContent = word
        return span.offsetWidth
      })
    )
    span.textContent = ROTATING_WORDS[0]
    setSlotWidth(maxWidth)
  }, [])

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
              {/* Hidden span: measures all words once so slotWidth = widest word */}
              <span
                ref={measureRef}
                aria-hidden="true"
                className="absolute invisible pointer-events-none whitespace-nowrap"
              >
                {ROTATING_WORDS[0]}
              </span>

              All the work you{' '}
              <span
                className="relative inline-flex align-baseline"
                style={{ width: slotWidth ?? 'auto' }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="whitespace-nowrap"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
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
