import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Handled | Healthcare Operations',
  description: 'AI-powered credentialing, payer enrollment, referral management, and patient engagement for healthcare organizations.',
}

const onboardingStats = [
  { value: '6–12 mo', label: 'To fully onboard a new provider' },
  { value: '15–30+', label: 'Payer enrollments per provider' },
  { value: '50%+', label: 'Of providers still incomplete at go-live' },
  { value: '30+ days', label: 'Average follow-up delay per payer' },
]

const patientStats = [
  { value: '40%+', label: 'Of referrals never convert to a scheduled visit' },
  { value: '5+ days', label: 'From referral received to first patient contact' },
  { value: '3–5', label: 'Channels per patient requiring coordinated outreach' },
  { value: '25%+', label: 'Of patients unreached after initial outreach' },
]

const differences = [
  { num: '1', title: 'No migration', desc: 'We plug into CAQH, CMS PECOS, Availity, your PM system, and EHR. Your team keeps the tools they know. We work inside them.' },
  { num: '2', title: 'Not just alerts', desc: 'Every enrollment, credential, and referral is ranked by urgency with drafted next steps. Your team acts on packaged work, not raw notifications.' },
  { num: '3', title: 'Completed work', desc: 'BPOs are slow and opaque. Software still needs your staff. We deliver enrolled providers, verified credentials, and scheduled patients.' },
  { num: '4', title: 'Your choice', desc: 'Fully managed: we run the operation end-to-end. AI Harness: your team runs it with AI that does the prep work. Switch anytime.' },
]

const serviceModels = [
  { title: 'AI Harness for Your Team', desc: 'Your team runs the operation with AI that prioritizes tasks, packages context, and drafts next steps. Less time preparing, more time getting work done.' },
  { title: 'Fully Managed', desc: 'Our team runs provider onboarding and patient access for you. We handle the follow-ups, portal submissions, patient outreach, and coordination. You get completed work.' },
]

const complianceItems = [
  { title: 'HIPAA (In Progress)', desc: 'BAA available for healthcare engagements. Compliance program in progress.' },
  { title: 'SOC 2 Type II (In Progress)', desc: 'Observation period in progress, report available under NDA upon completion.' },
  { title: 'Encryption', desc: 'AES-256 at rest, TLS in transit across every layer.' },
  { title: 'Annual Penetration Testing', desc: 'Independent third-party assessments.' },
  { title: 'Custom Deployments', desc: 'Dedicated environments available per customer.' },
]

