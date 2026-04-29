interface BadgeProps {
  children: React.ReactNode
  variant?: 'trust' | 'workflow' | 'healthcare' | 'finance'
  className?: string
}

export default function Badge({ children, variant = 'workflow', className = '' }: BadgeProps) {
  const variants = {
    trust: 'bg-white/10 text-white/80 border border-white/20',
    workflow: 'bg-stone-100 text-stone-600 border border-stone-200',
    healthcare: 'bg-handled-50 text-handled-800 border border-handled-100',
    finance: 'bg-blue-50 text-blue-800 border border-blue-100',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
