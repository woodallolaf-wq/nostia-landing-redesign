# nostia-landing-redesign

A UI and UX redesign workspace for the Nostia Orgs marketing site — a generated
theme system and restrained, purposeful motion, for the same institutional buyer.

**Front end only.** React 19, Tailwind, framer-motion. No backend, no API
clients, no auth, no deploy pipeline.

See [specs/project.md](specs/project.md) for the specification.

## Scope

This repo carries the marketing site and the tooling to redesign it. It does not
carry the product.

Removed deliberately, and not to be reintroduced: the Orgs owner console and its
API layer, the deploy workflow, the app-store association file, and the CNAME.
None of them are needed for a visual redesign, and this repo is public.

The site's "Org sign in" button still links to `/console/` because that is a real
path on the live site. The console itself is not part of this repo, so that link
does not resolve locally. That is expected.

## This repo does not deploy

The live site publishes from a separate private repo. Nothing merged here reaches
nostia.io until a human ports it across. Do not add a deploy workflow — that is
how an unfinished redesign reaches a customer.

## The constraint that governs the work

The current site is austere on purpose. `tailwind.config.js` says why: *"sold to
deans and provosts, so the register is print-like… Nothing here glows."* That was
the right call, and this redesign does not reverse it.

What it fixes is different: the site is credible but inert. Nostia Orgs is a
multi-stop walking route with GPS verification and per-stop drop-off analytics —
a product about movement through space over time — and the page renders that as
paragraphs. Motion is the only tool a page has for showing a sequence.

So: **motion must carry information.** Anything that merely decorates fails the
same test the original palette was built to pass. Nothing here glows. Things here
move, and only when moving explains something.

## Layout

```
specs/project.md            what we are building — the routine reads this weekly
src/theme/**                the generated theme; the only place a colour is defined
src/motion/**               animation primitives; the only place framer-motion is imported
src/components/**           presentational, composed from theme + motion
src/pages/**                composition only — no colours, no raw framer-motion
scripts/**                  load-test and measurement tooling
state/                      the task table, claims, and trusted users
tools/validate-state.js     the gate — nothing writes state/ without passing it
```

## Checks

```
npm start                                 # localhost
npm run build                             # production build
CI=true npm test -- --watchAll=false      # component tests
npm run test:harness                      # task-table smoke
node tools/validate-state.js              # schemas + every cross-file rule
node tools/validate-state.js --self-test  # the glob matcher, both directions
```

`src/setupTests.js` stubs three jsdom gaps — `scrollTo`, `IntersectionObserver`
and `matchMedia`. All three are environment gaps rather than application bugs,
and the IntersectionObserver stub reports elements as immediately in view so that
reveal-on-scroll content is testable at all.

## How work arrives

A scheduled agent reads [specs/project.md](specs/project.md) once a week and
appends three task contracts to `state/tasks.json`, each with at least one
decision deliberately left to whoever implements it. CI rejects a PR whose "What
I decided" section is empty — those decisions are the point.

Weekly rather than daily because this is a small surface: three tasks a day would
collide on `touched_paths` constantly.

The agent pushes directly to `main`, so **do not add a branch-protection rule
requiring pull requests on `main`.**

## History

This repo starts from a single commit. It was seeded from a private source repo,
and that history was not carried over — it contained the console, an investor
deck, and other material that has no place in a public front-end repo. Porting a
finished redesign back is therefore a deliberate diff, not a merge.
