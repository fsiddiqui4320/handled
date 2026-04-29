import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Handled | About',
  description: 'Built by early team members from Rippling and the team behind Wiser.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-handled-950 py-20 px-6">
          <div className="mx-auto max-w-content max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Built by people who&apos;ve run these operations.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed">
              Handled was started by early team members from Rippling and the team behind Wiser — a revenue intelligence platform used by teams at Superhuman and Lithic.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <div className="max-w-2xl">
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-6">Why Handled</p>
              <h2 className="text-3xl font-medium text-stone-950 mb-6 leading-tight">
                The back-office work never went away. We&apos;re making it disappear.
              </h2>
              <div className="space-y-4 text-[16px] text-stone-600 leading-relaxed">
                <p>
                  Every regulated industry runs on operational work that&apos;s invisible from the outside — credentialing queues, enrollment follow-ups, retention outreach, payer portal checks. It&apos;s not strategic work, but it determines whether revenue actually lands.
                </p>
                <p>
                  Handled encodes that work into AI agents that operate inside existing systems. We&apos;ve built it for compliance-aware buyers who can&apos;t afford shortcuts — healthcare organizations that need HIPAA controls, financial services teams that need audit trails.
                </p>
                <p>
                  Two deployment models: a work queue your team operates, or an operation our team runs end-to-end. Either way, the output is the same: the work gets done, the follow-ups don&apos;t fall through, and your team focuses on decisions instead of tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
