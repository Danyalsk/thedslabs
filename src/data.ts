import items from './capability-items.json' with { type: 'json' };

export type CapabilityId =
  | 'technology'
  | 'creative'
  | 'content'
  | 'marketing'
  | 'sales'
  | 'operations'
  | 'analytics'
  | 'automation'
  | 'physical';
export type Tone = 'teal' | 'blue' | 'amber';
export type View = 'ecosystem' | 'services' | 'ventures';
export interface Detail {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  items: string[];
  related: CapabilityId[];
  principle?: string;
  tone: Tone;
}
export interface Capability extends Detail {
  id: CapabilityId;
  shortLabel: string;
  summary: string;
  number: string;
}
export interface Phase extends Detail {
  shortLabel: string;
  summary: string;
}
export interface Outcome extends Detail {
  summary: string;
  views: View[];
}
export interface Pathway extends Detail {
  summary: string;
}

export const capabilities: Capability[] = [
  {
    id: 'technology',
    number: '01',
    label: 'Technology',
    shortLabel: 'Technology',
    summary: 'Build what the idea needs',
    eyebrow: 'Shared capability · 01',
    tone: 'teal',
    description:
      'Develop the software, products, and technology systems a problem requires, from a single website to a custom business platform.',
    items: items['1'],
    related: ['creative', 'automation', 'analytics'],
    principle: 'Technology is a capability. It is not the boundary of DSLabs.',
  },
  {
    id: 'creative',
    number: '02',
    label: 'Creative & design',
    shortLabel: 'Creative & design',
    summary: 'Give ideas their expression',
    eyebrow: 'Shared capability · 02',
    tone: 'blue',
    description:
      'Shape how a business looks, feels, and works through brand, product, experience, and creative production.',
    items: items['2'],
    related: ['technology', 'content', 'physical'],
    principle:
      'Design can connect a digital experience, a physical product, and the brand behind both.',
  },
  {
    id: 'content',
    number: '03',
    label: 'Content',
    shortLabel: 'Content',
    summary: 'Turn thinking into attention',
    eyebrow: 'Shared capability · 03',
    tone: 'blue',
    description:
      'Create the formats, stories, and content systems needed to explain an idea, build attention, and communicate a business or product.',
    items: items['3'],
    related: ['creative', 'marketing', 'sales'],
  },
  {
    id: 'marketing',
    number: '04',
    label: 'Marketing & growth',
    shortLabel: 'Marketing & growth',
    summary: 'Find and reach the customer',
    eyebrow: 'Shared capability · 04',
    tone: 'amber',
    description:
      'Understand who the customer is and reach them through the channels that make sense for the business, product, location, and objective.',
    items: items['4'],
    related: ['content', 'sales', 'analytics'],
    principle:
      'The customer and the objective determine the channel. There is no single fixed marketing playbook.',
  },
  {
    id: 'sales',
    number: '05',
    label: 'Sales',
    shortLabel: 'Sales',
    summary: 'Move from interest to customer',
    eyebrow: 'Shared capability · 05',
    tone: 'amber',
    description:
      'Support the entire journey from an initial lead to a customer relationship, including conversations, offers, onboarding, and retention.',
    items: items['5'],
    related: ['marketing', 'operations', 'automation'],
  },
  {
    id: 'operations',
    number: '06',
    label: 'Business operations & improvement',
    shortLabel: 'Operations & improvement',
    summary: 'Make the business work better',
    eyebrow: 'Shared capability · 06',
    tone: 'teal',
    description:
      'Study how a business runs, locate bottlenecks, and improve the processes and systems behind its everyday operation.',
    items: items['6'],
    related: ['sales', 'analytics', 'automation'],
    principle:
      'DSLabs can implement a solution or provide recommendations, depending on the client’s requirements and budget.',
  },
  {
    id: 'analytics',
    number: '07',
    label: 'Analytics & business intelligence',
    shortLabel: 'Analytics & intelligence',
    summary: 'Turn evidence into direction',
    eyebrow: 'Shared capability · 07',
    tone: 'blue',
    description:
      'Bring business data into focus, understand what is working and failing, and translate that understanding into priorities and decisions.',
    items: items['7'],
    related: ['marketing', 'operations', 'technology'],
    principle: 'Data → insight → decision → action.',
  },
  {
    id: 'automation',
    number: '08',
    label: 'AI & automation',
    shortLabel: 'AI & automation',
    summary: 'Create capacity to scale',
    eyebrow: 'Shared capability · 08',
    tone: 'teal',
    description:
      'Use AI and automation to reduce repetitive work and build scalable systems, including business-specific solutions and reusable products.',
    items: items['8'],
    related: ['technology', 'operations', 'sales'],
    principle:
      'Understand the manual process first. Identify what actually needs automation. Then build the appropriate solution.',
  },
  {
    id: 'physical',
    number: '09',
    label: 'Physical world',
    shortLabel: 'Physical world',
    summary: 'Build beyond the digital',
    eyebrow: 'Shared capability · 09',
    tone: 'amber',
    description:
      'Explore meaningful opportunities in physical products, brands, events, retail, automotive, and other legitimate industries.',
    items: items['9'],
    related: ['creative', 'operations', 'marketing'],
    principle:
      'Execute directly where appropriate, and coordinate external specialists, vendors, manufacturers, or partners when needed.',
  },
];

