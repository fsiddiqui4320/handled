import Link from 'next/link'

interface IndustryCardProps {
  tag: string
  tagVariant: 'healthcare' | 'finance'
  heading: string
  pain: string
  workflows: string[]
  href: string
}

const tagStyles = {
  healthcare: 'bg-handled-50 text-handled-700',
  finance: 'bg-blue-50 text-blue-700',
}

export default function IndustryCard({ tag, tagVariant, heading, pain, workflows, href }: IndustryCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col">
      <span className={`self-start inline-flex items-center px-3 py-1 rounded-full text-sm font-normal mb-4 ${tagStyles[tagVariant]}`}>{tag}</span>
      <h3 className="font-medium text-stone-950 text-[17px] mb-2 leading-snug">{heading}</h3>
      <p className="text-sm text-stone-500 mb-4 leading-relaxed">{pain}</p>
      <p className="text-xs text-stone-400 mb-6">{workflows.join(' · ')}</p>
      <div className="mt-auto">
        <Link href={href} className="text-sm text-handled-400 hover:text-handled-300 transition-colors font-medium">
          Learn more →
        </Link>
      </div>
    </div>
  )
}
