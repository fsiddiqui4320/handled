import IndustryCard from '@/components/ui/IndustryCard'
import { industries } from '@/content/industries'

export default function Industries() {
  return (
    <section className="bg-stone-50 py-20 px-6">
      <div className="mx-auto max-w-content">
        <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">
          Purpose-built for regulated industries
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium text-stone-950 mb-10 leading-tight">
          Deep in the workflows that matter most.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map(industry => (
            <IndustryCard key={industry.tag} {...industry} />
          ))}
        </div>
      </div>
    </section>
  )
}
