# Launching attachmentalchemy.org

This site was split out of chloegood.com, which was originally built in Lovable.
It starts with that site's full code history, trimmed to the Attachment Alchemy
program: the program page is now the homepage, Events is the second page, and
Chloe's personal pages (About, Offerings, Coaching, Contact) were removed. They
stay on chloegood.com.

## Already done

- Header, footer, page title and link-preview text rebranded to "Attachment Alchemy".
  The footer links to chloegood.com.
- GitHub Pages deploy workflow (`.github/workflows/deploy.yml`): publishes `main`
  automatically and checks that every pull request builds.
- Direct links (e.g. `attachmentalchemy.org/events`) work on GitHub Pages.
- `CLAUDE.md` (instructions Claude reads in every session) and a setup hook
  (`.claude/settings.json`) so Claude Code sessions are ready to build the site.

## Going live

1. **Add the missing photo.** The group photo on the Events page only exists on
   Lovable's servers. Download it from the live chloegood.com Events page (or the
   Lovable project) and save it as `public/images/immersion-group-photo.jpg`.
2. **Turn on Pages:** in the repo, go to **Settings → Pages → Build and deployment → Source**
   and choose **GitHub Actions**. Pages needs the repo to be public, or a paid
   GitHub plan for a private repo.
3. **Check the site builds:** under the **Actions** tab, the latest
   "Deploy to GitHub Pages" run should be green.
4. **Connect the domain:** in **Settings → Pages → Custom domain**, enter
   `attachmentalchemy.org`, then add the DNS records GitHub lists in
   [its custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
   at the domain registrar (four `A` records for the bare domain, and a `CNAME`
   for `www`). After DNS updates (minutes to a few hours), tick **Enforce HTTPS**.
5. **Then trim chloegood.com**: remove the Attachment Alchemy page and Events page
   there, give it a new homepage, and forward `chloegood.com/events` to
   `https://attachmentalchemy.org/events` so old links and flyers keep working.
   Its `docs/MIGRATION.md` has the details. Only do this once this site is live, so
   the program is never missing from the web.

## Decisions still open

These were carried over as-is from chloegood.com and may need changing:
- **Email list:** the Beehiiv signup popup is on this site's homepage. Should it
  be an Attachment Alchemy list, Chloe's own newsletter, or both?
- **Booking link:** "Book a Call" uses Chloe's 1:1 Acuity link. Should Attachment
  Alchemy have its own appointment type?
- **Look:** the design is the same as chloegood.com. Fine to keep, or give it its own?

## Known issues to fix

- **No contact page.** Visitors can book a call or buy tickets, but there's no
  email address or contact form on this site. Add one if needed.
- **Placeholder pages:** Privacy Policy and Terms say "Content coming soon...".
- **Large images:** most photos in `public/images/` are 1.5–3 MB PNGs. Converting
  them to resized JPGs would make the site load much faster on phones.
- **Link preview image:** `index.html` uses a generic Unsplash photo for the
  preview shown when the site is shared. Swap in the program flyer or a group photo.
- **No favicon of its own:** `public/favicon.ico` is the same as chloegood.com's.
