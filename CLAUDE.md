# chloegood.com

Chloe Good's website: somatic attachment coaching, plus (for now) the Attachment
Alchemy program. Chloe edits this site by asking Claude for changes in plain
language, so explain what you changed in plain, non-technical terms and avoid
jargon in replies.

The site was originally built in Lovable and is moving to GitHub Pages and Claude
Code; see `docs/MIGRATION.md` for where that stands and what's left.

## How changes go live

- Every push to `main` builds the site and publishes it to GitHub Pages
  (`.github/workflows/deploy.yml`). There is no separate deploy step.
- Make changes on a branch and open a pull request. The same workflow builds every
  pull request, so a broken change shows up as a red check before it reaches the
  live site. Only merge when the check is green.
- Always run `npm run build` before committing; if it fails, the live site won't update.
- To let Chloe see a change before it's merged, run `npm run dev` (http://localhost:8080)
  and take screenshots of the affected pages at desktop and phone widths.

## Stack

React + TypeScript, built with Vite, styled with Tailwind CSS and shadcn/ui
components. Routing is React Router. No backend, no database: the build produces
static files.

- `npm run dev`: local preview with live reload
- `npm run build`: production build into `dist/` (also copies `index.html` to
  `404.html` so links like `/events` work on GitHub Pages)

## Where things are

| Page | URL | File |
|---|---|---|
| Attachment Alchemy (homepage) | `/` | `src/pages/AttachmentAlchemyPage.tsx`, built from the sections in `src/components/home/` |
| Events & Programs | `/events` | `src/pages/EventsPage.tsx` |
| About Chloe | `/about` | `src/pages/AboutPage.tsx` |
| Offerings | `/offerings` | `src/pages/OfferingsPage.tsx` |
| Coaching | `/coaching` | `src/pages/CoachingPage.tsx` |
| Contact | `/contact` | `src/pages/ContactPage.tsx` |

- Routes (URL → page) are in `src/App.tsx`. New pages go there, above the `*` catch-all.
- Navigation menu items: `navItems` in `src/components/Header.tsx`.
- Footer: `src/components/Footer.tsx`.
- Every page is wrapped in `src/components/Layout.tsx` (header, footer, watercolor background).
- Email signup popup (Beehiiv): `src/components/EmailPopup.tsx`.
- Page title, description and link-preview tags: `index.html`.
- Colors and fonts: `tailwind.config.ts` and `src/index.css`. Many sections also use
  inline colors: `#3A4A2E` (deep green headings) and `#B5643D` (terracotta accents).

## Common tasks

**Changing dates.** Program and event dates are written directly in the page text,
and the same date often appears in several places. Search the whole `src/` folder
for the old date (try a few spellings, e.g. "January 20", "Jan 20") and update
every match. Today they appear in:
- `src/pages/EventsPage.tsx`: one-day immersions and the full program
- `src/components/home/HeroSection.tsx`: program dates under the homepage title
- `src/components/home/InsideAttachmentAlchemySection.tsx`: the program schedule

**Changing the booking link.** The "Book a Call" Acuity link
(`https://goodcoaching.as.me/?appointmentType=...`) is repeated in the header and on
several pages. Search for `goodcoaching.as.me` and update every match.

**Adding or replacing an image.**
- Put it in `public/images/` with a short, descriptive, lowercase-hyphenated name
  (e.g. `berkeley-immersion-2026.jpg`) and reference it as `src="/images/<name>"`.
- Always write a meaningful `alt` description.
- Keep photos under ~500 KB. Resize anything larger to ~2000px wide and save as
  JPG; many current images are 2–3 MB PNGs, which slow the site on phones.
- Never link to images hosted on Lovable (`/__l5e/...` or `lovable-uploads`): they
  won't load on GitHub Pages.

**Adding an event.** Copy an existing event card in `src/pages/EventsPage.tsx`
and change the city, date and ticket link (tickets are sold on buytickets.at).

## Rules

- Don't edit `src/components/ui/`. Those are stock shadcn/ui building blocks
  shared by every page; change how a page looks in the page or section file instead.
- Match the existing look: serif headings, the green/terracotta palette, generous
  spacing, soft cards (`bg-white/80 border-none shadow-lg`).
- Check every change at phone width as well as desktop; most visitors are on phones.
- Keep the voice warm, grounded and first-person ("I"), as in the About page.
- Don't commit secrets, and don't add analytics, trackers or new third-party
  services without Chloe asking for them.
