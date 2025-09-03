# Portfolio Starter (React + Vite + Tailwind)

A minimal, modern portfolio site starter configured for GitHub Pages.

## Quickstart
```bash
# 1) Install deps
npm ci

# 2) Dev server
npm run dev

# 3) Build
npm run build
```

## Deploy to GitHub Pages
- Create a repo named **`portfolio`** (or change `base` in `vite.config.ts` to `/<your-repo>/`).
- Push your code to the `main` branch.
- In **Settings → Pages**, set **Source: GitHub Actions**.
- The included workflow builds and deploys `/dist` automatically on every push to `main`.