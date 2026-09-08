import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import PageMasthead from "../PageMasthead";

// ─────────────────────────────────────────────────────────────
// The student side of Nostia-Orgs.
//
// A student is not the buyer, so this page sells nothing — it answers "what is
// this thing my orientation leader told me to download, and what does it know
// about me." The privacy answer is the second question every student actually
// has, so it gets a section rather than a line in the footer.
// ─────────────────────────────────────────────────────────────

// While null, the button renders as a "Coming soon" placeholder.
const APP_STORE_URL = "https://apps.apple.com/us/app/nostia/id6762099952";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const viewport = { once: true, margin: "-60px" };

export function AppStoreButton() {
  const live = Boolean(APP_STORE_URL);
  const content = (
    <>
      <Apple className="w-6 h-6 fill-current" aria-hidden="true" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-widest opacity-70">
          {live ? "Download on the" : "Coming soon to the"}
        </span>
        <span className="block text-sm font-semibold -mt-0.5">App Store</span>
      </span>
    </>
  );

  const baseClass =
    "inline-flex items-center gap-3 px-6 py-3 bg-ink text-white font-medium";

  if (live) {
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} hover:bg-black transition-colors`}
      >
        {content}
      </a>
    );
  }

  return (
    <span aria-disabled="true" className={`${baseClass} opacity-60 cursor-default select-none`}>
      {content}
    </span>
  );
}

const features = [
  {
    title: "A tour that actually walks you there",
    text: "Not a PDF map. A guided route that takes you to the right door, tells you what happens once you are inside, and answers what you are looking at on the way. Do it in your own time, in your first week or in your sixth.",
  },
  {
    title: "Everything happening tonight",
    text: "Orientation events, club meetings, involvement fairs and residence-hall things, all in the same feed. Scan the QR on a door or a poster and you are in.",
  },
  {
    title: "The clubs you signed up for",
    text: "The eleven clipboards you scribbled on at the fair turn into eleven clubs whose meetings, chat and announcements land in one place — so the one you liked can still reach you in November.",
  },
  {
    title: "A record of what you turned up to",
    text: "Verified attendance across four years of clubs and campus events — the involvement history you would otherwise have to reconstruct from memory for an application.",
  },
];

export default function Students() {
  return (
    <main className="w-full max-w-5xl">
      {/* ── Hero ── */}
      <section className="pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-rule">
        <PageMasthead label="For Students" note="Nostia-Orgs" />

        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl sm:text-5xl text-ink leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Find your way. Find your people.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg text-body leading-relaxed max-w-2xl mb-9"
          >
            An AI-guided tour of your campus, every event your university is
            putting on, and the clubs worth joining — with the chat and
            announcements that keep you in them.
          </motion.p>

          <motion.div variants={fadeIn}>
            <AppStoreButton />
          </motion.div>

          <motion.p variants={fadeIn} className="text-sm text-muted mt-8">
            Free for students. Scan the QR from a poster or an orientation leader and you are in.
          </motion.p>
        </motion.div>
      </section>

      {/* ── What it does ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-10">
          What it does
        </motion.h2>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {features.map(({ title, text }) => (
            <motion.div key={title} variants={fadeIn} className="border-t border-ink pt-4">
              <dt className="font-semibold text-ink mb-2">{title}</dt>
              <dd className="text-body text-sm leading-relaxed">{text}</dd>
            </motion.div>
          ))}
        </dl>
      </motion.section>

      {/* ── Privacy ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.div variants={fadeIn} className="bg-tint border border-rule p-7 sm:p-9 max-w-3xl">
          <h2 className="font-serif text-xl sm:text-2xl text-ink mb-4">
            What your school can see
          </h2>
          <p className="text-body text-sm leading-relaxed mb-4">
            Nothing to do with your classes — Nostia is not a class app, and no
            professor takes attendance with it. Your club sees that its meeting
            filled the room. Student life sees how many people finished the tour.
            Neither of them gets a list of names out of Nostia — every figure an
            organization receives is aggregated, and any number covering fewer
            than five distinct people is withheld entirely, because an aggregate
            over three people on a small campus is a name.
          </p>
          <p className="text-body text-sm leading-relaxed">
            Location is read while you are on a tour or checking in, not followed
            around campus. The full detail is in the{" "}
            <Link to="/terms" className="text-accent hover:underline">
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
        className="py-14 sm:py-20"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          Get the app.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-body max-w-2xl mb-8 leading-relaxed">
          Tours, events and clubs only appear once your school has a Nostia-Orgs
          account. If yours doesn't yet, tell whoever runs orientation or student
          life — that is usually all it takes.
        </motion.p>

        <motion.div variants={fadeIn}>
          <AppStoreButton />
        </motion.div>

        <motion.p variants={fadeIn} className="mt-8">
          <Link to="/universities" className="text-accent font-medium hover:underline">
            Send them the university page →
          </Link>
        </motion.p>
      </motion.section>
    </main>
  );
}
