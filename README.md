# Sugumaran.dev — Portfolio (React + Vite + Tailwind CSS + Lucide)

## 1. Run Locally
```bash
npm install
npm run dev
```

## 2. Customize
Update `src/data/portfolioData.js` with your real GitHub/LinkedIn URLs, email, project demo links, and Formspree endpoint (`https://formspree.io/f/<your-id>`).

## 3. Zero-Cost Deployment
- **Vercel**: Push to GitHub -> Import Project in Vercel -> Framework: Vite -> Deploy (`npm run build`, output: `dist`).
- **Render**: New Static Site -> Connect GitHub -> Build Command: `npm install && npm run build` -> Publish Directory: `dist`.
- **GitHub Pages**: Set `base: '/<repo-name>/'` in `vite.config.js`, build with `npm run build`, and publish `dist/` via `gh-pages` or GitHub Actions.
