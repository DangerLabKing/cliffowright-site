// Site copy, Now list, Art, Blog and Useful Stuff.
// Items marked TODO need your real content.

export const site = {
  name: 'Cliff Wright',
  intro:
    'I’m Cliff, an artist, technologist and builder in West Orange, New Jersey. For 30+ years I’ve built and kept running the enterprise systems a major public transit agency depends on every day. The rest of my time goes to classroom tools teachers actually use, a rail-yard game, a home lab that writes my morning news, and drawings that start in a sketchbook.',
  links: [
    { label: 'Instagram', href: 'https://instagram.com/draw_wright_ai' },
    { label: 'LiveGlossaryPro', href: 'https://liveglossarypro.com' },
    { label: 'SourceForge', href: 'https://sourceforge.net/u/dangercow/profile/' },
    { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/cliffowright' },
    // TODO: add GitHub / LinkedIn if you want them public
  ],
};

// "Now" — what's on the bench this month. Update whenever it changes.
export const now = {
  updated: 'November 2026',
  items: [
    { project: 'MyVoice', text: 'making audio recording reliable on Safari and iOS for the pilot families.' },
    { project: 'Consist Commander', text: 'rules engine is passing 68 tests; starting on gameplay.' },
    { project: 'LiveGlossaryPro', text: 'adding MathJax so math vocabulary prints properly.' },
    { project: 'cliffowright.com', text: 'you’re looking at it.' },
  ],
};

// "Where it started" block in the hero. Signatures are scribbled out in the image.
export const origin = {
  png: '/about/school-id.png',
  webp: '/about/school-id.webp',
  alt: 'Cliff Wright’s student ID card from Cornwall College, 1987, with both signatures scribbled out in orange pencil',
  caption: 'My student ID from Cornwall College, 1987.', // TODO: add a line in your own words
};

// Art: 9 slots. Drop images into /public/art/ and set `src`.
// Desktop layout is set by grid-template-areas in styles.css (keyed by id).
// size only affects phones: 'wide' tiles span both columns.
export const art = [
  { id: 'comics', title: 'Comics', caption: 'instaSpace panels', src: '', size: 'wide' },
  { id: 'people', title: 'People Art', caption: 'Portraits and figures', src: '' },
  { id: 'logos', title: 'Logos', caption: 'Marks and identities', src: '' },
  { id: 'flyers', title: 'Flyers', caption: 'Events and small businesses', src: '' },
  { id: 'characters', title: 'Characters', caption: 'Original designs', src: '' },
  { id: 'sketches', title: 'Sketches', caption: 'Where it all starts', src: '' },
  { id: 'promos', title: 'Product Promos', caption: 'Graphics for my classroom bundles', src: '' },
  { id: 'digital', title: 'Digital Paintings', caption: 'Finished AI-assisted pieces', src: '', size: 'wide' },
  { id: 'social', title: 'Social Posts', caption: 'Carousels and short visuals', src: '', size: 'wide' },
];

// Blog: planned posts carried over from the old site.
// A post shows "Coming soon" until you give it an href; then the title becomes a link.
// When you publish one, also change `date` to the real publish date.
export const posts = [
  {
    title: 'Vibe Coding Is Real, but It Still Needs an Engineer',
    tags: ['Vibe coding'],
    minutes: 7,
    summary: 'AI can write the first draft of your app in an afternoon. Here is what it takes to get that draft into production without regrets.',
    date: '',
    href: '',
  },
  {
    title: 'Migrating a 20-Year-Old System Without Breaking Production',
    tags: ['Legacy modernization'],
    minutes: 11,
    summary: 'Lessons from modernizing systems that thousands of people rely on every day, and why big-bang rewrites almost never work.',
    date: '',
    href: '',
  },
  {
    title: 'How a SourceForge Project I Built in 2008 Became a Live Product',
    tags: ['Open source'],
    minutes: 8,
    summary: 'The story of Live Glossary: from a GPL side project to liveglossarypro.com, and what open source taught me along the way.',
    date: '',
    href: '',
  },
  {
    title: 'My Daily AI News Digest Runs on a Home Server',
    tags: ['Self-hosting'],
    minutes: 9,
    summary: 'FreshRSS + n8n + a local Ollama model: a private, subscription-free news briefing, and how you can build one.',
    date: '',
    href: '',
  },
  {
    title: 'Sketch First, Then AI: My Art Workflow',
    tags: ['Art & process'],
    minutes: 6,
    summary: 'Where the human hand ends and the AI tools begin in my Draw Wright AI work.',
    date: '',
    href: '',
  },
];

// Useful Stuff: carried over from the old site, grouped by category.
// AFFILIATE LINKS: once you join a program, swap `href` for your referral link
// and set affiliate: true. The disclosure line appears automatically (FTC rule).
export const usefulStuff = [
  { category: 'Dev setup', name: 'VS Code', description: 'My daily editor. Free, fast, and the extension library covers everything.', href: 'https://code.visualstudio.com', affiliate: false },
  { category: 'Dev setup', name: 'GitHub', description: 'Version control and backup for every project, including this site.', href: 'https://github.com', affiliate: false },
  { category: 'Dev setup', name: 'Netlify', description: 'Hosts this site. Push to GitHub and it is live in under a minute.', href: 'https://www.netlify.com', affiliate: false },
  { category: 'Dev setup', name: 'DigitalOcean', description: 'Simple, affordable cloud servers when a project outgrows static hosting.', href: 'https://www.digitalocean.com', affiliate: false }, // has a referral program

  { category: 'Home lab', name: 'Unraid', description: 'The OS on my home server. Mix-and-match drives and one-click Docker apps.', href: 'https://unraid.net', affiliate: false },
  { category: 'Home lab', name: 'n8n', description: 'Self-hostable automation. Powers my Daily AI Digest and art agent.', href: 'https://n8n.io', affiliate: false }, // has an affiliate program
  { category: 'Home lab', name: 'Ollama', description: 'Run AI models locally: private, free, and surprisingly capable.', href: 'https://ollama.com', affiliate: false },
  { category: 'Home lab', name: 'A good NAS hard drive', description: 'Get NAS-rated drives (WD Red Plus, Seagate IronWolf) for a server that runs 24/7.', href: 'https://www.amazon.com/s?k=nas+hard+drive', affiliate: false }, // swap for an Amazon Associates link

  { category: 'Art & design', name: 'iPad + Apple Pencil', description: 'Where most of my sketches start before they become finished pieces.', href: 'https://www.apple.com/ipad/', affiliate: false },
  { category: 'Art & design', name: 'Procreate', description: 'A one-time purchase that rivals desktop painting apps.', href: 'https://procreate.com', affiliate: false },
  { category: 'Art & design', name: 'Canva', description: 'Fast flyers and social graphics when I do not need the full design suite.', href: 'https://www.canva.com', affiliate: false }, // has an affiliate program

  // TODO: replace with your TPT store URL
  { category: 'For teachers', name: 'LGP Resources on Teachers Pay Teachers', description: 'My vocabulary resources for classrooms, built alongside LiveGlossaryPro.', href: 'https://www.teacherspayteachers.com', affiliate: false },
];

// Work with me + contact form (carried over from the old Contact page).
export const services = [
  { title: 'IT consulting', text: 'Legacy system modernization, workflow systems and data-heavy web apps, informed by 30+ years of enterprise experience.' },
  { title: 'Vibe coding + traditional development', text: 'Use AI to move fast, then apply real engineering: testing, security, version control and deployment, so it survives contact with real users.' },
  { title: 'Art & design commissions', text: 'Logos, flyers, brand identity, portraits and illustration.' },
  { title: 'Technical writing', text: 'Clear documentation and articles for IT audiences.' },
];

// Options for the "What's this about?" dropdown on the contact form.
export const contactTopics = ['IT consulting', 'Vibe coding + development', 'Art & design commission', 'Technical writing', 'Just saying hi'];
