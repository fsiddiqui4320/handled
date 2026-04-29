export const industries = [
  {
    tag: 'Healthcare',
    tagVariant: 'healthcare' as const,
    heading: 'Credentialing, enrollment, and referral management',
    pain: 'Enrollment backlogs, credentialing delays, and referrals that fall through the cracks.',
    workflows: ['Credentialing', 'Payer enrollment', 'Licensing', 'Referral management', 'Patient engagement'],
    href: '/healthcare',
  },
  {
    tag: 'Financial services',
    tagVariant: 'finance' as const,
    heading: 'Retention, churn detection, and proactive outreach',
    pain: 'Act on retention signals before the relationship is gone.',
    workflows: ['Churn detection', 'Deposit monitoring', 'Proactive outreach', 'CRM integration'],
    href: '/finance',
  },
]
