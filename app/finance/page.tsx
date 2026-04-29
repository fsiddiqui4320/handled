import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Handled | Financial Services Operations',
  description: 'AI-powered churn detection, deposit monitoring, and proactive outreach for financial services teams.',
}

const workflows = [
  { name: 'Churn detection', desc: 'Surface at-risk accounts before they close. AI agents monitor behavioral signals across your CRM and core banking data to flag relationships that need attention.' },
  { name: 'Deposit monitoring', desc: 'Track deposit flow patterns and alert your team to meaningful changes — outflows, inactivity, concentration risk — before they become losses.' },
  { name: 'Proactive outreach', desc: 'Trigger personalized outreach at the right moment. AI agents draft and schedule communications based on signals, not a calendar.' },
  { name: 'CRM integration', desc: 'Every action logged back to your CRM automatically. No manual entry. Full audit trail for compliance.' },
]

const integrationNames = ['Salesforce', 'Core banking', 'Data warehouse', 'CRM']

const deploymentOptions = [
  { title: 'AI Harness', desc: 'Your team gets a prioritized work queue surfacing which accounts to act on today, with AI-drafted outreach and action logs — inside tools they already use.' },
  { title: 'Fully Managed', desc: 'Our team runs retention operations end-to-end. You get completed work, clear visibility, and no additional headcount.' },
]

export default function FinancePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-handled-950 py-20 px-6">
          <div className="mx-auto max-w-content">
            <Badge variant="finance" className="mb-5">Financial services</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
              Retention, churn detection, and proactive outreach — automated.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl">
              Act on retention signals before the relationship is gone. Handled runs these operations using AI agents inside your existing systems — no migration, no new headcount.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Specific workflows</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-10">What Handled automates for financial services teams.</h2>
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
