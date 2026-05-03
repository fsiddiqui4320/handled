import { integrations } from '@/content/integrations'

export default function SocialStrip() {
  return (
    <section className="bg-mint border-t border-handled-700/30 border-b border-stone-200 py-4 px-8">
      <div className="mx-auto max-w-content flex items-center gap-5 overflow-x-auto">
        <span className="text-xs text-stone-500 whitespace-nowrap flex-shrink-0 font-medium">Integrates with</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {integrations.map(name => (
            <span key={name} className="bg-white border border-stone-300 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
        <span className="text-xs text-stone-400 whitespace-nowrap flex-shrink-0">+ your data warehouse</span>
      </div>
    </section>
  )
}
