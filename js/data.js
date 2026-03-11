/**
 * data.js — All hardcoded site content in one place.
 * Update text, links, and lists here without touching HTML or CSS.
 */

const SITE = {

  /* ── Brand ── */
  brand: {
    name:    'CHIVAM',
    suffix:  'SERVICES',
    sub:     'IT Consulting',
    email:   'hello@nexatechconsulting.com',
    phone:   '+1 (555) 123-4567',
    year:    '2026',
  },

  /* ── Navigation ── */
  nav: [
    { label: 'Home',     href: 'index.html',    pageFile: 'index.html'    },
    { label: 'About',    href: 'about.html',    pageFile: 'about.html'    },
    { label: 'Services', href: 'services.html', pageFile: 'services.html' },
    { label: 'Blog',     href: 'blog.html',     pageFile: 'blog.html'     },
    { label: 'Contact',  href: 'contact.html',  pageFile: 'contact.html'  },
  ],
  navCta: { label: 'Free Consultation', href: 'contact.html' },

  /* ── Hero ── */
  hero: {
    eyebrow:  'IT Consulting Excellence',
    headline: 'Technology That <em>Works</em><br>for Your Business',
    sub:      'We partner with growing businesses to deliver tailored IT strategies, managed services, and digital transformation — so your technology drives results, not frustration.',
    ctas: [
      { label: 'Get a Free Consultation →', href: 'contact.html', style: 'btn-gold'    },
      { label: 'Explore Services',          href: 'services.html', style: 'btn-outline' },
    ],
    stats: [
      { n: '200+', l: 'Clients Served'    },
      { n: '98%',  l: 'Client Retention'  },
      { n: '15+',  l: 'Years Experience'  },
    ],
    card: {
      label:    'Our Core Services',
      services: [
        'IT Strategy & Consulting',
        'Managed IT Services',
        'Cybersecurity Solutions',
        'Cloud Migration & Support',
        'Digital Transformation',
        'Custom Software Development',
        'Staff Augmentation',
        'IT Training & Placement',
      ],
      metric: { value: '98%', label: 'Average satisfaction score', heading: 'Client Satisfaction' },
    },
  },

  /* ── About ── */
  about: {
    eyebrow:  'Who We Are',
    heading:  'People-First IT Consulting',
    body: [
      'We\'re a team of experienced IT professionals who believe technology should empower your team — not slow them down. Founded on the principle that great IT consulting should be accessible, transparent, and results-driven, we partner with businesses at every stage of their growth.',
      'From start-ups navigating their first IT strategy to established enterprises pursuing digital transformation, we bring Fortune-500-level expertise with the personability of a dedicated local partner.',
    ],
    cta: { label: 'Work With Us →', href: 'contact.html' },
    features: [
      { icon: '⚡', title: 'Fast Response Times',    body: 'We respond within hours, not days. Your business can\'t afford to wait — and neither can we.' },
      { icon: '🎯', title: 'Tailored Solutions',      body: 'No cookie-cutter packages. Every engagement is scoped around your unique business needs.'    },
      { icon: '🛡️', title: 'Proven Track Record',    body: '200+ successful engagements across industries — with measurable outcomes and long-term relationships.' },
      { icon: '🌐', title: 'Global Reach, Local Focus', body: 'Operating across India, US, UK, and beyond — international expertise with dedicated local support.' },
    ],
  },

  /* ── Services ── */
  services: {
    eyebrow: 'What We Do',
    heading: 'Our Services &amp; Offerings',
    sub:     'Comprehensive IT consulting designed to align your technology with your business goals — from strategy to implementation and beyond.',
    cta:     { label: 'Request a Proposal →', href: 'contact.html' },
    items: [
      { icon: '📊', title: 'IT Strategy &amp; Consulting', body: 'Build a clear technology roadmap aligned with your goals — so every IT investment drives real competitive advantage.' },
      { icon: '🖥️', title: 'Managed IT Services',         body: 'Fully managed IT support, monitoring, and maintenance so your team stays productive and systems stay secure, 24/7.' },
      { icon: '🔒', title: 'Cybersecurity',               body: 'End-to-end security assessments, compliance frameworks, and incident response planning to protect your business.' },
      { icon: '☁️', title: 'Cloud Solutions',             body: 'Seamless cloud migration, architecture design, and ongoing management across AWS, Azure, and Google Cloud.' },
      { icon: '🔄', title: 'Digital Transformation',      body: 'Reimagine your business with automation, AI, and modern platforms — accelerating efficiency and new revenue.' },
      { icon: '💻', title: 'Custom Software Dev',         body: 'Bespoke web apps, mobile solutions, and enterprise software built with clean architecture and long-term maintainability.' },
      { icon: '🏗️', title: 'IT Infrastructure',          body: 'Design, deployment, and management of your IT infrastructure — from network architecture to helpdesk support.' },
      { icon: '👥', title: 'Staff Augmentation',          body: 'Scale your technical team on demand with vetted developers, engineers, and IT specialists on any basis.' },
      { icon: '🎓', title: 'IT Training &amp; Placement', body: 'Upskill your workforce with structured training programmes and access our talent placement network.' },
    ],
  },

  /* ── Why Us ── */
  why: {
    eyebrow: 'Why NexaTech',
    heading: 'Expertise You Can <em>Trust</em>',
    reasons: [
      { n: '01', title: 'Outcome-Driven Engagements', body: 'We don\'t just deliver projects — we deliver measurable outcomes mapped to verified business results.' },
      { n: '02', title: 'Transparent Pricing',        body: 'Detailed, honest proposals with no surprises — you always know what you\'re getting and why it matters.' },
      { n: '03', title: 'Fully Managed Service',      body: 'Proactive monitoring, updates, and reporting are all handled before you even know there\'s an issue.' },
      { n: '04', title: 'Multi-Region Expertise',     body: 'Teams across India, UK, USA and beyond — global capability with 24/7 coverage and local delivery.' },
    ],
    stats: [
      { n: '200+',       l: 'Clients Served',    span: 1 },
      { n: '98%',        l: 'Retention Rate',     span: 1 },
      { n: '15+',        l: 'Years Experience',   span: 1 },
      { n: '24/7',       l: 'Support Coverage',   span: 1 },
      { n: '6 Countries', l: 'India · USA · UK · Australia · Canada · UAE', span: 2, small: true },
    ],
  },

  /* ── Process ── */
  process: {
    eyebrow: 'How We Work',
    heading: 'Our Proven Process',
    sub:     'A clear, collaborative engagement model built around your outcomes — from first conversation to long-term partnership.',
    steps: [
      { n: '01', title: 'Discover',   body: 'Deep-dive workshops and stakeholder interviews to understand your business, challenges, and IT environment.' },
      { n: '02', title: 'Plan',       body: 'A clear, costed roadmap with milestones, risk mitigation, and expected outcomes mapped to your objectives.' },
      { n: '03', title: 'Implement',  body: 'Expert execution with regular check-ins, transparent reporting, and zero disruption to your operations.' },
      { n: '04', title: 'Support',    body: 'Long-term IT partnership — monitoring, optimising, and evolving your technology as your business grows.' },
    ],
  },

  /* ── Testimonials ── */
  testimonials: {
    eyebrow: 'Client Stories',
    heading: 'What Our Clients Say',
    sub:     'Don\'t just take our word for it — hear from businesses we\'ve helped transform.',
    items: [
      { initials: 'SM', name: 'Sarah Mitchell', role: 'CEO, Apex Logistics Group',         quote: 'NexaTech completely transformed our IT infrastructure. We went from constant outages to near-zero downtime in under three months. Their team was responsive, knowledgeable, and genuinely invested in our success.' },
      { initials: 'RK', name: 'Ravi Kumar',     role: 'CTO, Pinnacle Healthcare Systems',  quote: 'The cloud migration was handled flawlessly — zero data loss, minimal disruption, costs dropped by 35%. What really set them apart was explaining every decision in plain language, not jargon.' },
      { initials: 'JT', name: 'James Thornton', role: 'Director of IT, Greenfield Financial', quote: 'We brought NexaTech in for a cybersecurity audit and ended up overhauling our entire security posture. Their team identified vulnerabilities we didn\'t even know existed. Invaluable peace of mind.' },
    ],
  },

  /* ── Blog ── */
  blog: {
    eyebrow: 'Insights &amp; Expertise',
    heading: 'Latest from the Blog',
    sub:     'Thought leadership, practical guides, and industry insights from our team of IT professionals.',
    cta:     { label: 'View All Articles →', href: 'blog.html' },
    posts: [
      { tag: 'Cybersecurity', bg: '',                                        date: 'Mar 5, 2026',  read: '7 min read', title: 'Cybersecurity Tips Every Small Business Needs in 2026',         excerpt: 'Cyber threats are evolving faster than ever. Here are the foundational security practices every business should have in place right now.' },
      { tag: 'Cloud',         bg: 'background:linear-gradient(135deg,#1a1a2e,#16213e)', date: 'Feb 20, 2026', read: '9 min read', title: 'A Practical Cloud Migration Guide for Small Business Owners',      excerpt: 'Thinking about moving to the cloud? This step-by-step guide breaks down what to expect, what to avoid, and how to choose the right platform.' },
      { tag: 'IT Strategy',   bg: 'background:linear-gradient(135deg,#0f2027,#203a43)', date: 'Feb 8, 2026',  read: '6 min read', title: 'How to Choose an IT Consultant: 7 Questions to Ask First',          excerpt: 'Not all IT consultants are equal. Before you commit, make sure you\'re asking these seven critical questions during the evaluation process.' },
    ],
  },

  /* ── CTA Banner ── */
  ctaBanner: {
    heading: 'Ready to <em>Transform</em> Your IT?',
    sub:     'Let\'s have a no-obligation conversation about your technology challenges. We typically respond within 1 business day.',
    ctas: [
      { label: 'Book a Free Consultation →', href: 'contact.html',  style: 'btn-gold'    },
      { label: 'View Services',              href: 'services.html', style: 'btn-outline'  },
    ],
  },

  /* ── Contact ── */
  contact: {
    eyebrow: 'Get In Touch',
    heading: 'Let\'s Talk',
    sub:     'Fill in the form and we\'ll be in touch within one business day — no sales pressure, just an honest conversation.',
    infoHeading: 'We\'re Here When You Need Us',
    infoBody:    'Whether dealing with an urgent IT issue, exploring a new project, or simply wanting to understand your options — our team is ready for an honest, helpful conversation.',
    details: [
      { icon: '📧', text: 'hello@nexatechconsulting.com' },
      { icon: '📞', text: '+1 (555) 123-4567'            },
      { icon: '⏱️', text: 'Response within 1 business day' },
      { icon: '🌐', text: 'Serving clients globally across 6 countries' },
    ],
    serviceOptions: [
      'IT Strategy & Consulting',
      'Managed IT Services',
      'Cybersecurity',
      'Cloud Solutions',
      'Digital Transformation',
      'Custom Software Development',
      'IT Infrastructure & Support',
      'Staff Augmentation',
      'IT Training & Placement',
      'Immigration & Visa Consultations',
      'Other / Not Sure',
    ],
  },

  /* ── Footer ── */
  footer: {
    desc: 'Expert IT consulting for growing businesses — strategy, managed services, cybersecurity, and digital transformation.',
    socials: [
      { label: 'LinkedIn',  symbol: 'in' },
      { label: 'Twitter',   symbol: '𝕏'  },
      { label: 'Facebook',  symbol: 'f'  },
      { label: 'Instagram', symbol: 'ig' },
    ],
    cols: [
      {
        heading: 'Services',
        links: [
          { label: 'IT Strategy & Consulting', href: 'services.html' },
          { label: 'Managed IT Services',      href: 'services.html' },
          { label: 'Cybersecurity',            href: 'services.html' },
          { label: 'Cloud Solutions',          href: 'services.html' },
          { label: 'Digital Transformation',   href: 'services.html' },
          { label: 'Custom Software Dev',      href: 'services.html' },
          { label: 'Staff Augmentation',       href: 'services.html' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About Us',        href: 'about.html'    },
          { label: 'Services',        href: 'services.html' },
          { label: 'Blog',            href: 'blog.html'     },
          { label: 'Contact',         href: 'contact.html'  },
          { label: 'Careers',         href: '#'         },
          { label: 'Privacy Policy',  href: '#'         },
          { label: 'Terms of Service',href: '#'         },
        ],
      },
      {
        heading: 'Contact',
        links: [
          { label: 'hello@nexatechconsulting.com', href: '#'                },
          { label: '+1 (555) 123-4567',            href: 'tel:+15551234567' },
          { label: 'Book a Consultation',          href: 'contact.html'         },
        ],
        subHeading: 'Offices',
        subLinks: [
          { label: 'Visakhapatnam', href: '#' },
          { label: 'Hyderabad',     href: '#' },
          { label: 'Bangalore',     href: '#' },
          { label: 'Pune',          href: '#' },
          { label: 'Noida',         href: '#' },
        ],
      },
    ],
    legal: [
      { label: 'Privacy Policy',  href: '#' },
      { label: 'Terms of Service',href: '#' },
      { label: 'Cookie Policy',   href: '#' },
    ],
  },

  /* ── Ticker rows (rotating) ── */
  ticker: [
    {
      label: '🏆 Achievements',
      items: [
        '🚀 120+ Projects Delivered',
        '🌍 Clients in 8 Countries',
        '💼 10+ Years in IT Consulting',
        '⭐ 95% Client Retention',
        '🔐 Security-First Solutions',
      ],
    },
    {
      label: '⚙️ Core Strengths',
      items: [
        'AI Solutions',
        'Cloud Architecture',
        'Kubernetes',
        'DevOps',
        'Microservices',
        'Machine Learning',
        'Data Engineering',
      ],
    },
    {
      label: '✅ Client Benefits',
      items: [
        '⚡ Faster Deployment',
        '🔐 Enterprise Security',
        '📈 Scalable Solutions',
        '💰 Cost-Optimized Infrastructure',
        '🤝 Dedicated Support',
      ],
    },
  ],

};
