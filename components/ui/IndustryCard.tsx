import Link from 'next/link'
import Badge from '@/components/ui/Badge'

interface IndustryCardProps {
  tag: string
  tagVariant: 'healthcare' | 'finance'
  heading: string
  pain: string
  workflows: string[]
  href: string
}

export default function IndustryCard({ tag, tagVariant, heading, pain, workflows, href }: IndustryCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col">
      <Badge variant={tagVariant} className="self-start mb-4">{tag}</Badge>
      <h3 className="font-medium text-stone-950 text-[17px] mb-2 leading-snug">{heading}</h3>
      <p className="text-sm text-stone-500 mb-4 leading-relaxed">{pain}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {workflows.map(w => (
          <Badge key={w} variant="workflow">{w}</Badge>
        ))}
      </div>
      <div className="mt-auto">
        <Link href={href} className="text-sm text-handled-400 hover:text-handled-300 transition-colors font-medium">
          Learn more →
        </Link>
      </div>
    </div>
  )
}
