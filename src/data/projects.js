// All project cards live here. Edit text, status or links in this file only;
// the components read from it. Groups render in the order listed.
//
// status: one of 'live' | 'enterprise' | 'dev' | 'prototype' | 'legacy' | 'inactive'
// links:  [{ label, href }]  (leave href '' to hide a link until it's ready)
// images: paths under /public, first image is the card thumbnail

export const projectGroups = [
  {
    id: 'enterprise',
    title: 'Enterprise',
    blurb: 'Large-scale systems built and run for a major public transit agency.',
    projects: [
      {
        id: 'draw',
        name: 'DRAW',
        tagline: 'Engineering drawing access & defect-repair workflow',
        status: 'enterprise',
        description:
          'An enterprise program for engineering-drawing access and defect-repair workflow with a large daily user base. Current work includes a modern DRAW Viewer — React/Vite, interactive station map, station search, a slide-in document panel and 20 document categories — alongside sustainment of the legacy application, server and database.',
        highlights: [
          'Modern DRAW Viewer in development',
          'Role-based access & audit logging (planned)',
          'Business-continuity alternate app for outages (proposed)',
          'Large-TIFF mobile delivery to prevent browser crashes (prototype)',
          'Migration support into an enterprise asset-management platform',
        ],
        stack: ['React', 'Vite', 'Legacy app/server/DB'],
        links: [],
        images: [],
      },
      {
        id: 'geodude',
        name: 'GEODUDE',
        tagline: 'Track geometry defect management',
        status: 'enterprise',
        description:
          'An NTSB-compliant track geometry defect management platform serving a subway track engineering division at significant scale — tracking geometry defects from detection through repair and compliance reporting.',
        highlights: ['NTSB-compliant defect tracking', 'Serves track engineering at system scale'],
        stack: [],
        links: [],
        images: [],
      },
    ],
  },
  {
    id: 'products',
    title: 'Live products',
    blurb: 'Shipped and in the hands of teachers.',
    projects: [
      {
        id: 'liveglossarypro',
        name: 'LiveGlossaryPro',
        tagline: 'Classroom vocabulary resource generator',
        status: 'live',
        description:
          'K–12 teachers upload a vocabulary CSV and get printable classroom resources — flashcards, quizzes, crosswords, word searches, study guides, bingo and vocabulary organizers — with no account required. Built as a React/Vite progressive web app with print formatting, teacher instructions and classroom customization, backed by teacher guides, word-list content and SEO/AEO work driven by an n8n content workflow.',
        origin:
          'LiveGlossaryPro grew out of Live Glossary, a PHP/MySQL glossary app I released as open source in 2008. Ideas like bulk term import from delimited files and printable glossary output became the core of today’s classroom resource generator.',
        highlights: [
          'Planned: MathJax/LaTeX for math vocabulary',
          'Planned: vocabulary puzzle-pieces format',
          'Planned: admin panel and UI refresh',
        ],
        stack: ['React', 'Vite', 'PWA', 'n8n'],
        links: [{ label: 'Visit liveglossarypro.com', href: 'https://liveglossarypro.com' }],
        images: [],
      },
      {
        id: 'vocab-bundles',
        name: 'Vocabulary Bundles',
        tagline: 'Classroom-ready resource packs on Teachers Pay Teachers',
        status: 'live',
        description:
          'A companion product line to LiveGlossaryPro: complete downloadable vocabulary bundles with worksheets, answer keys, teacher instructions, learning objectives and usage terms. The first bundle — Science: Ecosystems — is published and selling.',
        highlights: [
          'Coming next: Water Cycle & Weather',
          'Coming next: Forces & Energy',
          'Coming next: Plant Structures & Life Cycles',
        ],
        stack: ['Resource design', 'QA', 'Storefront & promo'],
        // TODO: paste your TPT store URL
        links: [{ label: 'Shop on Teachers Pay Teachers', href: '' }],
        images: [],
      },
    ],
  },
  {
    id: 'in-dev',
    title: 'In development',
    blurb: 'Being built right now.',
    projects: [
      {
        id: 'myvoice',
        name: 'MyVoice',
        tagline: 'Family communication app for kids and parents',
        status: 'dev',
        description:
          'A child/parent communication app on Firebase and Firestore. Supports multiple families with isolated family data and a separate child authentication system, cross-browser audio (with special care for Safari and iOS), and built-in feedback tools for pilot testing.',
        highlights: [
          'Improving audio reliability',
          'Family access & onboarding',
          'Iterating from pilot-test feedback',
        ],
        stack: ['Firebase', 'Firestore', 'Web Audio'],
        links: [],
        images: [],
      },
      {
        id: 'consist',
        name: 'Consist Commander',
        tagline: 'Rail-yard consist simulation (Consist Maker / Yardmaster)',
        status: 'dev',
        description:
          'A browser-based rail-yard game where players assemble train consists that satisfy real operating rules and equipment constraints. The design spec is complete and the TypeScript rules engine is passing 68 tests; tooling setup and gameplay are next.',
        highlights: ['Design spec complete', 'Rules engine: 68 passing tests', 'Next: gameplay'],
        stack: ['React', 'TypeScript', 'Zustand', 'dnd-kit', 'Tailwind'],
        links: [],
        images: [],
      },
    ],
  },
  {
    id: 'experiments',
    title: 'Experiments & infrastructure',
    blurb: 'Prototypes and the self-hosted stack that powers the rest.',
    projects: [
      {
        id: 'transit-viz',
        name: 'Transit Data Visualizations',
        tagline: 'Dashboards from public GTFS feeds',
        status: 'prototype',
        description:
          'Exploratory dashboards built on public GTFS and real-time transit feeds — a live train tracker, station “report cards,” and canvas-rendered system mapping.',
        highlights: ['Train tracker', 'Station report cards', 'Canvas-rendered maps'],
        stack: ['GTFS', 'Canvas'],
        links: [],
        images: [],
      },
      {
        id: 'self-hosted-ai',
        name: 'Self-Hosted AI & Automation',
        tagline: 'n8n + Ollama on a home server',
        status: 'live',
        description:
          'A self-hosted stack — n8n, FreshRSS, Ollama, Open WebUI and supporting services — for local AI, information processing and workflow automation. Its flagship is a Daily AI Digest that collects articles, summarizes them with a local model and emails a briefing every morning.',
        highlights: [
          'Daily AI Digest — operational',
          'LiveGlossaryPro SEO/AEO drafting & reports',
          'Workflow error alerts',
          'Art-agent pipeline (built; social posting on hold)',
          'Service & security monitoring',
        ],
        stack: ['n8n', 'Ollama', 'FreshRSS', 'Open WebUI', 'Unraid'],
        links: [],
        images: [],
      },
    ],
  },
  {
    id: 'archive',
    title: 'Archive',
    blurb: 'Earlier work that shaped what came after.',
    projects: [
      {
        id: 'live-glossary',
        name: 'Live Glossary',
        year: '2008',
        tagline: 'Open-source PHP/MySQL glossary engine (GPLv2)',
        status: 'legacy',
        description:
          'My first glossary engine: a web app for building and maintaining a shared glossary. Users browse, search and submit terms; submissions go through an admin review queue before going live. Admins can bulk-import terms from pipe-, tab- or comma-delimited files and export the whole glossary to a static HTML page with anchors. Add/edit forms use Ajax autocomplete.',
        note: 'Requires PHP 5 or earlier — it uses the original mysql_* functions removed in PHP 7.',
        highlights: [],
        stack: ['PHP', 'MySQL', 'Apache/IIS', 'Prototype / script.aculo.us'],
        links: [{ label: 'Download on SourceForge', href: 'https://sourceforge.net/projects/liveglossary/' }],
        images: [
          { src: '/projects/live-glossary/homepage.jpg', alt: 'Live Glossary homepage listing glossary terms' },
          { src: '/projects/live-glossary/search.jpg', alt: 'Live Glossary search results with highlighted matches' },
          { src: '/projects/live-glossary/admin.jpg', alt: 'Live Glossary admin queue to accept or reject entries' },
          { src: '/projects/live-glossary/import-file.jpg', alt: 'Live Glossary bulk import from a delimited file' },
        ],
      },
      {
        id: 'active-glossary',
        name: 'Active Glossary',
        tagline: 'Classroom vocabulary-learning platform',
        status: 'inactive',
        description:
          'A broader vocabulary-learning platform for teachers and students — glossary management, classroom organization, quizzes, games, assignments, student access controls and progress tracking. Planning covered an MVP spec, gap analysis, accessibility and architecture (latest: Next.js + Supabase). Some of its ideas now live on in LiveGlossaryPro.',
        highlights: [],
        stack: ['Next.js', 'Supabase'],
        links: [],
        images: [],
      },
    ],
  },
];

export const statusLabels = {
  live: 'Live',
  enterprise: 'Enterprise',
  dev: 'In development',
  prototype: 'Prototype',
  legacy: 'Legacy',
  inactive: 'Inactive',
};
