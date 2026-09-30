# Payments (Stripe) and keeping members long term

Status: 2026-09-30.

## How payments work

1. The app's Premium page asks the website for plans (`/api/billing-plans`). Prices are read live from Stripe, so they are changed in the Stripe dashboard, never in code.
2. **Subscribe / Start free trial** calls `/api/billing-checkout`. The website checks the member's Clerk sign-in, then opens Stripe Checkout. One free trial per member.
3. Stripe calls `/api/stripe-webhook` (signature checked) whenever a subscription starts, renews, changes or ends. The website copies the status onto the member's Clerk account (`public_metadata.premium`; the Stripe customer id is kept in private metadata).
4. The app reads that status and switches Premium on or off. After checkout it waits a few seconds for the confirmation.
5. **Manage subscription** calls `/api/billing-portal`, which opens Stripe's customer portal (change plan, card, invoices, cancel).

Code: `api/` in the FightHub website repository (no libraries). Checks: `node --test tests/billing.test.mjs`.

Premium access: statuses `active`, `trialing` and `past_due` (the last keeps access while Stripe retries a card).

Until the Stripe keys are added, the app shows "early access": Premium free to try.

### Vercel environment variables

| Name | What it is |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key (`sk_test_…`, later `sk_live_…`) |
| `STRIPE_WEBHOOK_SECRET` | Webhook signing secret (`whsec_…`) |
| `STRIPE_PRICE_MONTHLY` | Monthly price id (`price_…`) |
| `STRIPE_PRICE_YEARLY` | Yearly price id (`price_…`) |
| `STRIPE_TRIAL_DAYS` | Optional, e.g. `7` |
| `CLERK_SECRET_KEY` | Already added |

After adding or changing them, redeploy in Vercel: variables apply only to new deployments.

Webhook events: `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`. Endpoint: `https://www.fighthub.world/api/stripe-webhook`.

### Before taking real payments (live mode)

- Stripe account activation: business details and bank account.
- Terms of service, privacy policy and a cancellation/refund policy on the website, plus contact details. Needs the business name, address and support email from the owner.
- Repeat the product, prices and webhook in live mode, and put the live keys in Vercel.
- Switch Clerk to its live instance on fighthub.world (DNS records in Vercel) with Google sign-in credentials of our own.

## Keeping members long term

### Built (2026-09-30)

- **Weekly goal** (2–6 training days) with day-by-day progress on Today and a goal streak (weeks in a row).
- **Monthly challenge**, rotating: 100 rounds, 16 training days, 600 minutes, 10 flexibility sessions, 8 runs, 3 disciplines.
- **16 achievements** (sessions, day streaks, rounds, hours, disciplines, goal streaks, challenges) with a pop-up when one unlocks.
- **Technique of the day**, chosen from the member's own discipline.
- **Training journal** with day streak and 8-week chart; journal synced to the account.
- **Multi-week programmes** (splits 8 weeks, roadwork 8 weeks, run-walk 9 weeks) that give a reason to return each week.
- **Yearly plan selected by default**, showing the saving: yearly members churn far less.

### Recommended next, in order

1. **AI voice coach (ElevenLabs)**: daily check-ins that read the journal, praise progress, set the next session and chase missed goals. The strongest reason to stay subscribed. Needs the owner's ElevenLabs account. Cost is per minute, so Premium includes a monthly coach allowance.
2. **Reminders (push notifications)**: training-day reminders, "your streak ends tonight", challenge nudges and fight-night alerts. These work on Android, and on iPhone once the app is added to the home screen.
3. **Fight-night predictions**: pick the winners for each week's events (from the website's fight calendar), score points, monthly leaderboard. A weekly reason to open the app.
4. **Fresh content every month**: a new session per discipline, and 8-week fight-camp programmes per discipline.
5. **Monthly recap** ("Your October in numbers") as a shareable image: retention plus free marketing.
6. **Cancellation save flow**: in Stripe's customer portal, turn on cancellation reasons and a retention offer (for example 50% off the next two months), and allow pausing instead of cancelling.
7. **Referrals**: give a friend a free month, get a free month.
8. **Win-back emails** to members who cancelled or whose trial ended.
