interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  body: string
  dark?: boolean
}

export default function FeatureCard({ icon, title, body, dark = false }: FeatureCardProps) {
  if (dark) {
    return (
      <div className="bg-gradient-to-br from-handled-800/35 to-handled-950/20 rounded-xl p-5">
        <div className="w-9 h-9 flex items-center justify-center mb-4 opacity-80">{icon}</div>
        <h3 className="font-medium text-white text-[15px] mb-2">{title}</h3>
        <p className="text-sm text-white/55 leading-relaxed">{body}</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-stone-50 to-white rounded-xl p-5">
      <div className="mb-4 opacity-80">{icon}</div>
      <h3 className="font-medium text-stone-950 text-[15px] mb-2">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
    </div>
  )
}