export default function HealthcarePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-handled-950 py-24 px-6">
          <div className="mx-auto max-w-content">
            <Badge variant="healthcare" className="mb-5">Healthcare Operations</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
              Provider onboarding and patient access, handled.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl mb-8">
              We run credentialing, enrollment, licensing, referrals, and patient outreach for your team. Fully managed or AI Harness. Either way, work gets done.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="bg-handled-400 text-handled-950 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-handled-300 transition-colors">Talk to our team</a>
              <a href="#how-it-works" className="border border-white/20 text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors">See how it works</a>
            </div>
          </div>
        </section>

        {/* Operations Dashboard — main hero screenshot */}
        <section id="how-it-works" className="bg-handled-950 pb-12 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-handled-400/70 font-medium mb-4">Handled Healthcare | Operations Dashboard</p>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/screenshots/MainDashboard.png"
                alt="Real-time operations dashboard showing provider pipeline status, revenue at risk, and key performance metrics"
                width={2174}
                height={1646}
                className="w-full"
                priority
              />
            </div>
            <p className="text-sm text-white/40 mt-3">Real-time operations dashboard</p>
          </div>
        </section>

        {/* Provider Onboarding Problem */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Provider Onboarding</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-4 max-w-xl">Every delayed enrollment is locked revenue.</h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl mb-10">
              Provider onboarding is manual, fragmented, and slow. Teams track credentialing in spreadsheets, chase payer enrollments through portals, and lose weeks waiting on responses. Every delay is revenue that stays locked.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {onboardingStats.map(stat => (
                <div key={stat.value} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <p className="text-2xl font-bold text-stone-950 mb-1">{stat.value}</p>
                  <p className="text-sm text-stone-500 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payer Enrollment */}
        <section className="bg-stone-50 py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Payer Enrollment</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h2 className="text-3xl font-medium text-stone-950 mb-4">Get providers enrolled and generating revenue faster.</h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Payer enrollment is where onboarding stalls. Each payer has its own portal, timeline, and follow-up cadence. Handled tracks every enrollment across every payer and completes the ones that need action now.
                </p>
                <ul className="space-y-3">
                  {[
                    'Know exactly which enrollments are stalled, why, and what to do next',
                    'See revenue at risk for every pending enrollment',
                    'Get follow-up drafts ready to send, not just reminders to follow up',
                    'Keep CAQH and CMS PECOS in sync without manual checks',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className="mt-0.5 text-handled-600 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">Handled Healthcare | Payer Enrollment</p>
                <div className="rounded-xl overflow-hidden border border-stone-200 shadow-lg">
                  <Image
                    src="/screenshots/EnrollmentQueue.png"
                    alt="Payer enrollment work queue with case side panel showing payer info, revenue at risk, and suggested follow-up actions"
                    width={2612}
                    height={1626}
                    className="w-full"
                  />
                </div>
                <p className="text-xs text-stone-400 mt-2">Live payer enrollment queue with case detail panel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentialing */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Credentialing</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">Handled Healthcare | Credentialing</p>
                <div className="rounded-xl overflow-hidden border border-stone-200 shadow-lg">
                  <Image
                    src="/screenshots/CredentialingSupplement.png"
                    alt="Credentialing work queue with provider details panel showing state licenses, DEA status, and board certifications"
                    width={2666}
                    height={1480}
                    className="w-full"
                  />
                </div>
                <p className="text-xs text-stone-400 mt-2">Credentialing status tracker with provider detail panel</p>
              </div>
              <div>
                <h2 className="text-3xl font-medium text-stone-950 mb-4">Committee-ready files, built and tracked automatically.</h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Credentialing requires verifying every license, certification, and education record before a provider can see patients. Handled keeps the entire process on track, or runs it for you entirely.
                </p>
                <ul className="space-y-3">
                  {[
                    'Track every verification (licenses, DEA, education, malpractice) in one place',
                    'Keep CAQH attestations current without chasing providers',
                    'Deliver committee-ready files, not work-in-progress checklists',
                    'Manage hospital and facility privileging alongside payer credentialing',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className="mt-0.5 text-handled-600 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing */}
        <section className="bg-stone-50 py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Licensing</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-medium text-stone-950 mb-4">Multi-state license management without the manual overhead.</h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  For organizations operating across state lines — especially telemedicine and multi-location groups — license management is a constant operational burden. Handled tracks every license and handles renewals before they become emergencies.
                </p>
                <ul className="space-y-3">
                  {[
                    'Track every state license, renewal date, and filing status across your provider roster',
                    'Get ahead of renewals before they become emergencies',
                    'Handle state board submissions and follow-ups without manual tracking',
                    'Keep DEA and controlled substance registrations current',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className="mt-0.5 text-handled-600 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">Handled Healthcare | Licensing</p>
                <div className="rounded-xl overflow-hidden border border-stone-200 shadow-lg">
                  <Image
                    src="/screenshots/LicensingQueue.png"
                    alt="Licensing work queue with side panel showing returned Florida license renewal, revenue at risk, and follow-up actions"
                    width={2666}
                    height={1480}
                    className="w-full"
                  />
                </div>
                <p className="text-xs text-stone-400 mt-2">License renewal work queue with action panel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Access Problem */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Patient Access</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-4 max-w-xl">Referrals get lost. Patients go unreached.</h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl mb-10">
              Referrals arrive through fax, phone, portals, and web forms. Patients need follow-up across calls, SMS, and email. When outreach is manual and siloed, patients fall through the cracks — and every missed connection is revenue your practice never sees.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {patientStats.map(stat => (
                <div key={stat.value} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <p className="text-2xl font-bold text-stone-950 mb-1">{stat.value}</p>
                  <p className="text-sm text-stone-500 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Management + Patient Engagement */}
        <section className="bg-stone-50 py-20 px-6">
          <div className="mx-auto max-w-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">Referral Management</p>
                <h3 className="text-2xl font-medium text-stone-950 mb-3">From referral received to appointment scheduled, without the gaps.</h3>
                <p className="text-stone-600 leading-relaxed text-sm mb-4">
                  Referrals arrive through fax, phone, web forms, and provider portals — and each one represents a patient waiting. Handled tracks every referral through a stage-based pipeline and surfaces the ones falling behind.
                </p>
                <ul className="space-y-2">
                  {[
                    'Track every referral from intake to scheduled appointment',
                    'See which referral sources, channels, and payers convert best',
                    'Surface referrals falling behind before they become lost patients',
                    'Understand referral patterns from call transcripts and fax headers',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className="mt-0.5 text-handled-600 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-3">Patient Engagement</p>
                <h3 className="text-2xl font-medium text-stone-950 mb-3">Reach every patient across every channel.</h3>
                <p className="text-stone-600 leading-relaxed text-sm mb-4">
                  Patients slip through the cracks when outreach is manual and siloed. Handled unifies communication across calls, SMS, email, and voicemail, and triggers AI-powered follow-ups so no patient goes unreached.
                </p>
                <ul className="space-y-2">
                  {[
                    'See every patient interaction (calls, SMS, email, voicemail) in one place',
                    'Know which patients are engaged, which are dropping off, and why',
                    'Trigger AI-powered outreach for unreached patients automatically',
                    'Score conversation quality and classify topics without manual review',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className="mt-0.5 text-handled-600 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting & Analytics — 3 screenshots */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Reporting & Analytics</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-3 max-w-xl">Real-time visibility across every workflow.</h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl mb-4">
              Handled gives your leadership team dashboards that cover every stage of provider onboarding and patient access, so you always know what&apos;s on track and what needs attention.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 text-sm text-stone-600">
              {['Onboarding progress by payer mix', 'Referral conversion rates by source and channel', 'Follow-up adherence and turnaround time', 'Team performance and case throughput'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-handled-600 shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { src: '/screenshots/TeamPerformance.png', label: 'Handled Healthcare | Team Performance', caption: 'Team performance analytics', width: 0, height: 0, w: 1800, h: 1200 },
                { src: '/screenshots/EnrollmentPayerMatrix.png', label: 'Handled Healthcare | Enrollment Payer Matrix', caption: 'Custom payer enrollment matrices', width: 0, height: 0, w: 2400, h: 1200 },
                { src: '/screenshots/CaseIntelligence.png', label: 'Handled Healthcare | Case Intelligence', caption: 'Granular case-level intelligence', width: 0, height: 0, w: 1800, h: 1200 },
              ].map(img => (
                <div key={img.src}>
                  <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-2">{img.label}</p>
                  <div className="rounded-xl overflow-hidden border border-stone-200 shadow-md">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      width={img.w}
                      height={img.h}
                      className="w-full"
                    />
                  </div>
                  <p className="text-xs text-stone-400 mt-2">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="bg-stone-50 py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">How We&apos;re Different</p>
            <h2 className="text-3xl font-medium text-stone-950 mb-10 max-w-xl">Software leaves you to do the work. We do the work.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {differences.map(d => (
                <div key={d.num} className="bg-white border border-stone-200 rounded-xl p-6 flex gap-4">
                  <span className="text-2xl font-bold text-stone-200 shrink-0 leading-none">{d.num}</span>
                  <div>
                    <h3 className="font-medium text-stone-950 mb-1">{d.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Models */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Service Models</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-8">Choose how you want to operate.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {serviceModels.map(opt => (
                <div key={opt.title} className="bg-stone-50 border border-stone-200 rounded-xl p-6">
                  <h3 className="font-medium text-stone-950 mb-2">{opt.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-500">
              Plugs into CAQH, CMS PECOS, Availity, your practice management system, and EHR/EMR. No migration required. Built for therapy groups, telemedicine companies, pediatric urgent care, and behavioral health organizations.
            </p>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="bg-stone-50 py-20 px-6">
          <div className="mx-auto max-w-content">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium mb-4">Security & Compliance</p>
            <h2 className="text-2xl font-medium text-stone-950 mb-2">Built for regulated industries.</h2>
            <a href="/security" className="text-sm text-handled-600 underline underline-offset-2 mb-8 inline-block">Learn more about our security commitments</a>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {complianceItems.map(item => (
                <div key={item.title} className="bg-white border border-stone-200 rounded-xl p-5">
                  <h3 className="font-medium text-stone-950 mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
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
