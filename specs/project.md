# Project specification — Nostia Orgs landing redesign

## What we are building

A redesign of the Nostia Orgs marketing site at nostia.io — the site that sells
place-anchored campus adventures to universities. It keeps the buyer, the
positioning and the words. It replaces the visual system: a generated theme
(palette, type scale, spacing, motion constants) and a set of restrained,
purposeful animation components.

The audience does not change. This is still sold to student-life directors,
orientation coordinators and provosts.

## Why it does not exist already

The current site was built deliberately, and the reasoning is written into
`tailwind.config.js`: *"The site is sold to deans and provosts, so the register
is print-like: black type, hairline rules, and colour reserved for links and
primary buttons. Nothing here glows."* That was the right call against the
failure mode it was aimed at. A site selling institutional software that looks
like a consumer app does not get taken seriously in a procurement conversation,
and the last several commits — *"Rebuild the site on white, in a professional
register"* — moved firmly in that direction.

**This redesign does not reverse that judgement. It addresses a different
failure.**

The site is credible but inert. Nostia Orgs is a multi-stop walking route with
GPS-and-photo verification at each stop and per-stop drop-off analytics — a
product that is fundamentally *about* movement through space over time. The
current page renders that as paragraphs. A prospective buyer finishes reading and
still has to imagine what a student actually does, what verification looks like,
and what the analytics tell them in month eleven.

Motion is the only tool a web page has for showing a sequence. A route unfolding
across a campus map, a verification moment resolving, a funnel dropping off
stop by stop — these are three-second animations that replace a paragraph each
and are more convincing than either.

So the constraint is inherited, not discarded: **motion must carry information.**
Anything that merely decorates fails the same test the original palette was
built to pass. "Nothing here glows" remains true. Things here now *move*, and
only when moving explains something.

## Stack and constraints

- **React 19, react-scripts 5.0.1 (CRA), Tailwind 3.4, framer-motion 12.23,
  lucide-react, web-vitals.** All already dependencies. Do not add a UI
  framework, do not migrate to Next.js, do not change the build tool.
- **No webfonts** unless a task justifies one with a measured budget. The
  existing reasoning holds: a network round trip to render a headline is a worse
  trade than the stack every reader already has.
- **`prefers-reduced-motion` is not optional.** Public universities procure
  against accessibility requirements; a site that ignores the setting is a
  liability in exactly the conversation this page exists to start.
- The site must run on localhost via `npm start`, and a production build must be
  served and load-tested locally before a redesign task is considered done.
- Seven pages must keep working: Home, Students, Universities, Contact, Terms,
  OrgTerms, OlafWoodall.
- The existing `npm run smoke` (`scripts/console-smoke.mjs`) tests the console
  API layer and must keep passing. It is unrelated to the redesign — do not
  break it, do not repurpose it.
- **This repo does not deploy.** The live site publishes from
  `olafw666-cpu/nostia-landing-source`; the deploy workflow was deliberately
  removed here. Nothing merged into this repo reaches nostia.io until a human
  merges it back.

## Architecture boundaries

These seams exist so that two people can work the same week without colliding.

- **`src/theme/**`** — the generated theme: colour tokens, type scale, spacing
  scale, motion constants (durations, easings, distances). **The single source of
  truth. Nothing outside this directory defines a colour, a duration, or an
  easing curve.**
- **`src/motion/**`** — reusable animation primitives: reveal-on-scroll, stagger
  containers, transition presets, the reduced-motion wrapper. **The only place
  that imports framer-motion.**
- **`src/components/**`** — presentational components, composed from theme
  tokens and motion primitives.
- **`src/pages/**`** — page composition only. No new colours, no raw
  framer-motion imports, no bespoke animation.
- **`scripts/**`** — smoke and load-test tooling.
- **`tailwind.config.js`** consumes `src/theme`. It does not define the theme.

## Non-goals

1. **No copy rewrite and no repositioning.** The words are settled and were
   argued over. This is a visual system, not a messaging project. A task that
   changes what the page *says* is out of scope.
2. **No framework migration.** Not Next.js, not Vite, not a CSS-in-JS library,
   not a component library. The stack is the stack.
3. **No motion without user intent.** No autoplaying carousels, no ambient
   background loops, no parallax that fights the scrollbar, no animation that
   repeats while the user reads. Motion responds to scroll position, hover, or a
   click, and then it settles.
4. **No new runtime dependency** without a measured before-and-after bundle
   size in the pull request.
5. **Nothing that fails at 320px** or that becomes unreadable when animation is
   suppressed.
6. **No deploy configuration.** This repo does not publish. Adding a deploy
   workflow here is how an unfinished redesign reaches nostia.io by accident.

## Definition of done

- All seven pages render on the new theme, with **zero hardcoded colours,
  durations or easings outside `src/theme/**`** — enforceable by grep, and worth
  enforcing.
- A production build is served locally and load-tested, with the numbers recorded
  in the repo rather than in someone's terminal history.
- Lighthouse on Home, measured locally against a production build:
  **performance ≥ 90, accessibility ≥ 95.**
- **Largest Contentful Paint under 2.5 s and Cumulative Layout Shift under 0.1.**
  CLS is called out specifically because scroll-triggered animation is the single
  most common cause of layout-shift regressions, and it is easy to ship one
  without noticing.
- With `prefers-reduced-motion: reduce`, every animation degrades to an instant
  state change and **no information is lost** — every fact the motion conveyed is
  still present as static content.
- `npm run smoke` passes with zero console errors.
- Bundle size is reported in the PR for any task that touches
  `src/motion/**` or adds a dependency.

## Ground truth

The integration suite in `tests/integration/` is the only check not produced by
the generator, and the only real evidence that the site still sells the product.

The paths that must never break:

1. **The buyer path.** A university buyer lands on Home, understands what Nostia
   Orgs does, and can reach Contact. If a redesign makes the page beautiful and
   this path worse, the redesign failed.
2. **The offer path.** The Universities page loads with its pricing and offer
   content complete and readable.
3. **The legal path.** Terms and OrgTerms render fully. They are legal surfaces
   attached to a paid product and must never become casualties of a visual
   change — no truncation, no reveal-on-scroll hiding a clause, no animation
   that delays their content.
