import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// The Nostia-Orgs homepage.
//
// One buyer, one story: a campus that can prove who showed up. The consumer
// travel product this page used to sell is gone, so nothing here hedges between
// two audiences — the two remaining audiences (an institution, and the students
// on it) get their own pages and are handed off at the bottom.
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

// Deck slide 2 — what a campus uses today, and why each one fails.
const problems = [
  {
    kicker: "Attendance today",
    title: "Sign-in sheets",
    text: "A sheet on a clipboard proves a pen touched paper. Nobody audits them, and a friend can sign for three people on the way past.",
  },
  {
    kicker: "Card readers",
    title: "Door swipes",
    text: "A swipe records entry, not participation. It cannot tell a student who stayed from one who turned around in the lobby.",
  },
  {
    kicker: "After the fact",
    title: "Surveys",
    text: "Single-digit response rates, collected weeks late, answered by exactly the students who were already engaged.",
  },
];

// The full platform. Order is the order it creates value in.
const capabilities = [
  {
    title: "Verified attendance",
    text: "A geofence dwell plus a photo judged against the stop proves a student was physically there. Attendance a dean can defend, not a sheet nobody audits.",
  },
  {
    title: "In-class questions",
    text: "Professors run check-in questions from the podium and see the room answer live. No clickers to buy, no hardware to lose — attendance and comprehension in the same tap.",
  },
  {
    title: "Class organization",
    text: "Materials, room locations, and the week's schedule attached to the section itself, so a student looking for any of the three looks in one place.",
  },
  {
    title: "Campus and club events",
    text: "Clubs, residence life and the rec centre publish meetings and events into the same app the class already uses, with the same verification behind them.",
  },
  {
    title: "Analytics that answer",
    text: "Per-stop and per-session funnels across a whole cohort, every rate carrying its denominator. Where people dropped off, not how many badges were scanned.",
  },
  {
    title: "Institutional reporting",
    text: "The pattern across a term in plain language — which sections are slipping, which events pulled a cohort back, and what changed after they did.",
  },
];

// Deck slide 3 — the loop, in three moves.
const steps = [
  {
    n: "01",
    title: "Author",
    text: "Staff, professors and peer mentors build it themselves — a route, a class, an event. No engineering, no ticket, no waiting on IT.",
  },
  {
    n: "02",
    title: "Verify",
    text: "Geofence dwell, a photo judged per stop, or a question answered in the room. Presence is established at the moment it happens.",
  },
  {
    n: "03",
    title: "Measure",
    text: "A per-stop, per-session funnel showing where a cohort went and where it stopped. Not a headcount.",
  },
];

// Deck slide 5 — why the contract renews.
const stickiness = [
  {
    title: "Cohort density",
    text: "A class arrives together, moves together, and is measurable as a group from day one.",
  },
  {
    title: "Event supply",
    text: "Hundreds of things happen on a campus every week, all year. The calendar never runs dry.",
  },
  {
    title: "Durable membership",
    text: "Clubs, sections and residence halls keep pulling the same students back into the same app.",
  },
];

export default function Home() {
  return (
    <main className="w-full max-w-5xl">
      {/* ── Hero ── */}
      <section className="pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-rule">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeIn}
            className="text-xs uppercase tracking-[0.18em] text-muted mb-6"
          >
            Nostia-Orgs · Pilots this fall
          </motion.p>

          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            A campus that verifies itself.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl mb-9"
          >
            One platform for the attendance a professor takes, the class they
            organize, and every club meeting and campus event their students are
            supposed to turn up to.
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
          Nobody can prove who showed up.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          Every campus already measures attendance three ways. None of them
          survive being asked a hard question about it.
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
          Attendance, class organization and campus events stop being three
          systems that never talk to each other.
        </motion.p>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {capabilities.map(({ title, text }) => (
            <motion.div key={title} variants={fadeIn} className="border-t border-ink pt-4">
              <dt className="font-semibold text-ink mb-2">{title}</dt>
              <dd className="text-body text-sm leading-relaxed">{text}</dd>
            </motion.div>
          ))}
        </dl>
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
          Author. Verify. Measure.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          The same three moves whether it is a lecture, a club meeting or a route
          across campus.
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
            Attendance a dean can defend.
          </h3>
          <p className="text-body text-sm leading-relaxed mb-6">
            What an institution buys, what the analytics actually show, and how a
            department gets set up.
          </p>
          <Link to="/universities" className="text-accent font-medium hover:underline">
            See what you get →
          </Link>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-white p-7 sm:p-9">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">For students</p>
          <h3 className="font-serif text-xl sm:text-2xl text-ink mb-3">
            Your classes and your clubs, in one app.
          </h3>
          <p className="text-body text-sm leading-relaxed mb-6">
            Check in, find what's happening tonight, and keep a record of
            everything you actually turned up to.
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