export const opportunities: Detail[] = [
  {
    id: 'problems',
    label: 'Problems worth solving',
    eyebrow: 'Opportunity source',
    description:
      'Start with a meaningful problem. Understand it before committing to a particular solution, technology, or industry.',
    items: ['Understand the problem', 'Research the context', 'Validate the opportunity'],
    related: ['analytics', 'operations'],
    tone: 'teal',
  },
  {
    id: 'needs',
    label: 'Customer needs',
    eyebrow: 'Opportunity source',
    description:
      'Study what customers need, where existing experiences fall short, and which problems are worth solving.',
    items: ['Customer identification', 'Audience research', 'Feedback analysis'],
    related: ['marketing', 'analytics', 'creative'],
    tone: 'teal',
  },
  {
    id: 'markets',
    label: 'A market gap',
    eyebrow: 'Opportunity source',
    description:
      'Explore markets, competitors, customer problems, and execution gaps. An existing successful business can reveal an opportunity to build a better competing solution.',
    items: ['Market research', 'Competitor research', 'Execution gaps', 'Solution validation'],
    related: ['marketing', 'analytics', 'technology'],
    tone: 'teal',
  },
  {
    id: 'existing',
    label: 'Existing businesses',
    eyebrow: 'Opportunity source',
    description:
      'Work directly with an existing business to identify and assemble the capabilities it needs to improve, modernize, market, sell, and grow.',
    items: [
      'Business problem solving',
      'Growth opportunities',
      'Operational improvements',
      'Implementation or recommendations',
    ],
    related: ['operations', 'marketing', 'sales', 'automation'],
    tone: 'teal',
  },
  {
    id: 'recurring',
    label: 'Recurring challenges',
    eyebrow: 'Opportunity source',
    description:
      'A service project may expose a recurring problem. Investigate whether the solution can serve other customers and become a reusable product or business.',
    items: ['Service project', 'Recurring problem', 'Reusable solution', 'Product potential'],
    related: ['operations', 'technology', 'automation'],
    tone: 'teal',
  },
  {
    id: 'emerging-tech',
    label: 'Interesting technology',
    eyebrow: 'Opportunity source',
    description:
      'Investigate what an interesting technology makes possible, then connect that possibility to a real customer need.',
    items: [
      'Explore the technology',
      'Understand the customer need',
      'Validate a useful application',
    ],
    related: ['technology', 'automation', 'analytics'],
    tone: 'blue',
  },
  {
    id: 'behaviour',
    label: 'An emerging behaviour',
    eyebrow: 'Opportunity source',
    description:
      'Notice how people and businesses are changing. Research the needs and opportunities that emerge from new behaviours.',
    items: ['Audience research', 'Customer behaviour', 'Market validation'],
    related: ['marketing', 'content', 'analytics'],
    tone: 'amber',
  },
  {
    id: 'idea',
    label: 'An idea worth testing',
    eyebrow: 'Opportunity source',
    description:
      'Turn an interesting idea into a testable question. Research it, validate the need, and build a solution if the evidence supports it.',
    items: ['Research', 'Validation', 'MVP / solution'],
    related: ['creative', 'technology', 'analytics'],
    tone: 'blue',
  },
  {
    id: 'not-yet',
    label: 'Something that doesn’t exist. Yet.',
    eyebrow: 'Opportunity source',
    description:
      'Explore unmet needs and possibilities beyond existing categories. Start with a meaningful opportunity and find out what should exist.',
    items: ['Opportunity identification', 'Customer needs', 'Solution design', 'Validation'],
    related: ['creative', 'physical', 'technology'],
    tone: 'amber',
  },
];

