import React from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// Nostia-Orgs — the page a dean, a provost's office or a director of student
// life reads before agreeing to a meeting.
//
// Two rules this page still follows deliberately:
//
//  1. NO INVENTED PROOF OF CUSTOMERS. No logos, no testimonials, no "trusted by"
//     counts, no named pilot institutions. Nothing here has a first paying
//     organization yet, and fabricated social proof on a B2B page is the kind of
//     thing a buyer checks.
//  2. NO PRICE. Tiers exist in config and in the deck, but no price has been
//     agreed with a real buyer, so quoting one here would be a number we
//     invented. "Book a demo" is the honest CTA until that changes.
//
// Capability copy describes the platform as sold. The privacy and analytics
// sections describe how the system genuinely behaves — suppression thresholds
// and denominators are real constraints in the console, not marketing, and must
// not be softened here or the console will contradict the page.
// ─────────────────────────────────────────────────────────────

const DEMO = "mailto:sales@nostia.io?subject=Nostia-Orgs%20demo";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const viewport = { once: true, margin: "-60px" };

const capabilities = [
  {
    title: "Verification",
    text: "A geofence dwell plus photo judging proves a student was physically at the stop. Attendance a dean can defend, rather than a sign-in sheet nobody audits.",
  },
  {
    title: "Classroom attendance",
    text: "A professor runs a check-in question from the podium and watches the room answer. Presence and comprehension in the same tap, on the phone the student already brought — nothing for the department to buy, issue or replace.",
  },
  {
    title: "Class organization",
    text: "Readings, slides, room changes and the week ahead attached to the section itself. One place a student looks, instead of an LMS, an email and a group chat that disagree.",
  },
  {
    title: "Campus and club events",
    text: "Residence life, the rec centre and every recognised club publish into the same app the class already uses, with the same verification behind attendance at each one.",
  },
  {
    title: "Analytics",
    text: "Per-stop and per-session drop-off across a whole cohort, scoped to the version people actually walked. Small groups are suppressed, so a figure can never identify a student.",
  },
  {
    title: "Authoring",
    text: "Any staff member, professor or peer mentor builds a route, a section or an event without engineering help — per-stop text, a verification criterion, a reference photo, and a geofence. Authored on mobile, standing at the stop you are anchoring.",
  },
  {
    title: "Distribution",
    text: "Printed QR on a residence-hall door, and invite codes scoped to a single club or section. The code survives an App Store install, so a poster works on a first-year who has never heard of Nostia.",
  },
  {
    title: "Branding",
    text: "Departmental identity inside one institutional account, so Residence Life and the Rec Centre can each look like themselves.",
  },
];

const metrics = [
  ["Views", "how many people looked"],
  ["Starts", "how many began"],
  ["Verified completion rate", "who actually finished, with the denominator"],
  ["Group rate", "how much of it happened together"],
  ["Corroborated runs", "completions confirmed by a second device"],
  ["Median rating", "what they thought of it"],
];

const steps = [
  {
    n: "01",
    title: "Author it",
    text: "A department builds its own — a Welcome Week route walked once on mobile, a semester of sections, or a club's event calendar. No engineering ticket, no waiting on IT.",
  },
  {
    n: "02",
    title: "Publish and distribute",
    text: "Publish into the Nostia app, print the QR for residence-hall doors and orientation packets, and hand invite codes to the clubs and sections that need them.",
  },
  {
    n: "03",
    title: "Read the funnel",
    text: "Watch where a cohort went and where it dropped off, stop by stop and session by session, while the term is still running and you can still act on it.",
  },
];

const security = [
  {
    title: "Protected by default",
    text: "Encryption in transit and at rest, scoped tokens, and role separation between an owner who can change billing and an admin who cannot. Not an upgrade — the floor.",
  },
  {
    title: "Students stay anonymous to you",
    text: "Nostia never reports to an organization who attended. Figures covering fewer than five distinct people are withheld server-side, because an aggregate over three people on a small campus is a name.",
  },
  {
    title: "Hardened deployments",
    text: "Institutions with a compliance office to answer to can run on dedicated servers under a hardened configuration. Bring the requirement to the meeting and we will scope it.",
  },
];

export default function Universities() {
  return (
    <main className="w-full max-w-5xl">
      {/* ── Hero ── */}
      <section className="pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-rule">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeIn}
            className="text-xs uppercase tracking-[0.18em] text-muted mb-6"
          >
            For universities
          </motion.p>

          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl sm:text-5xl text-ink leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Attendance a dean can defend.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg text-body leading-relaxed max-w-2xl mb-9"
          >
            An institutional subscription covering the attendance a professor
            takes in a lecture hall, the materials and locations that hold a
            class together, and every club meeting, involvement fair and
            residence-life event across the year.
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

          <motion.p variants={fadeIn} className="text-sm text-muted mt-8">
            Organization accounts are set up with you directly — there is no self-serve signup.
          </motion.p>
        </motion.div>
      </section>

      {/* ── What you get ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          What you get
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          Eight things, in the order they create value.
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
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-10">
          How it works
        </motion.h2>

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

      {/* ── The numbers ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          What you can actually see
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          Every rate arrives with its denominator, and aggregates over a handful
          of people are withheld until enough people have taken part. Nostia
          never shows an organization who attended.
        </motion.p>

        <motion.dl variants={fadeIn} className="border-t border-rule">
          {metrics.map(([label, detail]) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-rule py-3.5"
            >
              <dt className="font-semibold text-ink text-sm sm:w-64 shrink-0">{label}</dt>
              <dd className="text-body text-sm">{detail}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.section>

      {/* ── Security & privacy ──
          A compliance office will ask about this before a department signs, so
          it gets a section rather than a footnote. */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          Security and privacy
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-10 leading-relaxed">
          The protections are on before you ask for them.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {security.map(({ title, text }) => (
            <motion.div key={title} variants={fadeIn} className="border-t border-ink pt-4">
              <h3 className="font-semibold text-ink mb-2">{title}</h3>
              <p className="text-body text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Final CTA ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          Bring us the hard question.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-8 leading-relaxed">
          A demo is twenty minutes: walk a stop, watch it verify, and read the
          funnel it produced. Already set up? Billing and analytics live in the
          console, and authoring happens in the app, where you can stand at the
          stop you are anchoring.
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3">
          <a
            href={DEMO}
            className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-medium hover:bg-black transition-colors"
          >
            Book a demo
          </a>
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
