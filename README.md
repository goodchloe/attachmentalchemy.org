# attachmentalchemy.org

Website for Attachment Alchemy, a 5-month journey to embodied secure attachment
with Chloe Good and Spencer Jacobson.

## Making changes

The easiest way is Claude Code: open this repo in Claude Code and describe the
change ("add a Los Angeles immersion on..."). Claude follows the instructions in
[`CLAUDE.md`](CLAUDE.md), makes the change on a branch and opens a pull request.
Merging the pull request publishes the site.

## Running it yourself

Requires Node.js 22.

```sh
npm ci        # install dependencies
npm run dev   # preview at http://localhost:8080
npm run build # production build into dist/
```

## Hosting

GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`.
See [`docs/MIGRATION.md`](docs/MIGRATION.md) for going live and what's left to do.
