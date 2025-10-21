# Garrison Underwood — Portfolio (Vite + React + Tailwind)

This is a single-page portfolio site built with **React + Vite + TailwindCSS** and configured for **Netlify** deployment.
It uses a JSON/JS data file (`src/data/portfolioData.js`) for easy content updates.

## Quick local setup

1. Clone your repo (or copy files) and `cd` into the project root.
2. Install dependencies:
```bash
npm install
```

3. Start the dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build locally:
```bash
npm run preview
```

## Notes about editing content
Content is located in `src/data/portfolioData.js`. That file exports a JS object so you can leave comments and easily add new items — each top-level key represents a section (landing, academic, extracurricular, athletics, skills).

When adding content:
- Keep the structure consistent (title, subtitle, date, bullets).
- You can add new sections in the same file and import them in `App.jsx` if needed later.

## Deploying to Netlify
1. Create a GitHub repo and push your project.
2. In Netlify, connect the GitHub repo, and set the build command to `npm run build` and publish directory to `dist` (the included `netlify.toml` also specifies this).
3. Deploy — Netlify will run the build and host the `dist` folder.

If the zip doesn't work for any reason, tell me and I will paste the files inline in the chat so you can copy them manually.
