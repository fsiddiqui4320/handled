// content/legal/data-processors.ts
export interface SubProcessor {
  name: string
  purpose: string
  dataProcessed: string
  location: string
  scope: string
}

export interface ProcessorGroup {
  heading: string
  processors: SubProcessor[]
}

export const processorGroups: ProcessorGroup[] = [
  {
    heading: 'Infrastructure & Hosting',
    processors: [
      { name: 'Vercel', purpose: 'Application hosting, serverless compute, and edge delivery', dataProcessed: 'Application data, deployment artifacts', location: 'United States', scope: 'All accounts' },
      { name: 'Supabase', purpose: 'Database and storage', dataProcessed: 'Application data, file storage', location: 'United States', scope: 'All accounts' },
      { name: 'GitHub', purpose: 'Source control, CI/CD, and deployment automation', dataProcessed: 'Source code, build configuration', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'AI & Machine Learning',
    processors: [
      { name: 'Anthropic', purpose: 'AI inference (zero-retention)', dataProcessed: 'Workflow data for AI processing', location: 'United States', scope: 'Selected by account based on model routing' },
      { name: 'OpenAI', purpose: 'AI inference (zero-retention)', dataProcessed: 'Workflow data for AI processing', location: 'United States', scope: 'Selected by account based on model routing' },
      { name: 'Google Vertex AI', purpose: 'AI inference and document processing', dataProcessed: 'Workflow data for AI processing', location: 'United States', scope: 'Selected by account based on model routing' },
      { name: 'ElevenLabs', purpose: 'AI voice agent capabilities', dataProcessed: 'Voice interaction data', location: 'United States', scope: 'Voice-enabled builds only' },
      { name: 'Retell AI', purpose: 'AI voice agent capabilities', dataProcessed: 'Voice interaction data', location: 'United States', scope: 'Voice-enabled builds only' },
    ],
  },
  {
    heading: 'Security & Compliance',
    processors: [
      { name: 'Comp AI', purpose: 'SOC 2 compliance monitoring', dataProcessed: 'System configuration and audit logs', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'Logging & Monitoring',
    processors: [
      { name: 'Axiom', purpose: 'Centralized log aggregation', dataProcessed: 'Application logs, system event metadata', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'Analytics',
    processors: [
      { name: 'PostHog', purpose: 'Product analytics', dataProcessed: 'Usage events, anonymized visitor data', location: 'United States', scope: 'All accounts' },
    ],
  },
  {
    heading: 'Communications',
    processors: [
      { name: 'Twilio', purpose: 'SMS and telephony capabilities', dataProcessed: 'Phone numbers, message metadata', location: 'United States', scope: 'If applicable' },
    ],
  },
]
