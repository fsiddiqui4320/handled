import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'
import SimpleMarkdown from '@/components/ui/SimpleMarkdown'
import { privacyIntro, privacySummary, privacySections } from '@/content/legal/privacy'

export const metadata: Metadata = { title: 'Handled | Privacy Policy' }

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="Last updated March 19, 2026">
      <SimpleMarkdown text={privacyIntro} />

      <h2>Summary of Key Points</h2>
      <SimpleMarkdown text={privacySummary} />

      <h2>Table of Contents</h2>
      <ol className="list-decimal pl-5 space-y-1 mb-8">
        {privacySections.map(s => (
          <li key={s.number}>
            <a href={`#section-${s.number}`} className="text-handled-400 hover:underline text-sm">
              {s.heading}
            </a>
          </li>
        ))}
      </ol>

      {privacySections.map(section => (
        <div key={section.number} id={`section-${section.number}`}>
          <h2>{section.number}. {section.heading}</h2>

          {section.inShort && (
            <em className="in-short">In Short: {section.inShort}</em>
          )}

          <SimpleMarkdown text={section.content} />

          {section.table && (
            <>
              <table>
                <thead>
                  <tr>{section.table.headers.map(h => <th key={h}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
              {section.contentAfterTable && <SimpleMarkdown text={section.contentAfterTable} />}
            </>
          )}

          {section.subsections?.map(sub => (
            <div key={sub.heading}>
              <h3>{sub.heading}</h3>
              {sub.inShort && <em className="in-short">In Short: {sub.inShort}</em>}
              <SimpleMarkdown text={sub.content} />
            </div>
          ))}

          {section.number === 15 && (
            <address className="not-italic text-sm text-stone-600 mt-4 leading-relaxed">
              Handled AI, Inc.<br />
              3500 South DuPont Highway<br />
              Dover, DE 19901<br />
              United States
            </address>
          )}
        </div>
      ))}
    </LegalLayout>
  )
}
