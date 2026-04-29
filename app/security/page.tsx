import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import { securityCards, architectureCommitments, dataHandling } from '@/content/legal/security'

export const metadata: Metadata = { title: 'Handled | Security' }

export default function SecurityPage() {
  return (
    <LegalLayout title="Enterprise security for sensitive operations.">
      <p className="text-stone-600 leading-relaxed mb-10">
        Handled is built to handle sensitive data across healthcare and financial services. Our security posture is designed around SOC 2 Type II and HIPAA requirements, both currently in progress, alongside the data protection standards of regulated industries.
      </p>

      {/* 2x2 compliance cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {securityCards.map(card => (
          <div key={card.title} className="bg-white border border-stone-200 rounded-xl p-5">
            <div className="text-2xl mb-3">{card.icon}</div>
            <h3 className="font-medium text-stone-950 text-[15px] mb-2">{card.title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      <h2>Architecture commitments</h2>
      <ul>
        {architectureCommitments.map(item => <li key={item}>{item}</li>)}
      </ul>

      <h2>Data handling</h2>
      <ul>
        {dataHandling.map(item => <li key={item}>{item}</li>)}
      </ul>

      <p className="mt-8 text-sm text-stone-600">
        For security questionnaires, BAA requests, or to report a security concern, contact{' '}
        <a href="mailto:security@withhandled.com" className="text-handled-400 hover:underline">security@withhandled.com</a>
      </p>
    </LegalLayout>
  )
}
