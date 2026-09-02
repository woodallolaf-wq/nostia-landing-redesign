import React from "react";
import { motion } from "framer-motion";
import PageMasthead from "../PageMasthead";

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

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const viewport = { once: true, margin: "-60px" };

export default function Contact() {
  return (
    <main className="w-full max-w-5xl">
      {/* ── Hero ── */}
      <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 border-b border-rule">
        <PageMasthead label="Contact" note="Nostia-Orgs" />

        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl sm:text-5xl text-ink leading-[1.1] tracking-tight mb-6"
          >
            Talk to us.
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-body leading-relaxed max-w-2xl">
            Every Nostia-Orgs account starts as a conversation with the person who
            owns the programme. Pick the one that fits.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Demo ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 border-b border-rule"
      >
        <motion.p variants={fadeIn} className="text-xs uppercase tracking-widest text-muted mb-4">
          Universities
        </motion.p>
        <motion.h2 variants={fadeIn} className="font-serif text-2xl sm:text-3xl text-ink mb-4">
          Book a demo
        </motion.h2>

        <motion.p variants={fadeIn} className="text-body leading-relaxed max-w-2xl mb-4">
          Twenty minutes. We walk a stop, watch it verify, and read the funnel it
          produced — on your campus, with your programme in it. Bring the hard
          question about what the data can and cannot prove; that is the part
          worth your time.
        </motion.p>
        <motion.p variants={fadeIn} className="text-sm text-muted max-w-2xl mb-8">
          Organization accounts are set up with you directly — there is no
          self-serve signup. Tell us your institution, your programme, and roughly
          how many students it touches.
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3">
          <a
            href={SALES}
            className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-medium hover:bg-black transition-colors"
          >
            sales@nostia.io
          </a>
          {/* Plain <a>: /console/ is a static app outside this React router. */}
          <a
            href="/console/"
            className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-medium hover:bg-tint transition-colors"
          >
            Already a customer? Sign in
          </a>
        </motion.div>
      </motion.section>

      {/* ── Investors + Support ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-14 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
      >
        <motion.div variants={fadeIn} className="border-t border-ink pt-5">
          <h2 className="font-serif text-xl sm:text-2xl text-ink mb-3">Investors</h2>
          <p className="text-body text-sm leading-relaxed mb-6">
            Nostia LLC is raising against a built product and pilots this fall.
            Ask and we will send the deck — the problem, the product, the sell
            model and the numbers behind them.
          </p>
          <a href={INVESTORS} className="text-accent font-medium hover:underline">
            nostiaexecutive@nostia.io
          </a>
        </motion.div>

        <motion.div variants={fadeIn} className="border-t border-ink pt-5">
          <h2 className="font-serif text-xl sm:text-2xl text-ink mb-3">Support</h2>
          <p className="text-body text-sm leading-relaxed mb-6">
            Trouble with an account, a check-in that did not register, or
            something you need removed. Students and staff both start here.
          </p>
          <div className="flex flex-col gap-2">
            {/* /support is a static page outside this React router. */}
            <a href="/support" className="text-accent font-medium hover:underline">
              Visit the support page →
            </a>
            <a href={SUPPORT} className="text-accent font-medium hover:underline">
              Email support
            </a>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
