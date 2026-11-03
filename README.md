# Parsa Rostamzadeh — Portfolio

A bilingual, responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. The laptop artwork and page motion use CSS, with no 3D rendering engine or animation runtime. The site includes project filters and details, a skills toolkit, an interactive laptop, and an English/Persian switch.

## Requirements

- Node.js 24 or newer
- npm

## Run locally

```bash
npm ci
npm run dev
```

Useful commands:

```bash
npm run lint
npm run build
npm run preview
```

The static build is written to `dist/`.

## Project structure

- `src/components/` — page sections and interactive UI
- `src/data/` — translations, projects, skills, and contact links
- `src/lib/` — shared helpers, including base-aware public asset URLs
- `public/` — project artwork, technology icons, and favicon
- `.github/workflows/deploy.yml` — build and GitHub Pages deployment

Update project cards in `src/data/projects.ts`, skills in `src/data/skills.ts`, and English/Persian text in `src/data/content.ts`.

## Deploy to GitHub Pages

The included workflow builds and deploys on pushes to `main` and manual workflow runs. In the repository, open **Settings → Pages** and select **GitHub Actions** as the publishing source.

The workflow automatically builds `creepcomp.ir` for the site root and other repositories for their `/<repository-name>/` path. Public assets and the favicon follow Vite's configured base path. To choose a different path for a local build, set `VITE_BASE_PATH`, for example:

```bash
VITE_BASE_PATH=/my-portfolio/ npm run build
```

Review the project summaries, social links, contact details, and Persian wording before publishing.
