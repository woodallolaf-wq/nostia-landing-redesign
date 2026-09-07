# nostia-landing-redesign

A redesign workspace for the Nostia Orgs marketing site (nostia.io): a generated
theme system and restrained, purposeful motion, for the same institutional buyer.

See [specs/project.md](specs/project.md) for the specification.

## This repo does not deploy

The live site publishes from `olafw666-cpu/nostia-landing-source`, which this
repo was cloned from — **with history**, so merging the redesign back is a normal
`git remote add` and merge rather than a hand-copied diff.

The inherited `.github/workflows/deploy.yml` was **deliberately deleted**. It
published to nostia.io on every push to `main`, and a redesign workspace that
auto-publishes is how an unfinished redesign reaches a customer. Do not add it
back. Nothing here reaches the live site until a human merges it there.

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
scripts/**                  console smoke test, and the load-test harness
state/                      the task table, claims, and trusted users
tools/validate-state.js     the gate — nothing writes state/ without passing it
```

## Checks

```
npm start                                 # localhost
npm run build                             # production build
CI=true npm test -- --watchAll=false      # component tests
npm run smoke                             # console API contract test (unrelated to the redesign)
npm run test:harness                      # task-table smoke
node tools/validate-state.js              # schemas + every cross-file rule
node tools/validate-state.js --self-test  # the glob matcher, both directions
```

`src/setupTests.js` stubs three jsdom gaps — `scrollTo`, `IntersectionObserver`
and `matchMedia`. All three are environment gaps rather than application bugs,
and the IntersectionObserver stub reports elements as immediately in view so that
reveal-on-scroll content is testable at all.

## How work arrives

A scheduled cloud agent reads [specs/project.md](specs/project.md) once a week
and appends three task contracts to `state/tasks.json`, each with at least one
decision deliberately left to whoever implements it. CI rejects a PR whose "What
I decided" section is empty — those decisions are the point.

Weekly rather than daily because this is a small surface: three tasks a day would
collide on `touched_paths` constantly.

The routine pushes directly to `main`, so **do not add a branch-protection rule
requiring pull requests on `main`.**

## Status

Bootstrapped. Three seed tasks are open: the theme token module, the motion
primitives, and the load-test harness. Nothing is claimable yet — the Discord
`/task` command lives in `woodallolaf-wq/darwin-model` and has not shipped.
