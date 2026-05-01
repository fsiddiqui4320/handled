import { integrations } from '@/content/integrations'

export default function SocialStrip() {
  return (
    <section className="bg-mint border-t border-handled-700/30 border-b border-stone-200 py-3 px-8">
      <div className="mx-auto max-w-content flex items-center gap-4 overflow-x-auto">
        <span className="text-[10px] text-stone-400 whitespace-nowrap flex-shrink-0">Integrates with</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {integrations.map(name => (
            <span key={name} className="bg-white border border-stone-200 text-stone-600 text-xs px-3 py-1 rounded-md whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
        <span className="text-[10px] text-stone-400 whitespace-nowrap flex-shrink-0">+ your data warehouse</span>
      </div>
    </section>
  )
}
