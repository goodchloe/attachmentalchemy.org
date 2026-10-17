# chloegood.com

Website for Chloe Good: somatic attachment coaching and the Attachment Alchemy program.

## Making changes

The easiest way is Claude Code: open this repo in Claude Code and describe the
change ("update the Berkeley immersion date to..."). Claude follows the
instructions in [`CLAUDE.md`](CLAUDE.md), makes the change on a branch and opens a
pull request. Merging the pull request publishes the site.

## Running it yourself

Requires Node.js 22.

```sh
npm ci        # install dependencies
npm run dev   # preview at http://localhost:8080
npm run build # production build into dist/
```

## Hosting

GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`.
See [`docs/MIGRATION.md`](docs/MIGRATION.md) for the move off Lovable and the plan
to split Attachment Alchemy into its own site.
