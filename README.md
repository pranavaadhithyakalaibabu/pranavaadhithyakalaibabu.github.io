# Portfolio

A single-page React + Tailwind portfolio. Terminal/monospace aesthetic, content-first.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to GitHub Pages

1. Create a GitHub repo named exactly `<your-username>.github.io` (public, no README/.gitignore — you already have one here).
2. Connect this local folder to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Install the deploy tool (one-time):
   ```bash
   npm install -D gh-pages
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch.
5. In the repo on GitHub: **Settings → Pages → Source**, select branch `gh-pages`, folder `/ (root)`, save.
6. Site goes live at `https://<your-username>.github.io` within a minute or two.

To publish future edits, just run `npm run deploy` again after making changes.

## Edit content

Everything — experience, projects, links — lives in `src/App.jsx` at the top
in the `EXPERIENCE`, `STRATEGY_PROJECTS`, and `BUILT_PROJECTS` arrays. Edit
those objects directly; no other file needs to change for content updates.

## Design tokens

Colors and fonts are defined in `tailwind.config.js` under `theme.extend`.
- `bg` — background (near-black)
- `ink` — primary text
- `muted` — secondary text
- `accent` — terminal accent (status dot)
- `line` — hairline dividers
