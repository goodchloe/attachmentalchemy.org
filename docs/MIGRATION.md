# Moving off Lovable

The goal is two websites, both hosted on GitHub Pages and edited with Claude Code:

- **chloegood.com**: Chloe's coaching (About, Offerings, Coaching, Contact)
- **attachmentalchemy.org**: the Attachment Alchemy program (today's homepage and Events page)

## Already done

- Added the GitHub Pages deploy workflow (`.github/workflows/deploy.yml`). It
  publishes `main` automatically and checks every pull request builds.
- Made direct links (e.g. `chloegood.com/events`) work on GitHub Pages.
- Removed Lovable-only code and files (`lovable-tagger`, Lovable asset files, the
  Bun lockfiles; npm is now the only package manager).
- Moved images from `public/lovable-uploads/` (random names) to `public/images/`
  (readable names) and removed four images that weren't used anywhere.
- Removed an old, unused homepage (`src/pages/HomePage.tsx`).
- Added `CLAUDE.md` (instructions Claude reads in every session) and a
  setup hook (`.claude/settings.json`) so Claude Code sessions are ready to build
  the site straight away.

## Step 1: Go live on GitHub Pages

1. **Add the missing photo.** The group photo on the Events page only exists on
   Lovable's servers. Download it from the live Events page (or the Lovable
   project) and save it as `public/images/immersion-group-photo.jpg`.
2. **Stop editing in Lovable.** Lovable writes straight to `main`, so further
   Lovable edits would collide with this work. Keep the Lovable project until the
   new site is live, as a fallback, but don't change it.
3. **Turn on Pages:** in the repo, go to **Settings → Pages → Build and deployment → Source**
   and choose **GitHub Actions**. Pages needs the repo to be public, or a paid
   GitHub plan for a private repo.
4. **Check the site builds:** under the **Actions** tab, the latest
   "Deploy to GitHub Pages" run should be green.
5. **Connect the domain:** in **Settings → Pages → Custom domain**, enter
   `chloegood.com`, then at the domain registrar replace the Lovable DNS records
   with the ones GitHub lists in
   [its custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
   (four `A` records for the bare domain, and a `CNAME` for `www`). After DNS
   updates (minutes to a few hours), tick **Enforce HTTPS**.
6. Once the live site looks right, cancel Lovable.

## Step 2: Split out attachmentalchemy.org

1. Create an empty GitHub repo named `attachmentalchemy.org` and give Claude Code
   access to it and to this repo.
2. In a Claude Code session with both repos, ask:

   > Split Attachment Alchemy out of chloegood.com into the attachmentalchemy.org
   > repo, following docs/MIGRATION.md step 2.

   Claude should then:
   - Copy this repo's contents and history into `attachmentalchemy.org`, then
     remove Chloe's personal pages (About, Offerings, Coaching, Contact) there. Make
     the Attachment Alchemy page the homepage, Events a second page, and rebrand the
     header, page title, description and link preview to "Attachment Alchemy".
     Update its `CLAUDE.md` and this file to match.
   - In chloegood.com: remove the Attachment Alchemy page, its sections in
     `src/components/home/` and the Events page. Write a new homepage for Chloe's
     coaching that links to attachmentalchemy.org, and add an `/events` page that
     forwards visitors to `https://attachmentalchemy.org/events` so old links and
     flyers keep working.
   - Open a pull request in each repo. Merge the attachmentalchemy.org one and get
     it live first, so the program is never missing from the web.
3. Set up Pages and the `attachmentalchemy.org` domain on the new repo, as in
   step 1.

Decide these before the split:
- **Email list:** is the Beehiiv popup for Attachment Alchemy, Chloe's own
  newsletter, or both?
- **Booking link:** should Attachment Alchemy use a different Acuity appointment
  type from 1:1 coaching?
- **Look:** keep the current design for Attachment Alchemy, or give it its own?
- **chloegood.com homepage:** lead with 1:1 coaching, or a general "about me" page?

## Known issues to fix

These were already broken under Lovable:

- **Contact form doesn't send.** `src/pages/ContactPage.tsx` is set up for
  Netlify Forms, which only works on Netlify hosting. Options: a free form service
  like Formspree, or replace the form with the email link and booking button.
- **Newsletter form on Offerings doesn't work.** `src/pages/OfferingsPage.tsx`
  posts to a placeholder Google Form (`yourformid`). Replace it with the Beehiiv
  form or remove it.
- **Placeholder text:** the Contact page shows "(If Chloe wishes to list a phone
  number)". The Privacy Policy and Terms pages say "Content coming soon...".
- **Large images:** most photos in `public/images/` are 1.5–3 MB PNGs. Converting
  them to resized JPGs would make the site load much faster on phones.
- **Link preview image:** `index.html` uses a generic Unsplash photo for the
  preview shown when the site is shared. Swap in a real photo of Chloe.
- **Unused section:** `src/components/home/OneDayImmersionSection.tsx` isn't shown
  anywhere, and its date reads "September 26, 2027" (probably meant 2026).
  Delete it or use it on the Attachment Alchemy site.
