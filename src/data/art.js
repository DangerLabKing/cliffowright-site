// =============================================================================
// art.js — the real artwork for the Art section of cliffowright.com
// -----------------------------------------------------------------------------
// IMAGES live in  public/art/  — two files per piece:
//   <slug>.jpg        full size (max 1600px), shown when a piece is opened
//   <slug>-thumb.jpg  small version (max 700px), shown in the gallery grid
// All images were resized for fast loading and had their hidden photo data
// (camera info, GPS location) removed.
//
// HOW TO EDIT
//   • Rename a piece      → change `title` (the image file name can stay)
//   • Hide a piece        → set  show: false   (keeps it in the file for later)
//   • Reorder the gallery → move the { ... } blocks; the first ones show first
//   • Add a new piece     → put <slug>.jpg and <slug>-thumb.jpg in public/art/,
//                           then copy a block below and change its values
//
// FIELD GUIDE
//   slug      – the image file name without .jpg
//   title     – shown on the tile and in the pop-up
//   medium    – one of the names in `artMediums` (drives the filter buttons)
//   year      – from the signature; '' if unknown (then it's not shown)
//   desc      – one or two lines for the pop-up
//   show      – true = visible on the site
//   featured  – true = shown first in the gallery
//   w, h      – the full-size image's pixel size (set automatically; update
//               them if you replace an image with one of a different shape)
// =============================================================================

// Filter buttons, in display order. ('All' is added automatically.)
export const artMediums = ['Digital', 'Sketchbook', 'Comics & Cartoons']

export const artPieces = [
  // ── Digital ────────────────────────────────────────────────────────────────
  { slug: 'megasonic-hi-fi', w: 921, h: 1304, title: 'Megasonic Hi-Fi', medium: 'Digital', year: '',
    desc: 'A Jamaican sound-system dance: selectors, soup stand, dancers, Rastas, and a crowd that never sleeps.',
    show: true, featured: true },
  { slug: 'city-crawler', w: 1600, h: 1000, title: 'City Crawler', medium: 'Digital', year: '2021',
    desc: 'A whole city on tank treads, smoke stacks and cranes included, rolling across a burnt-orange sky.',
    show: true, featured: true },
  { slug: 'the-tinkerer', w: 1000, h: 1600, title: 'The Tinkerer', medium: 'Digital', year: '2022',
    desc: 'Goggles up, gold grill, gear on the chest. A portrait of a builder mid-thought.',
    show: true, featured: true },
  { slug: 'rotor-girl', w: 1000, h: 1600, title: 'Rotor Girl', medium: 'Digital', year: '2021',
    desc: 'A pilot with a personal rotor pack, mid-lift over the hills.',
    show: true, featured: false },
  { slug: 'golden-hoops', w: 1145, h: 1282, title: 'Golden Hoops', medium: 'Digital', year: '2021',
    desc: 'Portrait study in magenta, orange, and sky blue.',
    show: true, featured: false },
  { slug: 'chili-in-the-snow', w: 1000, h: 1600, title: 'Chili in the Snow', medium: 'Digital', year: '2021',
    desc: 'The coolest pepper on the mountain: shades, shearling jacket, hiking boots.',
    show: true, featured: false },
  { slug: 'bell-tower', w: 1000, h: 1600, title: 'Bell Tower', medium: 'Digital', year: '2021',
    desc: 'A shingled bell tower on a bright day, with a road winding off into the hills.',
    show: true, featured: false },
  { slug: 'the-pilot', w: 1200, h: 1600, title: 'The Pilot', medium: 'Digital', year: '2018',
    desc: 'Profile in a sculpted helmet and visor. Clean lines, quiet palette.',
    show: true, featured: false },
  { slug: 'bow-tie-portrait', w: 1200, h: 1600, title: 'Bow Tie', medium: 'Digital', year: '',
    desc: 'Round glasses, pinstripes, and a polka-dot bow tie.',
    show: true, featured: false },
  { slug: 'art-is-life', w: 1000, h: 1600, title: 'Art Is Life', medium: 'Digital', year: '2022',
    desc: 'A birthday portrait: pencil behind the ear, "ART is Life!" across the hoodie.',
    show: true, featured: false },
  { slug: 'breakfast-blues', w: 1000, h: 1600, title: 'Breakfast Blues', medium: 'Digital', year: '',
    desc: 'Cold eggs, a coffee mug, and a long morning.',
    show: true, featured: false },
  { slug: 'donut-pile', w: 533, h: 853, title: 'Donut Pile', medium: 'Digital', year: '',
    desc: 'A full-frame pile of candy-colored donuts.',
    show: true, featured: false },
  { slug: 'painted-bust', w: 999, h: 1600, title: 'Painted Bust', medium: 'Digital', year: '',
    desc: 'A loose, painterly figure study with digital brushes.',
    show: true, featured: false },

  // ── Sketchbook (pencil, ink, marker, colored pencil) ──────────────────────
  { slug: 'pencil-portrait-study', w: 1200, h: 1600, title: 'Pencil Portrait Study', medium: 'Sketchbook', year: '2016',
    desc: 'Graphite portrait with the construction lines left in.',
    show: true, featured: false },
  { slug: 'tall-girl-ink-sketch', w: 1200, h: 1600, title: 'Tall Girl', medium: 'Sketchbook', year: '2016',
    desc: 'Ink character sketch: long limbs, polka-dot boots, hand on hip.',
    show: true, featured: false },
  { slug: 'bicycle-kick', w: 1600, h: 1200, title: 'Bicycle Kick', medium: 'Sketchbook', year: '',
    desc: 'A single-color brush-marker study of a footballer going overhead.',
    show: true, featured: false },
  { slug: 'agents-of-justice-sketches', w: 960, h: 720, title: 'Agents of Justice', medium: 'Sketchbook', year: '',
    desc: 'Character design sheets: White & Wong, Dr. Bagghead, Princess Queisha, Amazing American, and Splom.',
    show: true, featured: false },

  // ── Comics & Cartoons ──────────────────────────────────────────────────────
  { slug: 'the-memo-comic-strip', w: 1600, h: 589, title: 'The Memo', medium: 'Comics & Cartoons', year: '2007',
    desc: 'A three-panel office comic strip about getting the condolences right.',
    show: true, featured: false },
  { slug: 'sdlc-abridged', w: 582, h: 286, title: 'Software Development Life Cycle (Abridged)', medium: 'Comics & Cartoons', year: '',
    desc: 'Requirements → design → fuel → website. Accurate.',
    show: true, featured: false },
  { slug: 'morning-run', w: 1410, h: 1275, title: 'Morning Run', medium: 'Comics & Cartoons', year: '2013',
    desc: 'Earbuds in, laces flying, leash in hand. Somebody is late for the dog.',
    show: true, featured: false },

  // ── Hidden (kept for the record; images NOT included in public/art so they
  //    can't be reached by URL). To show one again, add its two .jpg files
  //    back to public/art and set show: true.
  { slug: 'santa-arrested', title: 'Santa Arrested', medium: 'Comics & Cartoons', year: '',
    desc: 'Breaking news: Santa arrested for breaking & entering!',
    show: false, featured: false },
  { slug: 'boxer-rage', title: 'Boxer Rage', medium: 'Comics & Cartoons', year: '2021',
    desc: 'Pure fury in heart-print boxers.',
    show: false, featured: false },
]
