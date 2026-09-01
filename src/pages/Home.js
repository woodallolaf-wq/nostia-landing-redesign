import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardList,
  DoorOpen,
  GraduationCap,
  MessageSquareQuote,
  Repeat,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// The Nostia-Orgs homepage.
//
// One buyer, one story: a campus that can prove who showed up. The consumer
// travel product this page used to sell is gone, so nothing here hedges between
// two audiences — the two remaining audiences (an institution, and the students
// on it) get their own pages and are handed off at the bottom.
//
// Accent is emerald/teal throughout, which was already the Nostia-Orgs colour
// and is now simply the site's colour.
// ─────────────────────────────────────────────────────────────

const DEMO = "mailto:sales@nostia.io?subject=Nostia-Orgs%20demo";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const viewport = { once: true, margin: "-80px" };

// Deck slide 2 — what a campus uses today, and why each one fails.
const problems = [
  {
    icon: ClipboardList,
    kicker: "Attendance today",
    title: "Sign-in sheets",
    text: "A sheet on a clipboard proves a pen touched paper. Nobody audits them, and a friend can sign for three people on the way past.",
  },
  {
    icon: DoorOpen,
    kicker: "Card readers",
    title: "Door swipes",
    text: "A swipe records entry, not participation. It cannot tell the difference between a student who stayed and one who turned around in the lobby.",
  },
  {
    icon: MessageSquareQuote,
    kicker: "After the fact",
    title: "Surveys",
    text: "Single-digit response rates, collected weeks late, answered by exactly the students who were already engaged.",
  },
];

// The full platform. Order is the order it creates value in.
const capabilities = [
  {
    icon: ShieldCheck,
    title: "Verified attendance",
    text: "A geofence dwell plus a photo judged against the stop proves a student was physically there. Attendance a dean can defend, not a sheet nobody audits.",
  },
  {
    icon: GraduationCap,
    title: "In-class questions",
    text: "Professors run check-in questions from the podium and see the room answer live. No clickers to buy, no hardware to lose — attendance and comprehension in the same tap.",
  },
  {
    icon: BookOpen,
    title: "Class organization",
    text: "Materials, room locations, and the week's schedule attached to the section itself, so a student looking for any of the three looks in one place.",
  },
  {
    icon: CalendarDays,
    title: "Campus & club events",
    text: "Clubs, residence life and the rec centre publish meetings and events into the same app the class already uses — with the same verification behind them.",
  },
  {
    icon: BarChart3,
    title: "Analytics that answer",
    text: "Per-stop and per-session funnels across a whole cohort, every rate carrying its denominator. Where people dropped off, not how many badges got scanned.",
  },
  {
    icon: Sparkles,
    title: "AI insight",
    text: "The pattern across a term surfaced in plain language — which sections are slipping, which events actually pulled a cohort back, and what changed after they did.",
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
    text: "A per-stop, per-session funnel that shows where a cohort went and where it stopped. Not a headcount.",
  },
];

