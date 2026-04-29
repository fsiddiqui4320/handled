// content/legal/security.ts
export const securityCards = [
  {
    icon: '🛡',
    title: 'SOC 2 Type II (In Progress)',
    body: 'Active compliance program with continuous monitoring and evidence collection. Observation period began February 2026, with report available under NDA upon completion.',
  },
  {
    icon: '🔒',
    title: 'HIPAA (In Progress)',
    body: 'Business Associate Agreements available for healthcare environments. Dedicated infrastructure for PHI. Compliance program in progress.',
  },
  {
    icon: '🔑',
    title: 'Encryption',
    body: 'AES-256 at rest. TLS in transit. All data encrypted across every layer of the stack.',
  },
  {
    icon: '☂',
    title: 'Cyber Insurance',
    body: 'E&O and Cyber Liability coverage across all verticals.',
  },
]

export const architectureCommitments = [
  'Dedicated environments per industry. Healthcare and financial services data never share infrastructure',
  'Tenant isolation with row-level security on every data table',
  'MFA enforced on all production systems',
  'Centralized audit logging with persistent evidence collection',
  'Penetration testing by independent third-party assessors',
  'Documented incident response and business continuity procedures',
  'All deployments through pull request with automated security review',
  'Vendor SOC 2 certifications verified across our infrastructure stack',
]

export const dataHandling = [
  'We are a data processor. We process data only as directed by our customers.',
  'AI models are used in inference-only mode with zero data retention.',
  'No customer data is used for model training or fine-tuning. We may use aggregated and de-identified data to improve our services.',
  'Daily backups with 14-day retention, operational logs with 12-month retention, and documented recovery procedures.',
]
