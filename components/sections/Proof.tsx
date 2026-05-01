import Link from 'next/link'

export default function Proof() {
  return (
    <section className="bg-mint py-20 px-6">
      <div className="mx-auto max-w-content flex justify-center">
        <div className="max-w-[560px] text-center">
          <blockquote className="text-[16px] text-stone-700 leading-relaxed mb-4">
            &ldquo;Built by early team members from Rippling and the team behind Wiser — a revenue intelligence platform used by teams at Superhuman and Lithic.&rdquo;
          </blockquote>
          <Link href="/about" className="text-sm text-handled-400 hover:text-handled-300 font-medium transition-colors">
            About Handled →
          </Link>
        </div>
      </div>
    </section>
  )
}
