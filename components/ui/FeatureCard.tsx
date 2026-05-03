interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  body: string
  dark?: boolean
}

export default function FeatureCard({ icon, title, body, dark = false }: FeatureCardProps) {
  if (dark) {
    return (
      <div className="bg-handled-900/50 border border-handled-700/40 rounded-xl p-5">
        <div className="w-9 h-9 bg-handled-700/60 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-medium text-white text-[15px] mb-2">{title}</h3>
        <p className="text-sm text-white/55 leading-relaxed">{body}</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5">
      <div className="w-9 h-9 bg-handled-800 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-medium text-stone-950 text-[15px] mb-2">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
    </div>
  )
}
