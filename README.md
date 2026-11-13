# A Mindgardener's Way to Gardening

The guidebook for Mind Garden. Static site, no build step, no dependencies.

## Files
- `index.html` – the app (map, entries, countdown, dates)
- `entries.js` – all the content. This is the file you edit.
- `assets/` – map, schematic map, poster

## Run locally
Open `index.html` in a browser, or `python3 -m http.server` and visit http://localhost:8000.

## Countdown and dates
Door dates are generated automatically from the equinoxes and solstices (Melbourne time) and always run 11 years ahead of today, so the countdown never runs out. Door hours and timezone are set at the top of `entries.js`.

## Publish with GitHub Pages
1. Push this repo to GitHub (branch `main`).
2. Settings → Pages → Source: **Deploy from a branch** → `main` → `/ (root)` → Save.

Note: a public repo means a public site and public source. If the guide should stay private, use a private repo with a plan that supports private Pages, or host it somewhere with a password.
