import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import { termsContent } from '@/content/legal/terms'

export const metadata: Metadata = { title: 'Handled | Terms of Service' }

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="Last Updated: March 19, 2026">
      {termsContent.intro.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>{termsContent.coverPage.heading}</h2>
      <h3>{termsContent.coverPage.orderForm.heading}</h3>
      {termsContent.coverPage.orderForm.body.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>Key Terms</h2>
      <dl className="space-y-4">
        {termsContent.keyTerms.map(item => (
          <div key={item.term}>
            <dt className="font-medium text-stone-950">{item.term}</dt>
            <dd className="text-stone-600 mt-1 pl-4">
              {item.definition.split('\n').map((line, i) => (
                <span key={i}>{line}{i < item.definition.split('\n').length - 1 && <br />}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <h2>Attachments and Supplements</h2>
      {termsContent.attachments.map(attachment => (
        <div key={attachment.heading}>
          <h3>{attachment.heading}</h3>
          {attachment.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          {attachment.bullets && (
            <ul>
              {attachment.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}

      <p className="mt-8 text-sm text-stone-600">
        Questions? Contact us at{' '}
        <a href="mailto:legal@withhandled.com" className="text-handled-400 hover:underline">
          legal@withhandled.com
        </a>
      </p>
    </LegalLayout>
  )
}
