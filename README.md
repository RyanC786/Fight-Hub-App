# Fight Hub App

Planning repository for an international, adults-only combat-sports and fitness experience, starting with an installable mobile-first website.

## Planning documents

- [Product plan](PLANNING.md): confirmed direction, proposed scope, business model and open decisions.
- [Screens and first-week member journey](docs/MEMBER-JOURNEY.md): navigation, screen inventory, training/fan paths, membership and proposed acceptance checks.

## Interactive layout preview

Start with **Plan my training** for equipment/focus matching, a dated week and guided sessions. See [guided training scope and limitations](docs/GUIDED-TRAINING.md).

Open [the mobile preview](prototype/index.html) in a browser to explore setup, Today, the weekly plan, a sample workout and the weekly review. See [layout notes and limitations](docs/LAYOUT-NOTES.md).

The expanded **Train** area includes 85 exercise entries with instructions, easier options and workload examples, 17 draft sessions, filters, a custom builder, local workout history and a premium demo. Custom and guided sessions include warm-up and cooldown guides; custom logs support sets, repetitions and weight.

**HIIT** includes 25, 30 and 40 minute sessions, with home, military-inspired and quiet circuits and Starter, Build and Hard settings. Total time includes six minutes of preparation and five minutes of cooldown. See [conditioning scope, sources and next priorities](docs/CONDITIONING-EXPANSION.md) and [training features](docs/TRAINING-PROTOTYPE.md). Keep the whole `prototype` folder together; its HTML loads local stylesheets, scripts and assets.

Run the 19 automated checks with:

The library includes 84 realistic AI-generated illustrations with tap-to-enlarge viewing. The seated leg-curl image is withheld because generated roller placement was misleading. All 85 movements have written instructions. Images and exercise content require professional review before launch. See [image prompts](docs/IMAGE-PROMPTS.md) and the [new image manifest](docs/EXERCISE-IMAGE-MANIFEST.json).

```sh
node --test prototype/conditioning-model.test.cjs prototype/guided-model.test.cjs prototype/interval-model.test.cjs prototype/training-data.test.cjs prototype/mobility.test.cjs prototype/membership.test.cjs
```

The project is in discovery and planning with a standalone interface prototype. These documents distinguish confirmed decisions from proposals. No production application, production integrations, validated training programmes or launch date are established yet.

Keep planning documents current and commit/push project work at meaningful milestones. Do not commit credentials or private member data.

Explore **Martial arts mobility** for movement control and front/middle-split preparation. See [membership boundaries and next priorities](docs/MARTIAL-ARTS-MOBILITY.md).

The approved [membership rules](docs/MEMBERSHIP.md) give free users a limited starter experience. Full library, HIIT, flexibility collections and the custom builder require Premium demo access. These local UI gates are not production subscription security.
