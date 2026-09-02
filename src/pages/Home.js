import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageMasthead from "../PageMasthead";

// ─────────────────────────────────────────────────────────────
// The Nostia-Orgs homepage.
//
// One buyer, one story: a university that wants its first-years to find their
// way, find their people, and still be turning up in November. The consumer
// travel product this page used to sell is gone, and so is the classroom
// framing that briefly replaced it — Nostia is not a gradebook and professors
// do not take attendance with it. The university hosts events, clubs run the
// week-to-week, and students are guided between the two.
//
// The register is print, not product marketing: serif headlines, hairline
// rules, numbered lists, and no colour except on links and the primary button.
// A provost should be able to read this the way they read a memo.
// ─────────────────────────────────────────────────────────────

const DEMO = "mailto:sales@nostia.io?subject=Nostia-Orgs%20demo";

// A single quiet fade. Enough that the page is not inert on scroll; not enough
// that anything moves sideways or bounces.
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const viewport = { once: true, margin: "-60px" };

// What a campus hands a first-year today, and why each one fails them.
const problems = [
  {
    kicker: "Finding the place",
    title: "A map and a schedule",
    text: "A PDF map tells a student the building exists. It does not walk them there, and it has nothing to say when they reach the wrong door of the right building.",
  },
  {
    kicker: "Finding the people",
    title: "The involvement fair",
    text: "Two hundred tables in one afternoon. A student signs up for eleven clubs on a clipboard and hears back from two of them.",
  },
  {
    kicker: "Staying in",
    title: "Eleven group chats",
    text: "Every club runs somewhere different, and the students who most need pulling in are exactly the ones nobody remembered to add.",
  },
];

// The full platform. Order is the order it creates value in.
const capabilities = [
  {
    title: "AI campus tours",
    text: "A guided route that takes a student to the door they actually need, tells them what happens once they are inside, and answers what they are looking at on the way. Self-paced, in their own time, on the phone they already have.",
  },
  {
    title: "Orientation day",
    text: "The whole of Welcome Week in one place — where to be, when, and what it is for. A first-year stops navigating a folder of PDFs and starts navigating the campus.",
  },
  {
    title: "Introduction events",
    text: "The events the university itself puts on to get a cohort through the door: move-in, faculty welcomes, socials, the involvement fair. Published once, found by everyone.",
  },
  {
    title: "Clubs and their meetings",
    text: "Every recognised club with its own page, its own calendar and its own members. A student who signed up in September can still find the room in November.",
  },
  {
    title: "Verified club attendance",
    text: "A geofence dwell plus a photo judged against the location proves someone was actually in the room. Real participation figures for a club, not a clipboard nobody audits.",
  },
  {
    title: "Chat and announcements",
    text: "Built in, so a club reaches its members where the meetings already live. An announcement lands with everyone who joined — not only whoever got added to the group chat.",
  },
];

// The loop, in three moves.
const steps = [
  {
    n: "01",
    title: "Author",
    text: "Student life staff, orientation leaders and club officers build it themselves — a tour route, an introduction event, a club's calendar. No engineering, no ticket, no waiting on IT.",
  },
  {
    n: "02",
    title: "Guide",
    text: "The app routes a student stop to stop and answers questions along the way, then confirms they arrived — geofence dwell and a photo judged against the stop.",
  },
  {
    n: "03",
    title: "Measure",
    text: "A per-stop, per-event funnel showing where a cohort went and where it stopped. Not a headcount.",
  },
];

// Why the contract renews.
const stickiness = [
  {
    title: "Cohort density",
    text: "A first-year class arrives together, moves together, and is reachable as a group from the day they land.",
  },
  {
    title: "Event supply",
    text: "Hundreds of things happen on a campus every week, all year. The calendar never runs dry.",
  },
  {
    title: "Durable membership",
    text: "Clubs and residence halls keep pulling the same students back into the same app long after orientation ends.",
  },
];

