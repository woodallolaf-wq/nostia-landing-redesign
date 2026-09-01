import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ShieldCheck,
  Users,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// The student side of Nostia-Orgs.
//
// A student is not the buyer, so this page sells nothing — it answers "what is
// this thing my professor told me to download, and what does it know about me."
// The privacy answer is the second question every student actually has, so it
// gets a section rather than a line in the footer.
// ─────────────────────────────────────────────────────────────

// While null, the button renders as a "Coming soon" placeholder.
const APP_STORE_URL = "https://apps.apple.com/us/app/nostia/id6762099952";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const viewport = { once: true, margin: "-80px" };

export function AppStoreButton() {
  const live = Boolean(APP_STORE_URL);
  const content = (
    <>
      <Apple className="w-7 h-7 fill-current" aria-hidden="true" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-widest opacity-60">
          {live ? "Download on the" : "Coming soon to the"}
        </span>
        <span className="block text-base font-semibold -mt-0.5">App Store</span>
      </span>
    </>
  );

  const baseClass =
    "inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-medium";

  if (live) {
    return (
      <motion.a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseClass} shadow-lg shadow-white/10`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <span aria-disabled="true" className={`${baseClass} opacity-80 cursor-default select-none`}>
      {content}
    </span>
  );
}

const features = [
  {
    icon: BadgeCheck,
    title: "Check in without the clipboard",
    text: "Answer the question on the screen, or arrive at the stop and let your phone confirm it. No sheet going round the room, no clicker to remember, no email to your professor two days later explaining that you were there.",
  },
  {
    icon: BookOpen,
    title: "Your classes, organized",
    text: "Readings, slides, room numbers and this week's schedule sit on the section itself — so the thing your professor posted is in the place you would look for it.",
  },
  {
    icon: CalendarDays,
    title: "Everything happening tonight",
    text: "Club meetings, involvement fairs, residence-hall events and campus-wide things, all in the same feed. Scan the QR on a door and you are in.",
  },
  {
    icon: Users,
    title: "A record of what you turned up to",
    text: "Verified attendance across four years of clubs, sections and events — the involvement history you would otherwise have to reconstruct from memory for an application.",
  },
];

export default function Students() {
  return (
    <main className="w-full max-w-5xl">
      {/* ── Hero ── */}
      <section className="relative text-center pt-6 sm:pt-16 pb-16 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 rounded-full px-4 py-1.5 text-xs sm:text-sm text-white/70 mb-8"
          >
            For students
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Your classes and your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              clubs
            </span>
            , in one app.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Check into a lecture in a tap. Find every meeting and event on your
            campus. Keep a real record of what you showed up for.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center">
            <AppStoreButton />
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/40 text-sm mt-8">
            Free for students. Scan the QR from a poster or a professor and you are in.
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
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14">
          What it does
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {features.map(({ icon: Icon, title, text }) => (
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

      {/* ── Privacy ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.div
          variants={fadeUp}
          className="border border-white/10 bg-white/[0.03] rounded-3xl p-8 sm:p-10"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-white/10 flex items-center justify-center mb-5">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">What your school can see</h2>
          <p className="text-white/60 mb-4 max-w-3xl">
            Your professor sees that their section checked in. Your club sees that
            its meeting filled the room. Neither of them gets a list of names out
            of Nostia — every figure an organization receives is aggregated, and
            any number covering fewer than five distinct people is withheld
            entirely, because an aggregate over three people on a small campus is
            a name.
          </p>
          <p className="text-white/60 max-w-3xl">
            Location is read while you are checking in, not followed around
            campus. The full detail is in the{" "}
            <Link to="/terms" className="text-emerald-300 hover:text-emerald-200 transition">
              Terms of Service
            </Link>
            .
          </p>
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
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Get the app.</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10">
              Classes, clubs and events only appear once your school has a
              Nostia-Orgs account. If yours doesn't yet, tell the person who runs
              your programme — that is usually all it takes.
            </p>

            <div className="flex justify-center">
              <AppStoreButton />
            </div>

            <Link
              to="/universities"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mt-8 transition"
            >
              Send them the university page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
