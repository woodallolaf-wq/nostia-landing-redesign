import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  Lock,
  MapPin,
  Palette,
  QrCode,
  Server,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

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

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const viewport = { once: true, margin: "-80px" };

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Verification",
    text: "A geofence dwell plus photo judging proves a student was physically at the stop. Attendance a dean can defend, rather than a sign-in sheet nobody audits.",
  },
  {
    icon: GraduationCap,
    title: "Classroom attendance",
    text: "A professor runs a check-in question from the podium and watches the room answer. Presence and comprehension in the same tap, on the phone the student already brought — nothing for the department to buy, issue or replace.",
  },
  {
    icon: BookOpen,
    title: "Class organization",
    text: "Readings, slides, room changes and the week ahead attached to the section itself. One place a student looks, instead of an LMS, an email and a group chat that disagree.",
  },
  {
    icon: CalendarDays,
    title: "Campus & club events",
    text: "Residence life, the rec centre and every recognised club publish into the same app the class already uses — with the same verification behind attendance at each one.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    text: "Per-stop and per-session drop-off across a whole cohort, scoped to the version people actually walked. Small groups are suppressed, so a figure can never identify a student.",
  },
  {
    icon: MapPin,
    title: "Authoring",
    text: "Any staff member, professor or peer mentor builds a route, a section or an event without engineering help — per-stop text, a verification criterion, a reference photo, and a geofence. Authored on mobile, standing at the stop you are anchoring.",
  },
  {
    icon: QrCode,
    title: "Distribution",
    text: "Printed QR on a residence-hall door, and invite codes scoped to a single club or section. The code survives an App Store install, so a poster works on a first-year who has never heard of Nostia.",
  },
  {
    icon: Palette,
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
    icon: Lock,
    title: "Protected by default",
    text: "Encryption in transit and at rest, scoped tokens, and role separation between an owner who can change billing and an admin who cannot. Not an upgrade — the floor.",
  },
  {
    icon: UserCheck,
    title: "Students stay anonymous to you",
    text: "Nostia never reports to an organization who attended. Figures covering fewer than five distinct people are withheld server-side, because an aggregate over three people on a small campus is a name.",
  },
  {
    icon: Server,
    title: "Hardened deployments",
    text: "Institutions with a compliance office to answer to can run on dedicated servers under a hardened configuration. Bring the requirement to the meeting and we will scope it.",
  },
];

function SignInButton({ className = "" }) {
  // Plain <a>: /console/ is a static app outside this React router.
  return (
    <a
      href="/console/"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition ${className}`}
    >
      Sign in to Nostia Orgs
    </a>
  );
}

function DemoButton({ className = "", children = "Book a demo" }) {
  return (
    <a
      href={DEMO}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export default function Universities() {
  return (
    <main className="w-full max-w-6xl">
      {/* ── Hero ── */}
      <section className="relative text-center pt-6 sm:pt-16 pb-16 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 rounded-full px-4 py-1.5 text-xs sm:text-sm text-emerald-300 mb-8"
          >
            <Building2 className="w-4 h-4" />
            For universities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Attendance a dean
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              can defend
            </span>
            .
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            An institutional subscription covering the attendance a professor
            takes in a lecture hall, the materials and locations that hold a
            class together, and every club meeting, involvement fair and
            residence-life event across the year.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <DemoButton />
            <SignInButton />
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/40 text-sm mt-8">
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
        className="mt-8 sm:mt-16"
      >
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-center mb-4">
          What you get
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/60 max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          Eight things, in the order they create value.
        </motion.p>

        {/* An even card count fills the two-column grid exactly — no orphan to
            span. If a capability is added or removed, either keep the count even
            or re-introduce a full-width span for the last card. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative border border-white/10 bg-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-emerald-400/30 transition-colors"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 blur-3xl transition-colors duration-500" />
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-white/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm sm:text-base">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── How it works ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14">
          How it works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map(({ n, title, text }) => (
            <motion.div
              key={n}
              variants={fadeUp}
              className="border border-white/10 bg-white/5 rounded-2xl p-6 sm:p-8"
            >
              <span className="text-emerald-300/70 text-sm font-mono tracking-widest">{n}</span>
              <h3 className="font-semibold text-lg mt-3 mb-2">{title}</h3>
              <p className="text-white/60 text-sm sm:text-base">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── The numbers ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-center mb-4">
          What you can{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            actually see
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/60 max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          Every rate arrives with its denominator, and aggregates over a handful
          of people are withheld until enough people have taken part. Nostia
          never shows an organization who attended.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map(([label, detail]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="border border-white/10 bg-white/5 rounded-xl p-5"
            >
              <h3 className="font-semibold text-sm mb-1">{label}</h3>
              <p className="text-white/50 text-sm">{detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Security & privacy ──
          A compliance office will ask about this before a department signs, so
          it gets a section rather than a footnote. */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-center mb-4">
          Security and privacy
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/60 max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          The protections are on before you ask for them.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {security.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="border border-white/10 bg-white/5 rounded-2xl p-6 sm:p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-white/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm sm:text-base">{text}</p>
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
        className="mt-24 sm:mt-36"
      >
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden border border-emerald-400/25 rounded-3xl px-6 py-14 sm:px-12 sm:py-20 text-center"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Bring us the hard question.</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10">
              A demo is twenty minutes: walk a stop, watch it verify, and read
              the funnel it produced. Already set up? Billing and analytics live
              in the console, and authoring happens in the app, where you can
              stand at the stop you are anchoring.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <DemoButton />
              <SignInButton />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
