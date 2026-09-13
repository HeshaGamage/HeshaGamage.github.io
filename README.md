# heshagamage.github.io

My portfolio — one site covering the work spread across my GitHub repositories.

Live at **https://heshagamage.github.io/**

## Stack

React 19 + Vite + Tailwind CSS 4. No backend: the site is fully static so it can
be served directly by GitHub Pages.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Vite
and publishes `dist/` to GitHub Pages. The repository's Pages source must be set
to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

Do not commit `dist/` — the workflow builds it.

## Editing content

| What | Where |
|---|---|
| Featured projects | `src/components/Projects.jsx` |
| Intro, role, social links | `src/components/Hero.jsx` |
| Tech stack reels | `src/components/Skills.jsx` |
| Contact channels and CVs | `src/components/Contact.jsx` |
| CV PDFs | `public/resume*.pdf` |
