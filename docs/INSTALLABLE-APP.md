# Installable web app (PWA)

Status: 2026-09-29. First release route agreed with the owner: an installable web app with Stripe subscriptions first, built so the Apple App Store and Google Play versions can wrap the same code later (see [store launch plan](STORE-LAUNCH-PLAN.md)).

## Where it lives

- Source: the `app/` folder of this repository.
- Published: https://fighthub-swart.vercel.app/app/ (served by the FightHub website on Vercel).
- The FightHub repository copies `app/` from here on a schedule (its "Sync training app" workflow), so changes pushed here go live without touching the website code.

## What makes it an app

- `manifest.webmanifest`: name, icons, full-screen (`standalone`) display, portrait orientation, dark theme colours.
- `icons/`: home-screen icons made from the Fight Hub logo, including a maskable Android icon and an Apple touch icon.
- `sw.js`: offline support. The app files are cached when installed; exercise pictures are cached as they are viewed; the news feed is fetched fresh and falls back to the last copy offline. **Bump `VERSION` in `sw.js` (and the `?v=` numbers in `index.html`) whenever app files change**, or installed copies keep the old version.
- `shell.js`: the Install button. Android and desktop Chrome/Edge show the browser's install prompt; iPhone shows the two-step Safari instructions (Share, then Add to Home Screen). Opening `/app/?install=1` shows the install step straight away (used by the website's QR code).
- `app.css`: full-screen layout with safe-area padding for notched phones and a five-tab bar (Today, My week, Library, Progress, Explore).

## Structure

`core.js` holds screen state, navigation, the Welcome screen and the live **Explore** feed (latest FightHub news and the next fight night, read from the FightHub database with its public key). Feature modules load after it and wrap `render()`: training, HIIT, guided sessions, exercise pages, mobility, membership, routine and exercise navigation. `shell.js` loads last.

## Images

The 84 exercise illustrations were 1536×1024 PNGs totalling 156 MB, too heavy for phones. The app uses 1200px WebP copies (2 MB in total). Originals are kept in `source-art/movements/` and are not part of the published app.

## Premium during early access

Until Stripe subscriptions are connected, Premium can be switched on at no charge ("early access"). This remains a local interface gate, not secure access control: see [membership](MEMBERSHIP.md). Next steps: accounts (email and Google; Apple sign-in once the Apple developer account exists), server-checked Premium, Stripe Checkout and the Stripe customer portal, account deletion, privacy policy and terms.
