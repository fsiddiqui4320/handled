// content/legal/terms.ts
// Verbatim content scraped from withhandled.com/terms — do not paraphrase or alter

export const termsContent = {
  intro: `If you signed a separate Cover Page to access the Product with the same account, and that agreement has not ended, the terms below do not apply to you. Instead, your separate Cover Page applies to your use of the Product.

This Agreement is between Handled AI, Inc. and the company or person accessing or using the Product. This Agreement consists of: (1) the Order Form below and (2) the Framework Terms defined below.

If you are accessing or using the Product on behalf of your company, you represent that you are authorized to accept this Agreement on behalf of your company. By signing up, accessing, or using the Product, Customer indicates its acceptance of this Agreement and agrees to be bound by the terms and conditions of this Agreement.`,

  coverPage: {
    heading: 'Cover Page',
    orderForm: {
      heading: 'Order Form',
      body: `Framework Terms: This Order Form incorporates and is governed by the Framework Terms that are made up of the Key Terms below and the Common Paper Cloud Service Agreement Standard Terms Version 2.1, which are incorporated by reference. Any modifications to the Standard Terms made in the Cover Page will control over conflicts with the Standard Terms. Capitalized words have the meanings given in the Cover Page or the Standard Terms.

Cloud Service: Handled AI's cloud-based platform for financial services and healthcare organizations. The Cloud Service provides AI-powered work queues and managed services that connect to customers' existing systems of record, surface prioritized work, and enable teams to detect signals, prioritize workflows, and execute actions. The Cloud Service includes integrations with customer systems (e.g., Salesforce, Slack, EHR/practice management systems), AI-driven document generation, and voice agent capabilities. The Cloud Service is delivered as a hosted web application accessible at a custom domain or Provider subdomain. The specific scope, configuration, service model (managed service or customer-operated), and integrations for each Customer are described in the applicable Order Form.

Order Date: The Effective Date

Subscription Period: As specified in the applicable Order Form.

Fees and Payment: Fees are as set forth in the applicable Order Form. Provider will invoice Customer as specified in the Order Form. Payment is due within thirty (30) days of invoice date unless otherwise specified in the Order Form. Provider will not automatically charge funds from a payment method on file.

Non-Renewal Notice Period: At least 30 days before the end of the current Subscription Period.

Use Limitations: As specified in the applicable Order Form.`,
    },
  },

  keyTerms: [
    {
      term: 'Customer',
      definition: 'The company or person who accesses or uses the Product. If the person accepting this Agreement is doing so on behalf of a company, all use of the word "Customer" in the Agreement will mean that company.',
    },
    {
      term: 'Provider',
      definition: 'Handled AI, Inc.',
    },
    {
      term: 'Effective Date',
      definition: 'The date Customer first accepts this Agreement.',
    },
    {
      term: 'Governing Law',
      definition: 'The laws of the State of Delaware.',
    },
    {
      term: 'Chosen Courts',
      definition: 'The state or federal courts located in Delaware.',
    },
    {
      term: 'Covered Claims',
      definition: `Provider Covered Claims: Any action, proceeding, or claim that the Cloud Service, when used by Customer according to the terms of the Agreement, violates, misappropriates, or otherwise infringes upon anyone else's intellectual property or other proprietary rights.
Customer Covered Claims: Any action, proceeding, or claim that (1) the Customer Content, when used according to the terms of the Agreement, violates, misappropriates, or otherwise infringes upon anyone else's intellectual property or other proprietary rights; or (2) results from Customer's breach or alleged breach of Section 2.1 (Restrictions on Customer).`,
    },
    {
      term: 'General Cap Amount',
      definition: 'As specified in the applicable Order Form.',
    },
    {
      term: 'Notice Address',
      definition: `For Provider: legal@withhandled.com\nFor Customer: The main email address on Customer's account.`,
    },
  ],

  attachments: [
    {
      heading: 'Data Processing Agreement',
      body: "Provider's Data Processing Agreement, available at the URL provided in the applicable Order Form or upon request, is incorporated by reference.",
      bullets: null as string[] | null,
    },
    {
      heading: 'Prohibited Data Modification',
      body: 'Notwithstanding Section 2.5 of the Standard Terms, Customer may submit financial data (including financial account numbers) and health-related data to the Cloud Service to the extent necessary for the Cloud Service to function as described in the applicable Order Form and subject to the Data Processing Agreement and, where applicable, a Business Associate Agreement.',
      bullets: null as string[] | null,
    },
    {
      heading: 'Customer Content Deletion',
      body: "Upon termination or expiration of this Agreement, Provider will delete all Customer Content within thirty (30) days, except for copies retained in automated backup systems, which will be deleted in accordance with Provider's standard backup retention schedule.",
      bullets: null as string[] | null,
    },
    {
      heading: 'AI and Machine Learning',
      body: `Provider may use aggregated and de-identified data derived from Customer's use of the Cloud Service to improve the Cloud Service generally. Provider will not use Customer Content (in identifiable form) to train or fine-tune machine learning models unless explicitly authorized in writing by Customer.

The applicable Order Form may specify additional restrictions on AI and machine learning data usage.`,
      bullets: null as string[] | null,
    },
    {
      heading: 'Security Policy',
      body: 'Provider maintains a security program designed to protect Customer Content that includes the following measures:',
      bullets: [
        'Encryption at rest using AES-256 and in transit using TLS 1.2 or higher.',
        'Multi-factor authentication (MFA) required for all personnel accessing production systems.',
        'Annual third-party penetration testing, with remediation reports available to Customer upon request under NDA.',
        'SOC 2 Type II audit. Provider will make its most recent SOC 2 Type II report available to Customer upon request under NDA. Provider is currently in the process of obtaining its initial SOC 2 Type II certification, and will provide its audit report upon completion.',
        'HIPAA compliance program for healthcare customers operating under an executed Business Associate Agreement.',
        'Provider will promptly notify Customer of any Security Incident as defined in the Standard Terms.',
      ],
    },
  ],
}