export const outcomes: Outcome[] = [
  {
    id: 'improvements',
    label: 'Client solutions',
    summary: 'Client improvements & growth',
    eyebrow: 'Possible outcome · client services',
    description:
      'Help an existing business work better and grow through the combination of capabilities its situation requires.',
    items: [
      'Better processes and systems',
      'Clearer decisions',
      'Customer acquisition and retention',
      'Business growth',
    ],
    related: ['operations', 'marketing', 'sales', 'analytics'],
    tone: 'blue',
    views: ['services'],
  },
  {
    id: 'solutions',
    label: 'Reusable solutions',
    summary: 'Systems that solve repeat needs',
    eyebrow: 'Possible outcome · shared value',
    description:
      'Turn a recurring need into a reusable solution that can support multiple businesses and may develop into an owned product.',
    items: ['Reusable automation', 'Generalized systems', 'Repeatable solutions'],
    related: ['technology', 'automation', 'operations'],
    tone: 'blue',
    views: ['services', 'ventures'],
  },
  {
    id: 'products',
    label: 'Owned products',
    summary: 'Software, platforms & products',
    eyebrow: 'Possible outcome · venture creation',
    description:
      'Research, validate, build, launch, and grow products owned by DSLabs when a meaningful opportunity is identified.',
    items: [
      'SaaS products',
      'AI products and systems',
      'Custom technology solutions',
      'Physical products',
      'Product brands',
      'Merchandise',
      'Other products',
    ],
    related: ['technology', 'creative', 'marketing', 'physical'],
    tone: 'amber',
    views: ['ventures'],
  },
  {
    id: 'businesses',
    label: 'New businesses',
    summary: 'An opportunity with a life of its own',
    eyebrow: 'Possible outcome · venture creation',
    description:
      'A validated opportunity can become an independent business operating under the DSLabs umbrella, with its own focus and a team assembled around what it needs.',
    items: [
      'Validated opportunity',
      'Business model',
      'Dedicated opportunity team',
      'Operations under the DSLabs umbrella',
    ],
    related: ['operations', 'sales', 'analytics', 'physical'],
    tone: 'amber',
    views: ['ventures'],
  },
  {
    id: 'ventures',
    label: 'New ventures',
    summary: 'Businesses under the umbrella',
    eyebrow: 'Possible outcome · future structure',
    description:
      'Grow a validated opportunity into a business or company under DSLabs. Individual products, teams, and ventures can evolve while the parent company remains the constant.',
    items: [
      'Opportunity-based teams',
      'Evolving products and businesses',
      'New companies under DSLabs',
      'Open-ended industries',
    ],
    related: ['operations', 'sales', 'analytics', 'physical'],
    tone: 'amber',
    views: ['ventures'],
    principle:
      'These are potential outcomes, not a claim of current holdings, company size, or achievements.',
  },
];

