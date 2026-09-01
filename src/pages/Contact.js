import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, FileText, LifeBuoy, Mail, TrendingUp } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Contact — three lanes that must not be mixed.
//
// A dean asking for a demo, an investor asking for the deck, and an existing
// user who cannot sign in are three different conversations arriving at three
// different inboxes. A single "contact us" form would route all of them to
// whoever checks it first.
//
// No form service, deliberately: the sell model is a 1-on-1 meeting, and a
// mailto puts the request straight into the right inbox without a third-party
// dependency, a spam queue, or a submission that silently fails.
// ─────────────────────────────────────────────────────────────

const SALES = "mailto:sales@nostia.io?subject=Nostia-Orgs%20demo";
const INVESTORS = "mailto:nostiaexecutive@nostia.io?subject=Nostia-Orgs%20—%20investor%20enquiry";
// Same inbox the static /support page already publishes. There is no
// support@nostia.io — do not invent one here.
const SUPPORT = "mailto:nostiaexecutive@nostia.io?subject=Nostia%20support";
const DECK_URL = "/Nostia-orgs-deck.pdf";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const viewport = { once: true, margin: "-80px" };

export default function Contact() {
  return (
    <main className="w-full max-w-5xl">
      {/* ── Hero ── */}
      <section className="relative text-center pt-6 sm:pt-16 pb-14 sm:pb-20">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-emerald-500/15 blur-3xl" />

        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative">
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Talk to us.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto">
            Every Nostia-Orgs account starts as a conversation with the person
            who owns the programme. Pick the one that fits.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Demo ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden border border-emerald-400/25 bg-emerald-400/[0.04] rounded-3xl p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -top-28 -right-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 rounded-full px-3 py-1 text-xs text-emerald-300 mb-5">
              <Building2 className="w-3.5 h-3.5" />
              Universities
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book a demo</h2>

            <p className="text-white/70 mb-4">
              Twenty minutes. We walk a stop, watch it verify, and read the funnel
              it produced — on your campus, with your programme in it. Bring the
              hard question about what the data can and cannot prove; that is the
              part worth your time.
            </p>
            <p className="text-white/50 text-sm mb-8">
              Organization accounts are set up with you directly — there is no
              self-serve signup. Tell us your institution, your programme, and
              roughly how many students it touches.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={SALES}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
              >
                <Mail className="w-4 h-4" />
                sales@nostia.io
              </a>
              {/* Plain <a>: /console/ is a static app outside this React router. */}
              <a
                href="/console/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition"
              >
                Already a customer? Sign in
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── Investors + Support ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        <motion.div
          variants={fadeUp}
          className="border border-white/10 bg-white/5 rounded-3xl p-8 flex flex-col"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-white/10 flex items-center justify-center mb-5">
            <TrendingUp className="w-5 h-5 text-emerald-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Investors</h2>
          <p className="text-white/60 mb-8 flex-1">
            Nostia LLC is raising against a built product and pilots this fall.
            The deck covers the problem, the product, the sell model and the
            numbers behind them.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition"
            >
              <FileText className="w-4 h-4" />
              Download the deck
            </a>
            <a
              href={INVESTORS}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition"
            >
              <Mail className="w-4 h-4" />
              nostiaexecutive@nostia.io
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="border border-white/10 bg-white/5 rounded-3xl p-8 flex flex-col"
        >
          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
            <LifeBuoy className="w-5 h-5 text-white/80" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Support</h2>
          <p className="text-white/60 mb-8 flex-1">
            Trouble with an account, a check-in that did not register, or
            something you need removed. Students and staff both start here.
          </p>

          <div className="flex flex-col gap-3">
            {/* /support is a static page outside this React router. */}
            <a
              href="/support"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition"
            >
              Visit the support page
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SUPPORT}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition"
            >
              <Mail className="w-4 h-4" />
              Email support
            </a>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
