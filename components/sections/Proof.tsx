import Link from 'next/link'

const companies = ['Rippling', 'Wiser', 'Superhuman', 'Lithic']

export default function Proof() {
  return (
    <section className="bg-handled-950 py-24 px-6">
      <div className="mx-auto max-w-content flex justify-center">
        <div className="max-w-[600px] text-center">
          <div className="font-serif-clean text-[72px] leading-none text-handled-700/50 mb-[-8px] select-none">&ldquo;</div>
          <blockquote className="font-serif-clean text-xl sm:text-2xl font-medium text-white/80 leading-relaxed mb-8">
            Built by early team members from Rippling and the team behind Wiser &mdash; a revenue intelligence platform used by teams at Superhuman and Lithic.
          </blockquote>
          <p className="text-xs text-handled-500 mb-8 tracking-wide">{companies.join(' · ')}</p>
          <Link href="/about" className="text-sm text-handled-400 hover:text-handled-300 font-medium transition-colors">
            About Handled →
          </Link>
        </div>
      </div>
    </section>
  )
}