export const phases: Phase[] = [
  {
    id: 'discover',
    label: 'Discover',
    shortLabel: 'Discover',
    summary: 'Problem → understanding',
    eyebrow: 'Business creation engine · 01',
    description:
      'Find an opportunity and understand the real problem, the customer need, and the market around it.',
    items: [
      'Problem identification',
      'Research',
      'Customer need',
      'Market and competitor understanding',
    ],
    related: ['marketing', 'analytics', 'operations'],
    tone: 'teal',
  },
  {
    id: 'validate',
    label: 'Validate',
    shortLabel: 'Validate',
    summary: 'Evidence → business model',
    eyebrow: 'Business creation engine · 02',
    description:
      'Validate whether the opportunity is worth pursuing and plan a business model and solution around the evidence.',
    items: ['Validation', 'Strategy', 'Business model', 'Planning', 'Prioritization'],
    related: ['analytics', 'sales', 'operations'],
    tone: 'teal',
  },
  {
    id: 'build',
    label: 'Design & build',
    shortLabel: 'Design & build',
    summary: 'Idea → working solution',
    eyebrow: 'Business creation engine · 03',
    description:
      'Translate the opportunity into an MVP or solution. Assemble the design, technology, physical, and external capabilities needed to build it.',
    items: ['MVP / solution', 'Design', 'Build', 'Specialist coordination when required'],
    related: ['creative', 'technology', 'physical', 'automation'],
    tone: 'blue',
  },
  {
    id: 'launch',
    label: 'Launch & sell',
    shortLabel: 'Launch & sell',
    summary: 'Solution → customers',
    eyebrow: 'Business creation engine · 04',
    description:
      'Bring the solution to market, communicate its value, reach the right customers, and support the sales journey.',
    items: ['Launch', 'Marketing', 'Content', 'Sales', 'Customer onboarding'],
    related: ['marketing', 'content', 'sales', 'creative'],
    tone: 'blue',
  },
  {
    id: 'improve',
    label: 'Operate & improve',
    shortLabel: 'Operate & improve',
    summary: 'Feedback → better systems',
    eyebrow: 'Business creation engine · 05',
    description:
      'Run the business, measure performance, learn from feedback, and improve the systems behind it. Automate appropriate work after understanding the manual process.',
    items: ['Operations', 'Analytics', 'Measurement', 'Feedback', 'Improvement', 'Automation'],
    related: ['operations', 'analytics', 'automation'],
    tone: 'amber',
  },
  {
    id: 'scale',
    label: 'Grow & scale',
    shortLabel: 'Grow & scale',
    summary: 'Business → larger venture',
    eyebrow: 'Business creation engine · 06',
    description:
      'Use evidence to grow the business, expand operational capacity, and develop the opportunity into a larger venture under DSLabs.',
    items: ['Growth', 'Scale', 'Resource allocation', 'Evolving teams and ventures'],
    related: ['marketing', 'sales', 'operations', 'analytics'],
    tone: 'amber',
    principle:
      'Learning returns to research. This is an iterative engine, not a one-way checklist.',
  },
];

export const pathway: Pathway[] = [
  {
    id: 'path-service',
    label: 'Service project',
    summary: 'Solve a real need',
    eyebrow: 'Service-to-venture pathway · 01',
    description:
      'Work with an existing business to solve a specific problem using the capabilities the project needs.',
    items: [
      'Understand requirements and budget',
      'Assemble relevant capabilities',
      'Implement or recommend',
    ],
    related: ['operations', 'marketing', 'technology'],
    tone: 'teal',
  },
  {
    id: 'path-problem',
    label: 'Recurring problem',
    summary: 'Recognize the pattern',
    eyebrow: 'Service-to-venture pathway · 02',
    description:
      'A project can reveal a problem shared by other businesses. Research and validate that recurring need.',
    items: ['Identify repeat needs', 'Research other customers', 'Validate the opportunity'],
    related: ['analytics', 'marketing'],
    tone: 'teal',
  },
  {
    id: 'path-solution',
    label: 'Reusable solution',
    summary: 'Make it repeatable',
    eyebrow: 'Service-to-venture pathway · 03',
    description:
      'Develop a solution that can solve the recurring problem beyond its original project.',
    items: ['Reusable systems', 'Generalized automation', 'Solution development'],
    related: ['technology', 'automation', 'creative'],
    tone: 'blue',
  },
  {
    id: 'path-product',
    label: 'Product',
    summary: 'Build for a market',
    eyebrow: 'Service-to-venture pathway · 04',
    description:
      'Turn a reusable solution into an owned product with a validated customer need and business model.',
    items: ['Business model', 'Product design', 'Launch', 'Marketing and sales'],
    related: ['creative', 'technology', 'marketing', 'sales'],
    tone: 'blue',
  },
  {
    id: 'path-business',
    label: 'Business',
    summary: 'Operate and grow',
    eyebrow: 'Service-to-venture pathway · 05',
    description:
      'Build the operational, sales, and feedback systems that allow a product to develop into a functioning and growing business.',
    items: ['Operations', 'Customer relationships', 'Analytics', 'Growth'],
    related: ['operations', 'sales', 'analytics'],
    tone: 'amber',
  },
  {
    id: 'path-venture',
    label: 'DSLabs venture',
    summary: 'Scale under the umbrella',
    eyebrow: 'Service-to-venture pathway · 06',
    description:
      'A business can become a larger venture within DSLabs, supported by shared capabilities and an opportunity-based team.',
    items: ['Scale', 'Opportunity-based team', 'Shared capabilities', 'DSLabs parent company'],
    related: ['operations', 'analytics', 'marketing'],
    tone: 'amber',
    principle:
      'A possible progression, not an automatic outcome or a claim about existing ventures.',
  },
];

