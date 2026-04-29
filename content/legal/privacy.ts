// content/legal/privacy.ts
// Verbatim content scraped from withhandled.com/privacy — do not paraphrase or alter

export const privacyIntro = `This Privacy Notice for Handled AI, Inc. ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:

- Visit our website at withhandled.com or any website of ours that links to this Privacy Notice
- Use Handled AI. Handled AI is a B2B software platform that provides AI-powered work queues and managed services for back office teams in financial services and healthcare organizations. We operate as a service provider on behalf of our customers, processing data under customer agreements (DPAs and BAAs). Our marketing website at withhandled.com collects minimal visitor data through analytics.
- Engage with us in other related ways, including any marketing or events

Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at privacy@withhandled.com.`

export const privacySummary = `This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.

**What personal information do we process?** When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.

**Do we process any sensitive personal information?** Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not directly collect sensitive personal information from visitors to our website. In our capacity as a service provider, we may process sensitive data categories (such as health or financial data) on behalf of our customers, as described in Section 13.

**Do we collect any information from third parties?** We do not collect any information from third parties.

**How do we process your information?** We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.

**In what situations and with which types of parties do we share personal information?** We may share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share your personal information.

**How do we keep your information safe?** We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.

**What are your rights?** Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.

**How do you exercise your rights?** The easiest way to exercise your rights is by emailing us at privacy@withhandled.com, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.

Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.`

export interface PrivacySubsection {
  heading: string
  inShort?: string
  content: string
}

export interface PrivacySection {
  number: number
  heading: string
  inShort?: string
  content: string
  subsections?: PrivacySubsection[]
  table?: {
    headers: string[]
    rows: string[][]
  }
  contentAfterTable?: string
}

