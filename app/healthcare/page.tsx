import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Handled | Healthcare Operations',
  description: 'AI-powered credentialing, payer enrollment, referral management, and patient engagement for healthcare organizations.',
}

const workflows = [
  { name: 'Credentialing', desc: 'Automate CAQH profile maintenance, primary source verifications, and payer credentialing submissions. Reduce cycle times from weeks to days.' },
  { name: 'Payer enrollment', desc: 'Track enrollment applications across CMS PECOS, Availity, and payer portals. Surface follow-ups before they become delays.' },
  { name: 'Referral management', desc: 'Catch referrals before they fall through the cracks. AI agents monitor referral status, trigger outreach, and log actions back into your EHR.' },
  { name: 'Patient engagement', desc: 'Proactive outreach for appointments, care gaps, and re-engagement — triggered by signals in your PM system, not a manual list.' },
]

const integrationNames = ['CAQH', 'CMS PECOS', 'Availity', 'Epic / PM/EHR']

const deploymentOptions = [
  { title: 'AI Harness', desc: 'Deployed into your existing tools. Your team gets a prioritized work queue, AI-drafted next steps, and portal automation — without leaving their current workflow.' },
  { title: 'Fully Managed', desc: 'Our team runs the operation end-to-end. Same AI agents, same integrations — you get completed work and a clear audit trail.' },
]

export default function HealthcarePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-handled-950 py-20 px-6">
          <div className="mx-auto max-w-content">
            <Badge variant="healthcare" className="mb-5">Healthcare</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
              Credentialing, enrollment, and referral management — automated.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl">
              Enrollment backlogs, credentialing delays, and referrals that fall through the cracks cost your organization time and revenue. Handled runs these operations using AI agents inside your existing systems.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Specific workflows</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-10">What Handled automates for healthcare teams.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {workflows.map(w => (
                <div key={w.name} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h3 className="font-medium text-stone-950 mb-2">{w.name}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-16 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Integrations</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-6">Works inside the systems you already use.</h2>
            <div className="flex flex-wrap gap-3">
              {integrationNames.map(name => (
                <span key={name} className="bg-white border border-stone-200 text-stone-600 text-sm px-4 py-2 rounded-lg">{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Deployment options</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-8">How Handled fits into your team.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {deploymentOptions.map(opt => (
                <div key={opt.title} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h3 className="font-medium text-stone-950 mb-2">{opt.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
