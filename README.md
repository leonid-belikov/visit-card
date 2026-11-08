# leonidbelikov.com

Business-card page of Leonid Belikov, Senior Frontend Developer.

Static HTML + CSS, no build step, no cookies or analytics. `main.js` (≈30 lines) only adds the grid spotlight on hover; the page works without it.

Spotlight radius: `--spot-r` in `styles.css` (default 180px).

## Files

- `index.html` — the page (meta tags, Open Graph, schema.org Person)
- `main.js` — grid spotlight under the cursor (mouse/trackpad only)
- `styles.css` — styles (design B "Dark technical", mobile-first breakpoints)
- `favicon.svg` — favicon
- `og-image.png` — 1200×630 link preview for Telegram / LinkedIn

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Root-relative paths (`/styles.css`) need a server; opening the file directly will not load styles.

## Deploy

Cloudflare Pages connected to this GitHub repository: build command empty, output directory `/`.
Every push to `main` deploys automatically.

## Photo

`photo.webp` — 520×520 (2× for the 260 px display size). To replace it, keep the same file name and square format.