export const privacySections: PrivacySection[] = [
  {
    number: 1,
    heading: 'What Information Do We Collect?',
    inShort: 'We collect personal information that you provide to us.',
    content: `We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:

- email addresses
- phone numbers
- names

Sensitive Information. We do not directly collect sensitive personal information from visitors to our website. In our capacity as a service provider to our customers, we may process data that includes sensitive categories (such as health information or financial data) as described in Section 13 (Data Processing on Behalf of Customers).

All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.`,
    subsections: [
      {
        heading: 'Information automatically collected',
        inShort: 'Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.',
        content: `We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

Like many businesses, we also collect information through cookies and similar technologies.

The information we collect includes:

- **Log and Usage Data.** Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
- **Device Data.** We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
- **Location Data.** We collect approximate location data based on your IP address. We do not collect precise geolocation data (such as GPS coordinates).`,
      },
    ],
  },
  {
    number: 2,
    heading: 'How Do We Process Your Information?',
    inShort: 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.',
    content: `We process your personal information for a variety of reasons, depending on how you interact with our Services, including:

- **To deliver and facilitate delivery of services to the user.** We may process your information to provide you with the requested service.
- **To respond to user inquiries/offer support to users.** We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
- **To protect our Services.** We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
- **To evaluate and improve our Services, products, marketing, and your experience.** We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
- **To identify usage trends.** We may process information about how you use our Services to better understand how they are being used so we can improve them.
- **To comply with our legal obligations.** We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.`,
  },
  {
    number: 3,
    heading: 'What Legal Bases Do We Rely On to Process Your Personal Information?',
    inShort: 'We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.',
    content: `If you are located in Canada, this section applies to you. We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.

In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:

- If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
- For investigations and fraud detection and prevention
- For business transactions provided certain conditions are met
- If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
- For identifying injured, ill, or deceased persons and communicating with next of kin
- If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
- If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
- If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
- If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
- If the collection is solely for journalistic, artistic, or literary purposes
- If the information is publicly available and is specified by the regulations
- We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments`,
  },
  {
    number: 4,
    heading: 'When and With Whom Do We Share Your Personal Information?',
    inShort: 'We may share information in specific situations described in this section and/or with the following categories of third parties.',
    content: `Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.

The categories of third parties we may share personal information with are as follows:

- Data Analytics Services
- Website Hosting Service Providers

We also may need to share your personal information in the following situations:

**Business Transfers.** We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.`,
  },
  {
    number: 5,
    heading: 'Do We Use Cookies and Other Tracking Technologies?',
    inShort: 'We may use cookies and other tracking technologies to collect and store your information.',
    content: `We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. We use these technologies for site analytics and to maintain the security and functionality of our Services. We do not use cookies for targeted advertising, and we do not serve third-party advertisements on our Services.`,
  },
  {
    number: 6,
    heading: 'Do We Offer Artificial Intelligence-Based Products?',
    inShort: 'We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.',
    content: `As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.

**Use of AI Technologies**

We provide the AI Products through third-party service providers ("AI Service Providers"), including Google Cloud AI, Anthropic, OpenAI, ElevenLabs, and Retell AI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "When and With Whom Do We Share Your Personal Information?" You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.

**Our AI Products**

Our AI Products are designed for the following functions:

- AI-powered work queue prioritization and signal detection
- AI-assisted document generation and workflow automation
- AI voice agent capabilities for customer and provider communications
- AI-driven analytics and insights
- Custom AI solutions developed for specific customer requirements

**How We Process Your Data Using AI**

All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.

Our AI Service Providers process data using zero-retention, inference-only configurations. No customer data is used for AI model training or fine-tuning unless explicitly authorized in writing by the applicable customer. We may use aggregated and de-identified data derived from use of the Services to improve the Services generally; such data does not identify any individual or customer.`,
  },
  {
    number: 7,
    heading: 'How Long Do We Keep Your Information?',
    inShort: 'We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.',
    content: `We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). We will not retain your personal information for longer than is necessary to fulfill the purposes described in this policy, or as required by applicable law or customer agreements.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.`,
  },
  {
    number: 8,
    heading: 'How Do We Keep Your Information Safe?',
    inShort: 'We aim to protect your personal information through a system of organizational and technical security measures.',
    content: `We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.`,
  },
  {
    number: 9,
    heading: 'Do We Collect Information from Minors?',
    inShort: 'We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.',
    content: `We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at privacy@withhandled.com.`,
  },
  {
    number: 10,
    heading: 'What Are Your Privacy Rights?',
    inShort: 'Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.',
    content: `In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below.

We will consider and act upon any request in accordance with applicable data protection laws.

**Withdrawing your consent:** If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below.

However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

**Opting out of marketing and promotional communications:** You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section "How Can You Contact Us About This Notice?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.

**Cookies and similar technologies:** Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.

If you have questions or comments about your privacy rights, you may email us at privacy@withhandled.com.`,
  },
  {
    number: 11,
    heading: 'Controls for Do-Not-Track Features',
    content: `Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.

California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.`,
  },
  {
    number: 12,
    heading: 'Do United States Residents Have Specific Privacy Rights?',
    inShort: 'If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.',
    content: `**Categories of Personal Information We Collect**

The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "What Information Do We Collect?"`,
    table: {
      headers: ['Category', 'Examples', 'Collected'],
      rows: [
        ['A. Identifiers', 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name', 'YES'],
        ['B. Personal information as defined in the California Customer Records statute', 'Name, contact information, education, employment, employment history, and financial information', 'YES'],
        ['C. Protected classification characteristics under state or federal law', 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', 'NO'],
        ['D. Commercial information', 'Transaction information, purchase history, financial details, and payment information', 'NO'],
        ['E. Biometric information', 'Fingerprints and voiceprints', 'NO'],
        ['F. Internet or other similar network activity', 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements', 'YES'],
        ['G. Geolocation data', 'Approximate location derived from IP address', 'YES'],
        ['H. Audio, electronic, sensory, or similar information', 'Images and audio, video or call recordings created in connection with our business activities', 'NO'],
        ['I. Professional or employment-related information', 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us', 'NO'],
        ['J. Education Information', 'Student records and directory information', 'NO'],
        ['K. Inferences drawn from collected personal information', "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics", 'NO'],
        ['L. Sensitive personal Information', '', 'NO'],
      ],
    },
    contentAfterTable: `We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:

- Receiving help through our customer support channels;
- Participation in customer surveys or contests; and
- Facilitation in the delivery of our Services and to respond to your inquiries.

We will use and retain the collected personal information as needed to provide the Services or for:

- Category A – As long as necessary to fulfill the purpose of collection or as required by law
- Category B – As long as necessary to fulfill the purpose of collection or as required by law
- Category F – 1 year
- Category G – 1 year

**Sources of Personal Information**

Learn more about the sources of personal information we collect in "What Information Do We Collect?"

**How We Use and Share Personal Information**

Learn more about how we use your personal information in the section, "How Do We Process Your Information?"

**Will your information be shared with anyone else?** We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, "When and With Whom Do We Share Your Personal Information?"

We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.

We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months.

We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:

- Category F. Internet or other similar network activity
- Category G. Geolocation data

The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "When and With Whom Do We Share Your Personal Information?"

**Your Rights**

You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:

- Right to know whether or not we are processing your personal data
- Right to access your personal data
- Right to correct inaccuracies in your personal data
- Right to request the deletion of your personal data
- Right to obtain a copy of the personal data you previously shared with us
- Right to non-discrimination for exercising your rights
- Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")

Depending upon the state where you live, you may also have the following rights:

- Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)
- Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)
- Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)
- Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)
- Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)
- Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)
- Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)

**How to Exercise Your Rights**

To exercise these rights, you can contact us by emailing us at privacy@withhandled.com, or by referring to the contact details at the bottom of this document.

Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.

**Request Verification**

Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.

If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.

**Appeals**

Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at privacy@withhandled.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.

**California "Shine The Light" Law**

California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "How Can You Contact Us About This Notice?"`,
  },
  {
    number: 13,
    heading: 'Data Processing on Behalf of Customers',
    content: `In addition to the limited data we collect through our website as described above, Handled AI operates as a service provider and data processor on behalf of our business customers. In this capacity, we process data — which may include personal information, financial data, and protected health information — solely as directed by our customers and in accordance with our agreements with them (including Data Processing Agreements and HIPAA Business Associate Agreements). If you are an end user of one of our customer's applications, your use of that application is governed by that customer's privacy policy, not this one. To exercise any data rights related to data processed on behalf of a customer, please contact that customer directly.`,
  },
  {
    number: 14,
    heading: 'Do We Make Updates to This Notice?',
    inShort: 'Yes, we will update this notice as necessary to stay compliant with relevant laws.',
    content: `We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.`,
  },
  {
    number: 15,
    heading: 'How Can You Contact Us About This Notice?',
    content: `If you have questions or comments about this notice, you may email us at privacy@withhandled.com or contact us by post at:

Handled AI, Inc.
3500 South DuPont Highway
Dover, DE 19901
United States`,
  },
  {
    number: 16,
    heading: 'How Can You Review, Update, or Delete the Data We Collect from You?',
    content: `Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please email us at privacy@withhandled.com.`,
  },
]
