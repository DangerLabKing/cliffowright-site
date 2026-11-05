# cliffowright.com

Personal site for Cliff Wright — *Artist. Technologist. Builder.*
Vite + React, deployed on Netlify, domain DNS at GoDaddy.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
```

## Where to edit

| What | File |
|---|---|
| Work rows (grouped, expandable) | `src/data/projects.js` |
| Intro, Now list, Art tiles, Blog posts, Useful Stuff, services, contact topics, links | `src/data/content.js` |
| Contact form (Netlify Forms) | `src/components/Contact.jsx` + hidden copy in `index.html` |
| Colors, type, layout (Archivo, self-hosted) | `src/styles.css` |
| Logo / spiral / favicon | `public/logo.png`, `public/spiral.png`, `public/favicon.png` (transparent, cut from the final logo) |
| Project screenshots | `public/projects/<project-id>/` |
| Art images | `public/art/` then set `src` in `content.js` |

## Still to fill in (search for `TODO`)

- Teachers Pay Teachers store URL (Vocabulary Bundles card)
- Blog: add `href` + real `date` to each post as you publish it
- Useful Stuff: swap in referral links and set `affiliate: true` (the disclosure shows automatically)
- Netlify → Forms → turn on email notifications for the contact form
- Art images for the 9 slots
- Keep the Now list current

## First push to GitHub

```bash
git init
git add .
git commit -m "Initial site scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/cliffowright.com.git
git push -u origin main
```

## Deploy (Netlify)

1. Netlify → **Add new site → Import from Git** → pick this repo.
   Build settings come from `netlify.toml` (`npm run build`, publish `dist`).
2. Check the `*.netlify.app` preview URL.
3. **Domain management → Add domain** → `cliffowright.com`.
4. At GoDaddy DNS, use the records Netlify shows you (typically an `A` record for `@`
   and a `CNAME` for `www` pointing to your `*.netlify.app` name). Remove any old
   IONOS `A`/`CNAME` records for `@` and `www`.
5. Back in Netlify, wait for DNS to verify, then **Provision HTTPS certificate**.
