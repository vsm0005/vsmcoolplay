# CoolPlay

**Stay Cool. Play Longer.**

A concept website for CoolPlay, an affordable laptop cooling pad for gaming laptops. Built with React and Vite.

> CoolPlay is a preliminary concept. Product specifications, pricing, market demand, and performance claims all require validation. Nothing on the site is for sale.

## What's on the site

- An interactive airflow illustration (fan speed and angle controls)
- The problem, the five product features, and the Entry and Premium models
- A testing roadmap and a list of claims that are not yet earned
- Target audience, FAQ, and a pilot-list sign-up form

## Run it locally

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

## Sign-up form

The pilot-list form validates the email address but does not send or store anything. To collect sign-ups, connect the `submit` function in the `Join` component (`src/App.jsx`) to a backend or a form service.

## Project structure

```
src/App.jsx      Page sections and content
src/styles.css   All styles, with light and dark themes
src/main.jsx     React entry point
```
