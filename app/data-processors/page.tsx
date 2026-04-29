import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import { processorGroups } from '@/content/legal/data-processors'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Handled | Data Sub-Processors' }

export default function DataProcessorsPage() {
  return (
    <LegalLayout title="Data Sub-Processors" lastUpdated="Last updated March 20, 2026">
      <p>
        Handled AI, Inc. (&quot;Handled&quot;) uses the following sub-processors to deliver our services. Each sub-processor has been evaluated for security, compliance, and data handling practices consistent with our commitments under our Data Processing Agreements (DPAs) and HIPAA Business Associate Agreements (BAAs).
      </p>
      <p>
        Not all sub-processors apply to every account. The Scope column indicates which sub-processors are active for a given deployment. Your Data Processing Agreement or BAA specifies the sub-processors applicable to your account.
      </p>
      <p>
        For questions about our sub-processors or data handling practices, contact us at{' '}
        <a href="mailto:privacy@withhandled.com" className="text-handled-400 hover:underline">privacy@withhandled.com</a>.
      </p>

      {processorGroups.map(group => (
        <div key={group.heading}>
          <h2>{group.heading}</h2>
          <table>
            <thead>
              <tr>
                <th>Sub-Processor</th>
                <th>Purpose</th>
                <th>Data Processed</th>
                <th>Location</th>
                <th>Scope</th>
              </tr>
            </thead>
            <tbody>
              {group.processors.map(p => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.purpose}</td>
                  <td>{p.dataProcessed}</td>
                  <td>{p.location}</td>
                  <td>{p.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2>Notifications</h2>
      <p>
        We will notify customers of changes to this list at least 30 days before a new sub-processor begins processing customer data. Notifications are sent to the email address on file for each customer&apos;s DPA contact.
      </p>

      <p>
        See also our{' '}
        <Link href="/privacy" className="text-handled-400 hover:underline">Privacy Policy</Link>{' '}
        and{' '}
        <Link href="/security" className="text-handled-400 hover:underline">Security page</Link>{' '}
        for more information about how we protect your data.
      </p>
    </LegalLayout>
  )
}
