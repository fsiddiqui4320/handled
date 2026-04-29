'use client'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'none'
}

export default function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 16 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