// Deck slide 5 — why the contract renews.
const stickiness = [
  {
    icon: Users,
    title: "Cohort density",
    text: "A class arrives together, moves together, and is measurable as a group from day one.",
  },
  {
    icon: CalendarDays,
    title: "Event supply",
    text: "Hundreds of things happen on a campus every week, all year. The calendar never runs dry.",
  },
  {
    icon: Repeat,
    title: "Durable membership",
    text: "Clubs, sections and residence halls keep pulling the same students back into the same app.",
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const orb1Y = useTransform(scrollY, [0, 800], [0, 160]);
  const orb2Y = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <main className="w-full max-w-6xl">
      {/* ── Hero ── */}
      <section className="relative text-center pt-6 sm:pt-16 pb-20 sm:pb-28">
        {/* ambient glow + dot grid, drifting with scroll */}
        <motion.div
          style={{ y: orb1Y }}
          className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        />
        <motion.div
          style={{ y: orb2Y }}
          className="pointer-events-none absolute -top-10 -right-40 h-[28rem] w-[28rem] rounded-full bg-teal-400/15 blur-3xl"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/5 rounded-full px-4 py-1.5 text-xs sm:text-sm text-emerald-200/80 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Nostia-Orgs — pilots this fall
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            A campus that
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              verifies itself
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            One platform for the attendance a professor takes, the class they
            organize, and every club meeting and campus event their students are
            supposed to turn up to.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DEMO}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
            >
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/universities"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition"
            >
              For universities
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/40 text-sm mt-8">
            Belonging drives retention. Retention is revenue.
          </motion.p>
        </motion.div>
      </section>

      {/* ── The Problem ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mt-8 sm:mt-16"
      >
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold mb-4">
          Nobody can prove who showed up.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/60 max-w-2xl mx-auto mb-10 sm:mb-14">
          Every campus already measures attendance three ways. None of them
          survive being asked a hard question about it.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {problems.map(({ icon: Icon, kicker, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border border-white/10 bg-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/25 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-white/80" />
              </div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{kicker}</p>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm sm:text-base">{text}</p>
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
        className="text-center mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold mb-4">
          One platform.{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            The whole campus.
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/60 max-w-2xl mx-auto mb-10 sm:mb-14">
          Attendance, class organization and campus events stop being three
          systems that never talk to each other.
        </motion.p>

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
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-center mb-4">
          Author. Verify. Measure.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-white/60 max-w-2xl mx-auto text-center mb-10 sm:mb-14"
        >
          The same three moves whether it is a lecture, a club meeting or a route
          across campus.
        </motion.p>

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

      {/* ── Why it sticks ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-center mb-4">
          Bought for orientation. Opened in November.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-white/60 max-w-2xl mx-auto text-center mb-10 sm:mb-14"
        >
          A campus is not an event. It is the same few thousand people, in the
          same square mile, for four years.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stickiness.map(({ icon: Icon, title, text }) => (
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

        <motion.p
          variants={fadeUp}
          className="mt-6 sm:mt-8 border border-white/10 bg-white/[0.03] rounded-2xl px-6 py-6 text-center text-white/70 text-base sm:text-lg"
        >
          A scavenger-hunt tool dies when the event ends. A campus doesn't.
        </motion.p>
      </motion.section>

      {/* ── Audience split ──
          Two buyers, two very different questions. Sending both down one page
          would mean answering neither, so the handoff is explicit. */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden border border-emerald-400/25 bg-emerald-400/[0.04] rounded-3xl p-8 sm:p-10 flex flex-col"
        >
          <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="relative flex-1">
            <span className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 rounded-full px-3 py-1 text-xs text-emerald-300 mb-5">
              For universities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Attendance a dean can defend.
            </h3>
            <p className="text-white/60 mb-8">
              What an institution buys, what the analytics actually show, and how
              a department gets set up.
            </p>
          </div>
          <Link
            to="/universities"
            className="relative inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold transition w-fit"
          >
            See what you get
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden border border-white/10 bg-white/5 rounded-3xl p-8 sm:p-10 flex flex-col"
        >
          <div className="relative flex-1">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/5 rounded-full px-3 py-1 text-xs text-white/70 mb-5">
              For students
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Your classes and your clubs, in one app.
            </h3>
            <p className="text-white/60 mb-8">
              Check in, find what's happening tonight, and keep a record of
              everything you actually turned up to.
            </p>
          </div>
          <Link
            to="/students"
            className="relative inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold transition w-fit"
          >
            Get the app
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
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
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">It's built. Pilots this fall.</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10">
              Organization accounts are set up with you directly — there is no
              self-serve signup. Twenty minutes is enough to walk a stop and read
              the funnel it produced.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={DEMO}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
              >
                Book a demo
                <ArrowRight className="w-4 h-4" />
              </a>
              {/* Plain <a>: /console/ is a static app outside this React router. */}
              <a
                href="/console/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition"
              >
                Sign in to Nostia Orgs
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
