import FeatureCard from '@/components/ui/FeatureCard'
import FadeIn from '@/components/ui/FadeIn'

const QueueIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="3" width="14" height="2" rx="1" fill="white" opacity="0.9"/>
    <rect x="2" y="8" width="10" height="2" rx="1" fill="white" opacity="0.7"/>
    <rect x="2" y="13" width="12" height="2" rx="1" fill="white" opacity="0.5"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" opacity="0.9"/>
    <path d="M9 5v4l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
  </svg>
)

export default function HowDifferent() {
  return (
    <section id="how-different" className="bg-handled-950 py-20 px-6">
      <div className="mx-auto max-w-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-4">How we&apos;re different</p>
            <h2 className="font-serif-clean text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
              The tools changed.<br />The manual work didn&apos;t.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              More software, same repetitive work: checking portals, chasing follow-ups, re-entering data across systems. Handled encodes that work into AI agents that run inside your existing systems — operated by your team or managed end-to-end by ours.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeIn delay={0}>
            <FeatureCard
              dark
              icon={<QueueIcon />}
              title="AI harness for your team"
              body="A custom work queue deployed into your existing tools. Our AI agents surface what needs attention, draft next steps, and handle portal interactions."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <FeatureCard
              dark
              icon={<ClockIcon />}
              title="Fully managed"
              body="Our operators run the operation end-to-end. Same AI agents, same integrations — you get completed work and clear visibility without adding headcount."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