export default function Home() {
  return (
    <main className="w-full max-w-5xl">
      {/* ── Hero ── */}
      <section className="pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-rule">
        <PageMasthead label="Nostia-Orgs" note="Pilots this fall" />

        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Nobody should spend first term lost.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl mb-9"
          >
            An AI orientation platform for universities. Campus tours that walk a
            first-year to where they need to be, the introduction events you
            host, and every club they could join — with attendance, chat and
            announcements built in.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3">
            <a
              href={DEMO}
              className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-medium hover:bg-black transition-colors"
            >
              Book a demo
            </a>
            <Link
              to="/universities"
              className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-medium hover:bg-tint transition-colors"
            >
              For universities
            </Link>
          </motion.div>

          <motion.p variants={fadeIn} className="text-sm text-muted mt-8">
            Belonging drives retention. Retention is revenue.
          </motion.p>
        </motion.div>
      </section>

      {/* ── The problem ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2
          variants={fadeIn}
          className="font-serif text-2xl sm:text-3xl text-ink mb-3"
        >
          The first month decides the next four years.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          Every campus already runs orientation three ways. None of them survive
          contact with a student who does not know anybody yet.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
          {problems.map(({ kicker, title, text }) => (
            <motion.div key={title} variants={fadeIn} className="bg-white p-6 sm:p-7">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">{kicker}</p>
              <h3 className="font-serif text-xl text-ink mb-2">{title}</h3>
              <p className="text-body text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── What it does ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2
          variants={fadeIn}
          className="font-serif text-2xl sm:text-3xl text-ink mb-3"
        >
          One platform. The whole campus.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          Getting oriented, getting involved and staying involved stop being
          three systems that never talk to each other.
        </motion.p>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {capabilities.map(({ title, text }) => (
            <motion.div key={title} variants={fadeIn} className="border-t border-ink pt-4">
              <dt className="font-semibold text-ink mb-2">{title}</dt>
              <dd className="text-body text-sm leading-relaxed">{text}</dd>
            </motion.div>
          ))}
        </dl>

        {/* Said plainly and early. It is the first thing a student-life office
            assumes we are, and the first thing a faculty office worries we are. */}
        <motion.p
          variants={fadeIn}
          className="text-body text-sm leading-relaxed max-w-2xl mt-10 border-l-2 border-rule pl-5"
        >
          Nostia is not a gradebook. It does not take attendance in lectures, and
          no professor uses it to mark a roll. The university hosts events, clubs
          run their own, and students are guided between the two.
        </motion.p>
      </motion.section>

      {/* ── How it works ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2
          variants={fadeIn}
          className="font-serif text-2xl sm:text-3xl text-ink mb-3"
        >
          Author. Guide. Measure.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          The same three moves whether it is a tour of campus, an orientation
          event, or a club meeting on a Wednesday night.
        </motion.p>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ n, title, text }) => (
            <motion.li key={n} variants={fadeIn}>
              <span className="block font-serif text-3xl text-muted mb-2">{n}</span>
              <h3 className="font-semibold text-ink mb-2">{title}</h3>
              <p className="text-body text-sm leading-relaxed">{text}</p>
            </motion.li>
          ))}
        </ol>
      </motion.section>

      {/* ── Why it sticks ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2
          variants={fadeIn}
          className="font-serif text-2xl sm:text-3xl text-ink mb-3"
        >
          Bought for orientation. Opened in November.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          A campus is not an event. It is the same few thousand people, in the
          same square mile, for four years.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {stickiness.map(({ title, text }) => (
            <motion.div key={title} variants={fadeIn} className="border-t border-ink pt-4">
              <h3 className="font-semibold text-ink mb-2">{title}</h3>
              <p className="text-body text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          variants={fadeIn}
          className="border-l-2 border-ink pl-5 font-serif text-lg sm:text-xl text-ink leading-snug"
        >
          A scavenger-hunt tool dies when the event ends. A campus doesn't.
        </motion.blockquote>
      </motion.section>

      {/* ── Audience split ──
          Two buyers, two very different questions. Sending both down one page
          would mean answering neither, so the handoff is explicit. */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule"
      >
        <motion.div variants={fadeIn} className="bg-white p-7 sm:p-9">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">For universities</p>
          <h3 className="font-serif text-xl sm:text-2xl text-ink mb-3">
            Orientation that doesn't end in September.
          </h3>
          <p className="text-body text-sm leading-relaxed mb-6">
            What an institution buys, what the analytics actually show, and how
            student life and its clubs get set up.
          </p>
          <Link to="/universities" className="text-accent font-medium hover:underline">
            See what you get →
          </Link>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-white p-7 sm:p-9">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">For students</p>
          <h3 className="font-serif text-xl sm:text-2xl text-ink mb-3">
            Find your way. Find your people.
          </h3>
          <p className="text-body text-sm leading-relaxed mb-6">
            Take the tour, see what's happening tonight, and join the clubs that
            will still be there in second year.
          </p>
          <Link to="/students" className="text-accent font-medium hover:underline">
            Get the app →
          </Link>
        </motion.div>
      </motion.section>

      {/* ── Final CTA ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-t border-rule"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          It's built. Pilots this fall.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-8 leading-relaxed">
          Organization accounts are set up with you directly — there is no
          self-serve signup. Twenty minutes is enough to walk a stop and read the
          funnel it produced.
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3">
          <a
            href={DEMO}
            className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-medium hover:bg-black transition-colors"
          >
            Book a demo
          </a>
          {/* Plain <a>: /console/ is a static app outside this React router. */}
          <a
            href="/console/"
            className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-medium hover:bg-tint transition-colors"
          >
            Sign in to Nostia Orgs
          </a>
        </motion.div>
      </motion.section>
    </main>
  );
}