export const parent: Detail = {
  id: 'parent',
  label: 'DSLabs',
  eyebrow: 'The constant at the center',
  description:
    'An opportunity-driven parent company designed to move from an idea or problem all the way to a functioning and growing business.',
  items: [
    'Find opportunities',
    'Understand problems',
    'Build solutions',
    'Grow existing businesses',
    'Create products and new ventures',
  ],
  related: capabilities.map((c) => c.id),
  tone: 'teal',
  principle:
    'Industries, products, businesses, and teams can evolve. DSLabs remains the connecting entity.',
};
export const partners: Detail = {
  id: 'partners',
  label: 'Capability beyond the core',
  eyebrow: 'Extended execution network',
  description:
    'When a specialized task needs capabilities outside the current team, DSLabs can find the right people and coordinate the work.',
  items: [
    'Specialists',
    'Vendors',
    'Manufacturers',
    'Partners',
    'External production capabilities',
  ],
  related: ['physical', 'technology', 'creative', 'operations'],
  tone: 'teal',
  principle:
    'The conceptual model is designed to scale beyond current team size, resources, or internal skills.',
};

export const views: Record<View, { label: string; caption: string; active: CapabilityId[] }> = {
  ecosystem: {
    label: 'Ecosystem',
    caption: 'Shared capabilities. Connected execution. Open-ended possibilities.',
    active: [],
  },
  services: {
    label: 'Client services',
    caption: 'Help existing businesses improve, modernize, sell, and grow.',
    active: ['technology', 'marketing', 'sales', 'operations', 'analytics', 'automation'],
  },
  ventures: {
    label: 'Venture creation',
    caption: 'Turn validated opportunities into owned products and businesses.',
    active: ['technology', 'creative', 'content', 'marketing', 'physical'],
  },
};

export const teamExamples: {
  id: string;
  label: string;
  description: string;
  capabilities: CapabilityId[];
}[] = [
  {
    id: 'software',
    label: 'A software product',
    description:
      'An opportunity team could bring together technology, design, and growth to take a software product from concept to market.',
    capabilities: ['technology', 'creative', 'marketing', 'analytics'],
  },
  {
    id: 'business',
    label: 'An existing business',
    description:
      'An opportunity team could improve a client’s operations, customer acquisition, sales, and repetitive workflows.',
    capabilities: ['operations', 'marketing', 'sales', 'automation'],
  },
  {
    id: 'physical-team',
    label: 'A physical product',
    description:
      'An opportunity team could combine product design, external manufacturing, marketing, and operations to build a physical brand.',
    capabilities: ['physical', 'creative', 'marketing', 'operations'],
  },
  {
    id: 'research',
    label: 'A new opportunity',
    description:
      'An opportunity team could research a market, understand customer problems, and validate where a better solution could create value.',
    capabilities: ['marketing', 'analytics', 'operations'],
  },
  {
    id: 'company',
    label: 'A new company',
    description:
      'An opportunity team could build and operate a new company, assembling the capabilities its particular market and business model require.',
    capabilities: ['operations', 'technology', 'sales', 'analytics'],
  },
  {
    id: 'venture-team',
    label: 'An evolving venture',
    description:
      'An opportunity team could improve an existing venture, using customer feedback, operational insight, and automation to support its next stage of growth.',
    capabilities: ['operations', 'analytics', 'automation', 'marketing'],
  },
];

export const engineSteps = [
  'Opportunity',
  'Research',
  'Validation',
  'Strategy',
  'Design',
  'Build',
  'Launch',
  'Marketing',
  'Sales',
  'Operations',
  'Analytics',
  'Automation',
  'Growth',
  'Scale',
];

export const allDetails: Detail[] = [
  ...capabilities,
  ...opportunities,
  ...outcomes,
  ...phases,
  ...pathway,
  parent,
  partners,
];
