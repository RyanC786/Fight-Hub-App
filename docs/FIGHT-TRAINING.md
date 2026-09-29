# Fight training, programmes and journal

Status: 2026-09-29. Added at the owner's request: proper training for martial arts (boxing, Muay Thai, MMA, kung fu and other popular arts), real flexibility and splits training instead of only easy stretches, running programmes, and a journal for accountability.

## What is in the app

- **Nine disciplines** (`app/fight-data.js`): Boxing, Muay Thai, Kickboxing, MMA, BJJ and grappling, Wrestling, Karate, Taekwondo, Kung Fu and Sanda. Each has an introduction, a suggested training week and 2–4 round-based sessions (27 in total), with one free session per discipline.
- **Drill library**: 60+ techniques and drills with steps, a key cue, an easier option, a harder option where useful, and safety notes. Sessions can also use exercises from the main library (with their illustrations).
- **Round timer** (`app/fight.js`): synthesised boxing bell at round start and end, a 10-second warning, optional spoken callouts (the phone's built-in voice), a skip button, and the screen kept awake. Finished sessions can be saved to the journal.
- **Programmes**:
  - *Splits and high kicks* (8 weeks, 4 sessions a week): front-split and middle-split days, contract-relax cycles (6-second contractions), holds building from 30 to 60 seconds and 2 to 3 sets, and active end-range strength (leg raises, Cossack squats, horse stance).
  - *Fighter roadwork* (8 weeks, 3 runs a week): easy aerobic runs, hill sprints (weeks 1–3), 3-minute round intervals (weeks 4–7), sprint intervals and long intervals, and a sharpening week.
  - *Run-walk starter* (9 weeks, 3 runs a week): from one-minute runs to 30 minutes of continuous running. Free.
- **Training journal** (`app/journal.js`): log any session (solo, gym, class, pads/bag, sparring, run, strength, flexibility, rest) with minutes, rounds, effort (1–10), energy and notes. Shows sessions and minutes this week, a day streak and an 8-week chart. Stored on the device until accounts sync it.

Tabs are now Today, Train, Fight, Journal and Explore. My week and Progress are reached from Today, Train and Journal.

## How the content was built

Round formats follow each sport: boxing 3-minute rounds with 1 minute rest, Thai professional rounds with 2 minutes rest, MMA 5-minute rounds. Solo drills are the standard homework drills of each art. Wording is original.

Evidence used:

- Stretching for range of motion: static or contract-relax stretching, ideally daily, 2–3 sets of 30–120 s; avoid long static stretching (over 60 s per muscle) right before explosive work. [Delphi consensus on stretching (2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12305623/). Contract-relax: about a 6-second contraction followed by a 10–30 s stretch; ACSM suggests flexibility work at least 2–3 days a week ([ACSM guidance summary](https://www.ptpioneer.com/personal-training/certifications/acsm/acsm-cpt-chapter-16/), [Current concepts in muscle stretching](https://pmc.ncbi.nlm.nih.gov/articles/PMC3273886/)).
- Boxing conditioning: rounds are mostly aerobic with repeated explosive efforts, so running mixes easy aerobic work, sprint intervals (e.g. 4–6 × 30 s all-out with 4 min recovery), longer hard intervals and a taper with short sprints. [Boxing Science: running conditioning](https://boxingscience.co.uk/boxing-fitness-2/), [Boxing Science method](https://boxingscience.co.uk/conditioning-for-boxing-the-boxing-science-method/).
- MMA: a strong aerobic base for 3–5 five-minute rounds plus repeated high-intensity actions; sport-specific rounds with 1 minute rest in fight camp. [MMA energy system overview](https://gcperformancetraining.com/gc-blog/mmastrengthconditioning2), [NSCA: energy system training](https://www.nsca.com/education/articles/kinetic-select/energy-system-training/).
- Hill sprints: short maximal efforts (about 5–12 s) with walk-back recovery, 1–2 times a week for 4–6 weeks. [Hill sprints for fighters](https://sweetscienceoffighting.com/guides/hill-sprints-for-fighters).
- Muay Thai camps: running, skipping, shadowboxing, pads, bag work and clinch, typically twice a day. [Muay Thai workout structure](https://www.muay-thai-guy.com/blog/muay-thai-workout), [Daily routine in Thailand](https://muay-ying.com/how-muay-thai-fighters-train-in-thailand-inside-the-daily-routine/).
- Solo grappling and wrestling drills (shrimping, bridging, technical stand-up, Granby roll, sit-out, stance and motion, penetration step, sprawl): [BJJ solo drills](https://www.elitesports.com/blogs/news/19-best-bjj-solo-drills), [Wrestling stance and motion](https://protips.dickssportinggoods.com/sports-and-activities/wrestling/wrestling-drill-stance-and-motion), [Penetration step](https://www.parentedge.com/drills/wrestling/penetration-step).
- Karate kihon and Taekwondo kicking drills: [Kihon](https://en.wikipedia.org/wiki/Kihon), [Taekwondo flexibility and chamber drills](https://acetkd.ca/blog/taekwondo-flexibility-drills/).
- Run-walk progression: the same idea as run-walk plans such as the NHS Couch to 5K (three runs a week, gradual progression); the weekly steps here are our own.

## Limits and next steps

- New drills have written instructions only. Illustrations can be generated in the same style as the existing library (see [image prompts](IMAGE-PROMPTS.md)).
- Content is general training information and still benefits from review by a qualified coach before paid launch.
- Next: accounts (so the journal and history are kept safely and can feed the voice coach), then the ElevenLabs voice coach, then Stripe.
