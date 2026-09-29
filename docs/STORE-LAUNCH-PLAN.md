# Fight Hub App — Premium and App Store Launch Plan

Prepared 29 September 2026 after reviewing this repository (15 commits, 23/23 tests passing) and the live FightHub website (fighthub-swart.vercel.app). This is a proposal; prices and scope need owner approval.

## 1. Where the app is today

**Strong foundations**
- Polished frosted-glass design in the Fight Hub red/charcoal/silver identity.
- 85 exercises with instructions and 84 illustrations, 17 workouts, HIIT sessions (25/30/40 min, three levels), martial-arts mobility and splits preparation, dated weekly routines, a custom session builder and workout logging.
- Clear membership rules (free sample vs Premium) and good planning documents.

**Gaps before it can be sold in the stores**

| Gap | Why it matters |
|---|---|
| No accounts or login | Required for paid subscriptions, sync between devices and account deletion |
| Data only in the browser (localStorage) | Workouts are lost when changing phone or clearing the browser |
| Premium is a local on/off switch | Anyone can unlock it; paid content must be protected on a server |
| No payments | Store rules require App Store / Google Play billing for digital subscriptions |
| Web page only | Apple rejects "repackaged websites" (guideline 4.2); needs genuine app features |
| Layout is a phone mock-up for desktop viewing | On a real 390 px phone the cards are cut off on the right |
| No privacy policy, terms, health disclaimer or subscription terms | Mandatory for both stores |
| Exercise content and images not professionally reviewed | Health and safety liability (already noted in the repo) |
| Not connected to the FightHub website | News, fighters, events and clubs already exist and would add daily value |

## 2. Recommended technical approach

- **One Fight Hub account for the website and the app** using the existing FightHub Supabase project: email, Google and Apple sign-in.
- **Capacitor** wraps the same web code into real iOS and Android apps, while the web version keeps working. No rewrite needed.
- **RevenueCat** handles subscriptions across the App Store, Google Play and web (Stripe) from one setup, and tells Supabase who is Premium. Premium content is then served only to paying members (server-side, not a local switch).
- **Genuine app features** (needed for Apple approval, and valuable anyway): push notifications, offline workouts, timer sounds/vibration that work with the screen off, later Apple Health / Health Connect.
- **iOS builds without a Mac**: GitHub Actions (macOS runners) or Codemagic build and upload to TestFlight from this Windows setup.

## 3. Free vs Premium (building on the approved membership rules)

**Free: brings people in and keeps them coming back**
- FightHub news, fighter database with full fight records, events calendar, club finder near you.
- Basic round timer (boxing, MMA, Muay Thai presets).
- The approved starter sample: 12 exercises, 3 fixed workouts, introductory mobility, basic logging and history.

**Premium: the reasons to pay**
- Full library, all workouts, HIIT, full mobility and splits programmes, custom builder, weekly planning (as approved).
- **Combo caller**: audio-called shadow-boxing and bag-work rounds (jab-cross-hook, Muay Thai kick combos) at chosen pace and level. A standout combat-sports feature.
- **Multi-week conditioning programmes** for strikers and grapplers (general fitness, not "fight camp" or fight-readiness claims).
- **Progress insights**: personal bests, charts, weekly review, streaks and badges.
- **Fight-night alerts** for favourite fighters and events.
- Offline downloads, and no adverts once the website carries ads.

## 4. Pricing (suggestion to test)

- £6.99 per month or £44.99 per year (about 46% saving), with a 7-day free trial.
- The stores take 15% for small businesses (Apple Small Business Program; Google's rate for subscriptions), so roughly £5.94 per monthly subscriber.
- Review after the first few hundred trials: conversion and cancellations decide the final price.

## 5. Store rules that shape the build

| Rule | What we must do |
|---|---|
| Apple 4.8: Sign in with Apple | Offer Apple sign-in whenever Google sign-in is offered |
| Apple 5.1.1(v) / Google User Data policy | Delete account inside the app, plus a web page for deletion (Google) |
| Apple 3.1.1: in-app purchase | Premium sold through Apple in-app purchase. US-only exception: links to web checkout currently allowed (court case ongoing, Apple proposing 15%); not available in the UK |
| Google Play billing | Google Play Billing, unless enrolled in Google's alternative/external billing programmes |
| Apple 3.1.2 subscriptions | Show price, renewal period, what's included and how to cancel before purchase; at least 7-day periods; "Restore purchases" button |
| Apple 4.2 minimum functionality | Must feel like an app, not a website (see section 2) |
| Privacy (both stores) | Privacy policy in the app and store listing; Apple privacy labels; Google Data safety form |
| Age | Rate as 18+ to match the product decision |
| Google new personal accounts | Closed test with 12 testers for 14 continuous days before public release (organisation accounts are exempt) |

Accounts needed: Apple Developer Program (US$99/year; an organisation account needs a D-U-N-S number), Google Play Console (US$25 one-off). If the business is a registered company, organisation accounts are recommended on both stores.

## 6. Delivery stages

1. **Foundations**: real phone layout (fix cut-off), Fight Hub accounts (email/Google/Apple), workout history saved to the account, privacy policy, terms, health disclaimer, in-app account deletion.
2. **Payments**: RevenueCat, App Store and Play subscription products, paywall with required disclosures, restore purchases, server-side Premium checks.
3. **App builds**: Capacitor iOS/Android, push notifications, offline workouts, icons and splash screens, TestFlight and Google Play closed test.
4. **Premium features**: combo caller, programmes, progress insights, FightHub content and fight alerts.
5. **Store submission**: listings, screenshots, review notes and demo account for reviewers.

## 7. Needed from the owner

1. Write access to this repository for GitHub user **caanray786** (Settings → Collaborators).
2. Company or personal store accounts (affects D-U-N-S and Google's 12-tester rule).
3. Google and Apple sign-in set-up: done in the Google Cloud and Apple Developer consoles, with keys entered directly into Supabase (never shared in chat).
4. Approval of free/Premium split and pricing.
5. A plan for professional review of exercise content (a qualified coach or physiotherapist).

## Sources

- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Sign in with Apple guidelines: https://developer.apple.com/news/?id=09122019b
- Google Play external payments update: https://support.google.com/googleplay/android-developer/answer/15582165
- Google Play testing requirements for new personal accounts: https://support.google.com/googleplay/android-developer/answer/14151465
- Apple US link-out commission case: https://techcrunch.com/2026/08/14/apple-proposes-to-take-a-15-cut-of-purchases-made-outside-the-app-store/
