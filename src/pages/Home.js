import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageMasthead from "../PageMasthead";

// ─────────────────────────────────────────────────────────────
// The Nostia-Orgs homepage.
//
// One buyer, one story, and one claim above all the others: this is the single
// app a campus connects through. Clubs, their meetings, and verified attendance
// at those meetings lead the page — they are the week-to-week reason anybody
// opens it. The AI tours and the orientation events matter because they are how
// a first-year arrives at a club in the first place, so they follow rather than
// lead.
//
// The consumer travel product this page used to sell is gone, and so is the
// classroom framing that briefly replaced it — Nostia is not a gradebook and
// professors do not take attendance with it.
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

// Where a campus loses a student to its clubs today. Three failures in a row:
// they cannot join, then they cannot be reached, then nobody can tell whether
// any of it worked.
const problems = [
  {
    kicker: "Joining",
    title: "The involvement fair",
    text: "Two hundred tables in one afternoon. A student writes their email on eleven clipboards and hears back from two clubs.",
  },
  {
    kicker: "Being reached",
    title: "Eleven group chats",
    text: "Every club runs somewhere different — a chat, a spreadsheet, an inbox nobody reads. The students who most need pulling in are exactly the ones nobody remembered to add.",
  },
  {
    kicker: "Knowing it worked",
    title: "A clipboard by the door",
    text: "A club cannot say whether its Wednesday meeting drew forty people or nine, so the office funding it cannot either. The sheet proves a pen touched paper.",
  },
];

// The full platform. Clubs first — they are the reason the app gets opened in
// week nine — then the events and tours that feed students into them.
const capabilities = [
  {
    title: "Every club, one app",
    text: "Each recognised club gets a page, a roster and a calendar. The eleven clipboards a student scrawled on at the fair become eleven clubs that can actually reach them, and one place to see everything they joined.",
  },
  {
    title: "Meetings people can find",
    text: "Time, room and what is happening, posted by the officers who run it. A student who signed up in September can still find the Wednesday meeting in November without asking anyone.",
  },
  {
    title: "Verified attendance",
    text: "Members check in at the meeting itself: a geofence dwell plus a photo judged against the room proves they were actually there. A club finally knows whether Wednesday drew forty or nine — and so does the office funding it.",
  },
  {
    title: "Chat and announcements",
    text: "Built into the same app the meetings live in. An officer posts once and reaches every member who joined, instead of whoever happened to get added to the group chat.",
  },
  {
    title: "University events",
    text: "Orientation, move-in, faculty welcomes, the involvement fair — everything the institution hosts, published once into the same feed the clubs are already in.",
  },
  {
    title: "AI campus tours",
    text: "How a first-year gets to any of it. A guided route that walks them to the door they need, tells them what happens inside, and answers what they are looking at on the way.",
  },
];

// The loop, in three moves.
const steps = [
  {
    n: "01",
    title: "Author",
    text: "Club officers and student life staff build it themselves — a meeting, a club calendar, an orientation event, a tour route. No engineering, no ticket, no waiting on IT.",
  },
  {
    n: "02",
    title: "Verify",
    text: "Members check in when they arrive — geofence dwell and a photo judged against the room. Presence is established at the moment it happens, not reconstructed from a sheet afterwards.",
  },
  {
    n: "03",
    title: "Measure",
    text: "A per-meeting, per-event funnel showing which clubs are growing and which are quietly emptying, while there is still a term left to do something about it.",
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
            One app. The whole university, connected.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl mb-9"
          >
            Every club, every meeting, and verified attendance at all of them —
            with the chat and announcements that hold a membership together, and
            the AI campus tours and orientation events that get a first-year
            through the door in the first place.
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
          A campus is thousands of people who never quite meet.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          Clubs are how a student stays. Every campus already runs them three
          ways, and a student is lost at each step.
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
          Everything a student joins, in one app.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          Clubs, their meetings and who turned up to them, in the same place as
          the events that introduced a student to the club to begin with.
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
          Attendance here means a club meeting or a campus event — never a
          lecture. Nostia is not a gradebook, no professor marks a roll with it,
          and nothing a student does in the app reaches their transcript.
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
          Author. Verify. Measure.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          The same three moves whether it is a club meeting on a Wednesday
          night, an orientation event, or a tour of campus.
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
            Every club you joined, in one place.
          </h3>
          <p className="text-body text-sm leading-relaxed mb-6">
            Your meetings, your announcements, and a real record of what you
            turned up to — plus the tour that got you there in week one.
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
