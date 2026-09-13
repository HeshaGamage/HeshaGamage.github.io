# heshagamage.github.io

My portfolio — one site covering the work spread across my GitHub repositories.

Live at **https://heshagamage.github.io/**

## Stack

React 19 + Vite + Tailwind CSS 4, typeset in Inter and Source Serif 4.
No backend: the site is fully static so GitHub Pages can serve it directly.

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

All page content — profile, summary, projects, skills, education, certifications —
lives in **`src/data/resume.js`**. Edit that one file to update the site; the
components under `src/components/` are presentational and read from it.

CV PDFs live in `public/resume*.pdf`.

The page is a resume-style document and carries a print stylesheet, so the browser's
print dialog (or the printer button in the header) saves a clean PDF of it.
