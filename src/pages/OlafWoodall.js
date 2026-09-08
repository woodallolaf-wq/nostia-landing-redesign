import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accessibility,
  Apple,
  BadgeCheck,
  BatteryCharging,
  BookOpen,
  CircuitBoard,
  CreditCard,
  ExternalLink,
  Feather,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Landmark,
  Linkedin,
  Plane,
  Radio,
  ScrollText,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import portrait from "../olaf-portrait.jpg";

const LINKEDIN_URL = "https://www.linkedin.com/in/olaf-woodall";
const GITHUB_URL = "https://github.com/woodallolaf-wq";
const APP_STORE_URL = "https://apps.apple.com/us/app/nostia/id6762099952";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const viewport = { once: true, margin: "-80px" };

function StatusBadge({ status }) {
  if (status === "shipped") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent">
        <BadgeCheck className="w-3.5 h-3.5" />
        Shipped
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent">
      <span className="relative flex h-2 w-2">
        <span className="hidden" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-tint" />
      </span>
      In progress
    </span>
  );
}

const heroLinks = [
  { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
  { href: GITHUB_URL, icon: Github, label: "GitHub" },
  { href: APP_STORE_URL, icon: Apple, label: "Nostia on the App Store" },
];

const nostiaWork = [
  {
    icon: Smartphone,
    title: "Full stack, owned end-to-end",
    text: "Native Swift and SwiftUI on the front end; Node.js and Express on the back with SQLite persistence. I moved the whole backend off a managed platform onto a self-managed Linux server — Nginx, PM2, TLS, automated daily backups — after its ephemeral containers kept wiping the database on every deploy.",
  },
  {
    icon: CreditCard,
    title: "Payments end-to-end",
    text: "Stripe Connect v2 with direct charges and Apple Pay via StripePaymentSheet — including a full migration to Connect v2's new account model.",
  },
  {
    icon: Server,
    title: "Platform features",
    text: "Push notifications (APNs), two-factor authentication, the Vault system, following/followers, organizations, activity heatmaps, and App Clips with geofenced GeoJSON triggers.",
  },
  {
    icon: ShieldCheck,
    title: "Through Apple review",
    text: "Resolved App Tracking Transparency (5.1.2) and age-rating (2.3.6) rejections plus an ITMS-90118 routing coverage error to bring the app live.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "Accessibility work across the app targeting ADA / WCAG 2.1 AA compliance.",
  },
  {
    icon: FileText,
    title: "Spec-driven engineering",
    text: "20+ formal engineering specification PDFs — architecture, feature specs, and a security audit checklist spanning 12 domains and 53 checks.",
  },
];

const hardwareProjects = [
  {
    icon: Radio,
    status: "shipped",
    title: "Proximity kill-switch (“Drone Ping”)",
    points: [
      "ESP32-C3 based proximity kill-switch using ESP-NOW peer-to-peer radio — hardware confirmed working.",
      "Diagnosed and fixed a MOSFET drive problem by selecting a logic-level part (IRLZ44N) that fully saturates at a 3.3V gate.",
      "Corrected the power topology so the switch interrupts motor power only, not the main battery rail.",
      "Documented in a set of formal PDFs; code is public on GitHub.",
    ],
  },
  {
    icon: Plane,
    status: "in-progress",
    title: "Impact-recovery drone",
    points: [
      "A 5-inch, 6S dual-battery quadcopter engineered to survive sub-40 mph impacts and recover flight.",
      "Elastic TPU motor mounts absorb impact energy; recovery combines a contact bumper with differential pre-impact motor power bias.",
      "An offline vision-language model handles post-flight analysis — deliberately kept out of the real-time control loop after evaluating latency constraints.",
      "Built to a ~$800–900 bill of materials against a $2,000 budget.",
    ],
  },
  {
    icon: BatteryCharging,
    status: "in-progress",
    title: "Formula SAE — accumulator subsystem",
    points: [
      "I lead the accumulator subsystem on the Mines Formula SAE team: the high-voltage battery pack for the car.",
      "The part of the car where the tolerance for error is lowest.",
    ],
  },
];

const otherSoftware = [
  {
    icon: Globe,
    title: "Smarter Than A Crow",
    href: "https://smarterthanacrow.app",
    linkLabel: "smarterthanacrow.app",
    text: "A static quiz web app with a hidden ballistic-arc calculator buried inside it — RK4 drag model, device-motion pitch input, tap-gated entry. Zero backend: GitHub Pages, localStorage state, content swappable through a single questions.json. Built because the joke was worth the physics.",
  },
  {
    icon: Sparkles,
    title: "ML fine-tuning",
    text: "Working knowledge of the modern post-training pipeline — LoRA, SFT, RLHF, DPO, PPO — applied practically in Nostia's Adventure Page model work.",
  },
];

const writing = [
  {
    icon: BookOpen,
    title: "Moral judgment in history",
    status: "in-progress",
    text: "A nonfiction book examining moral judgment through historical figures — Oliver Cromwell among them — with Ottoman history running alongside it.",
  },
  {
    icon: ScrollText,
    title: "Essays",
    text: "Long-form essays on history, media representation, and geopolitics: the Crusades, labor systems in the Gulf, and U.S. arms policy.",
  },
  {
    icon: Feather,
    title: "Fantasy novel",
    status: "in-progress",
    text: "A novel in third-person limited with an isekai structure.",
  },
  {
    icon: Landmark,
    title: "Markets & investment research",
    text: "Independent research across precious metals, defense and aerospace, quantum computing, robotics, and rare-earth supply chains — including small-cap screening in post-quantum cryptography adjacency.",
  },
  {
    icon: Globe,
    title: "Philosophy & history",
    text: "Ottoman history, early modern England, and the moral logic of people who thought they were right — plus structural mechanics and thermodynamics, which I like more than I'm supposed to admit.",
  },
];

const skills = [
  { area: "iOS", items: "Swift, SwiftUI, App Store release process, APNs, App Clips" },
  { area: "Backend", items: "Node.js, Express, SQLite (better-sqlite3), REST API design" },
  { area: "Infrastructure", items: "Linux server administration, Nginx, PM2, systemd, DigitalOcean, DNS, TLS, backup automation" },
  { area: "Payments", items: "Stripe Connect v2, direct charges, Apple Pay integration" },
  { area: "ML", items: "LoRA fine-tuning, local model deployment, inference serving" },
  { area: "Embedded", items: "ESP32-C3, ESP-NOW, MOSFET power switching, EV accumulator systems, drone power systems" },
  { area: "Engineering", items: "Structural mechanics, thermodynamics (Rankine cycle), engineering economics (MACRS, ATCF, NPV/ROR)" },
  { area: "Tools", items: "EES, Python (ReportLab, data analysis), Git/GitHub" },
  { area: "Credentials", items: "FAA Part 107 Remote Pilot" },
];

export default function OlafWoodall() {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta ? meta.getAttribute("content") : null;

    document.title = "Olaf Woodall — Engineer, Founder, Writer";
    if (meta) {
      meta.setAttribute(
        "content",
        "Mechanical engineering student at the Colorado School of Mines and co-founder of Nostia. I build software, hardware, and companies, and write about history and philosophy."
      );
    }

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <main className="w-full max-w-6xl">
      {/* ── Hero ── */}
      <section className="relative pt-6 sm:pt-16 pb-16 sm:pb-24">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative grid gap-10 md:grid-cols-[1.2fr_1fr] items-center"
        >
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 border border-rule bg-tint rounded-full px-4 py-1.5 text-xs sm:text-sm text-body">
                Co-Founder & CEO, Nostia LLC
              </span>
              <span className="inline-flex items-center gap-2 border border-rule bg-tint rounded-full px-4 py-1.5 text-xs sm:text-sm text-body">
                Golden, Colorado
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] mb-5"
            >
              Olaf{" "}
              <span className="text-ink">
                Woodall
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-body max-w-xl mx-auto md:mx-0 mb-4">
              Mechanical engineering student at the Colorado School of Mines and co-founder of
              Nostia, a place-based experiences app live on the iOS App Store. I build across
              software, hardware, and history.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm sm:text-base text-muted max-w-xl mx-auto md:mx-0 mb-4">
              I run Nostia and own most of its technical surface myself — the app, the backend, the
              payments system, and the servers all of it runs on. I lead the high-voltage
              accumulator subsystem for Mines Formula SAE, build my own drone hardware on the side,
              and write on history, philosophy, and geopolitics. My working style is spec-driven:
              major features and hardware systems get formal engineering specifications before and
              during implementation.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm sm:text-base text-muted max-w-xl mx-auto md:mx-0 mb-8">
              I don't think the engineering and the writing are separate activities. Both are
              attempts to take something complicated and make it hold together under load. I'm just
              further along in one of them.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-start gap-3">
              {heroLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 border border-rule bg-tint px-4 py-2 rounded-full text-sm hover:bg-tint hover:border-ink transition"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 sm:w-80 md:w-full max-w-sm">
              <img
                src={portrait}
                alt="Olaf Woodall"
                className="relative w-full rounded-3xl border border-rule object-cover shadow-2xl shadow-black/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Nostia ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-8 sm:mt-16"
      >
        <motion.h2 variants={fadeUp} className="font-serif text-2xl sm:text-3xl text-center mb-4">
          Nostia —{" "}
          <span className="text-ink">
            live on the App Store, city by city.
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-body max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          A place-based experiences app I co-founded and now run as CEO with a five-person team. I
          own most of the technical surface myself — the app, the backend, the payments system, and
          the self-managed Linux server all of it runs on. Formed as Nostia LLC in New Hampshire;
          rolling out city by city on the iOS App Store.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {nostiaWork.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border border-rule bg-tint rounded-2xl p-6 hover:border-ink transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-tint border border-rule flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-body text-sm">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="border border-ink bg-tint rounded-2xl p-6 transition-colors"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-tint flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <StatusBadge status="in-progress" />
            </div>
            <h3 className="font-semibold mb-2">Adventure Page</h3>
            <p className="text-body text-sm">
              An AI-driven discovery feature powered by a locally fine-tuned DeepSeek 1.5B model
              (LoRA), served from dedicated inference infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="border border-rule bg-tint rounded-2xl p-6 hover:border-ink transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-tint flex items-center justify-center mb-5">
              <Landmark className="w-5 h-5 text-body" />
            </div>
            <h3 className="font-semibold mb-2">The company side</h3>
            <p className="text-body text-sm">
              Formed Nostia LLC in New Hampshire, handled state compliance filings, and co-authored
              and stress-tested the company charter. I run the company as CEO with a five-person
              team.
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="flex justify-center mt-8">
          <motion.a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-ink text-white font-medium hover:bg-black transition-colors"
          >
            <Apple className="w-7 h-7 fill-current" aria-hidden="true" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-widest opacity-60">
                Download Nostia on the
              </span>
              <span className="block text-base font-semibold -mt-0.5">App Store</span>
            </span>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ── Drone & embedded hardware ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="font-serif text-2xl sm:text-3xl text-center mb-4">
          Hardware & embedded systems
        </motion.h2>
        <motion.p variants={fadeUp} className="text-body max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          Custom flight hardware and a high-voltage EV pack — designed, built, and debugged from
          the power topology up.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {hardwareProjects.map(({ icon: Icon, status, title, points }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border border-rule bg-tint rounded-2xl p-6 sm:p-8 hover:border-ink transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-tint border border-rule flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <StatusBadge status={status} />
              </div>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-body text-sm">
                    <CircuitBoard className="w-4 h-4 mt-0.5 shrink-0 text-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Other software ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="font-serif text-2xl sm:text-3xl text-center mb-10 sm:mb-14">
          Other software
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {otherSoftware.map(({ icon: Icon, title, text, href, linkLabel }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border border-rule bg-tint rounded-2xl p-6 sm:p-8 hover:border-ink transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-tint flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-body" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-body text-sm sm:text-base">{text}</p>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline transition"
                >
                  {linkLabel}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Writing & interests ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="font-serif text-2xl sm:text-3xl text-center mb-10 sm:mb-14">
          Writing & intellectual interests
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {writing.map(({ icon: Icon, title, status, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border border-rule bg-tint rounded-2xl p-6 hover:border-ink transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-tint flex items-center justify-center">
                  <Icon className="w-5 h-5 text-body" />
                </div>
                {status && <StatusBadge status={status} />}
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-body text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Education & skills ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.h2 variants={fadeUp} className="font-serif text-2xl sm:text-3xl text-center mb-10 sm:mb-14">
          Education & skills
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="border border-rule bg-tint rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-tint border border-rule flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                B.S. Mechanical Engineering <span className="text-muted text-sm font-normal">(expected Spring 2028)</span>
              </h3>
              <p className="text-body text-sm sm:text-base">
                Colorado School of Mines, Golden, CO. Coursework includes thermodynamics (Rankine
                and combined-cycle analysis with EES), structural mechanics (beam analysis, Mohr's
                circle, shear/moment diagrams), engineering economics (MACRS depreciation and
                after-tax cash flow modeling), and Middle East politics.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map(({ area, items }) => (
            <motion.div
              key={area}
              variants={fadeUp}
              className="border border-rule bg-tint rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4 text-muted" />
                <h3 className="font-semibold text-sm uppercase tracking-wider text-body">{area}</h3>
              </div>
              <p className="text-body text-sm">{items}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Contact ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-24 sm:mt-36"
      >
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden border border-rule rounded-3xl px-6 py-14 sm:px-12 sm:py-20 text-center"
        >

          <div className="relative">
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">Get in touch</h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              The best ways to reach me — or to see what I've shipped.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white font-medium hover:bg-black transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>
              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-rule px-6 py-3 rounded-xl hover:bg-tint hover:border-ink transition"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                href="/home"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-rule px-6 py-3 rounded-xl hover:bg-tint hover:border-ink transition"
              >
                <ExternalLink className="w-5 h-5" />
                nostia.io
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
