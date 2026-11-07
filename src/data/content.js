// Site copy, Now list, Blog, Tech News and Useful Stuff.
// (The art gallery lives in its own file: src/data/art.js)
// Items marked TODO need your real content.

export const site = {
  name: 'Cliff Wright',
  // Bio shown in the hero, one string per paragraph.
  // The FIRST paragraph is shown large; the rest in normal-size text.
  bio: [
    'I’m Cliff Wright, a software developer, artist, and tinkerer. For more than 30 years, I’ve built and maintained software that helps keep a major city’s subway system safe for the riders who travel it every day.',
    'On my own time, I build things to practice new development skills and try out new technology. For teachers, I made LiveGlossaryPro, a free tool that turns any vocabulary list into flashcards, quizzes, and puzzles. I’m also building Consist Commander, a rail-yard game. And in my home lab, I’ve put together a workflow that emails me a morning news digest, transit alerts included, as I head out the door.',
    'Lately I’ve been exploring how AI can help with software development. I start by writing the requirements, then work through the user interface with pen and pencil, Photoshop, and AI, and use AI to help write the code. I review and test every change myself.',
  ],
  links: [
    { label: 'Instagram', href: 'https://instagram.com/draw_wright_ai' },
    { label: 'LiveGlossaryPro', href: 'https://liveglossarypro.com' },
    { label: 'SourceForge', href: 'https://sourceforge.net/u/dangercow/profile/' },
    { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/cliffowright' },
    // TODO: add GitHub / LinkedIn if you want them public
  ],
};

// "Now" — what's on the bench this month, shown as a terminal-style box.
// Items appear in the order listed. Update whenever it changes.
//   project – name shown in amber
//   state   – short tag in brackets: 'live', 'dev', 'beta'... (any word works)
//   text    – one line on what's happening
export const now = {
  updated: 'November 2026',
  items: [
    { project: 'LiveGlossaryPro', state: 'live', text: 'adding MathJax so math vocabulary prints properly.' },
    { project: 'MyVoice', state: 'dev', text: 'making audio recording reliable on Safari and iOS for the pilot families.' },
    { project: 'cliffowright.com', state: 'live', text: 'you’re looking at it.' },
    { project: 'Consist Commander', state: 'dev', text: 'rules engine is passing 68 tests; starting on gameplay.' },
  ],
};

// School ID shown next to the Now box in the hero (no heading or caption).
// Signatures are scribbled out in the image. `alt` is read aloud by screen readers.
export const origin = {
  png: '/about/school-id.png',
  webp: '/about/school-id.webp',
  alt: 'Cliff Wright’s student ID card from Cornwall College, 1987, with both signatures scribbled out in orange pencil',
};

// Blog posts, newest first. A post shows "Coming soon" until it has an `href`.
//
// TO PUBLISH A POST ON THIS SITE:
//   1. Save the text as src/posts/<slug>.md  (Markdown; start with "# Title")
//   2. Put its images in public/blog/<slug>/ and refer to them in the Markdown
//      as  assets/<file>.png  (they're rewritten to the right place automatically)
//   3. Add an entry below with that slug and  href: '/blog/<slug>'
// For a post hosted elsewhere (Medium, LinkedIn...), leave out `slug` and set
// href to the full https:// address; it then opens in a new tab.
export const posts = [
  {
    // Lives on this site: text in src/posts/daily-ai-news-email.md,
    // images in public/blog/daily-ai-news-email/
    slug: 'daily-ai-news-email',
    title: 'How I Built a Daily AI News Email with FreshRSS, n8n and a Local LLM',
    tags: ['Home lab', 'Automation', 'Local AI'],
    minutes: 6,
    summary:
      'Every morning my home server reads my RSS feeds, has a local language model summarize what matters, and emails me a briefing, transit alerts included. Here’s how the FreshRSS + n8n + local LLM pipeline fits together.',
    date: 'Nov 2026',
    href: '/blog/daily-ai-news-email',
  },
];

// Tech News: four topics, each a short list of sources that update themselves,
// so this section stays current without redeploying the site.
//   label – link text      href – where it goes      note – one short line
// To add a source, copy a { label, href, note } line inside the right topic.
// To add a topic, copy a whole { id, title, blurb, links } block (and give it a new id).
export const news = {
  updated: 'November 2026',
  topics: [
    {
      id: 'ai',
      title: 'AI breakthroughs',
      blurb: 'New models and research, straight from the labs and the people who cover them.',
      links: [
        { label: 'Google DeepMind Blog', href: 'https://deepmind.google/discover/blog/', note: 'Research from Google’s AI lab' },
        { label: 'OpenAI News', href: 'https://openai.com/news/', note: 'Model releases and research' },
        { label: 'Anthropic News', href: 'https://www.anthropic.com/news', note: 'Model releases and research' },
        { label: 'MIT Technology Review: AI', href: 'https://www.technologyreview.com/topic/artificial-intelligence/', note: 'Reporting and analysis' },
      ],
    },
    {
      id: 'vibe',
      title: 'Vibe coding',
      blurb: 'Building software with AI, and doing it responsibly.',
      links: [
        { label: 'Simon Willison: vibe coding', href: 'https://simonwillison.net/tags/vibe-coding/', note: 'Hands-on notes from a working engineer' },
        { label: 'GitHub Blog: AI & ML', href: 'https://github.blog/ai-and-ml/', note: 'AI coding tools and workflows' },
        { label: 'The Pragmatic Engineer', href: 'https://newsletter.pragmaticengineer.com/', note: 'How real teams use AI in practice' },
        { label: 'Hacker News', href: 'https://news.ycombinator.com/', note: 'What developers are talking about today' },
      ],
    },
    {
      id: 'drawing',
      title: 'Digital drawing',
      blurb: 'Tools, techniques and inspiration for drawing on screen.',
      links: [
        { label: 'Creative Bloq: Digital art', href: 'https://www.creativebloq.com/art/digital-art', note: 'News, tutorials and reviews' },
        { label: 'Creative Bloq: Procreate', href: 'https://www.creativebloq.com/tag/procreate', note: 'Everything Procreate' },
        { label: 'Sketchbook Blog', href: 'https://www.sketchbook.com/blog', note: 'Tips and updates from the Sketchbook team' },
        { label: 'r/DigitalPainting', href: 'https://www.reddit.com/r/DigitalPainting/', note: 'Community work and critique' },
      ],
    },
    {
      id: 'homelab',
      title: 'Home lab',
      blurb: 'Self-hosting, servers and automation at home.',
      links: [
        { label: 'Techno Tim', href: 'https://technotim.com/', note: 'Home lab guides and videos' },
        { label: 'Self-Host Weekly', href: 'https://selfh.st/tag/weekly/', note: 'Weekly roundup of self-hosted software' },
        { label: 'Unraid Blog', href: 'https://unraid.net/blog', note: 'News from the OS on my server' },
        { label: 'r/homelab', href: 'https://www.reddit.com/r/homelab/', note: 'Builds, racks and questions' },
        { label: 'ServeTheHome', href: 'https://www.servethehome.com/', note: 'Server and networking hardware reviews' },
      ],
    },
  ],
};

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
