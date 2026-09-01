import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import logo from "./nostia-transparent.png";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import Students from "./pages/Students";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import OrgTerms from "./pages/OrgTerms";
import OlafWoodall from "./pages/OlafWoodall";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/universities", label: "For Universities" },
  { to: "/students", label: "For Students" },
  { to: "/contact", label: "Contact" },
];

const APP_STORE_URL = "https://apps.apple.com/us/app/nostia/id6762099952";

/**
 * The console is a static app served from /console/, outside this router — so
 * every link to it must be a real <a> navigation. A <Link> would hand the path
 * to react-router, which has no route for it and would render the 404.
 */
const CONSOLE_URL = "/console/";

function OrgSignInButton({ onClick, className = "" }) {
  return (
    <a
      href={CONSOLE_URL}
      onClick={onClick}
      className={`inline-flex items-center text-sm bg-ink text-white font-medium px-4 py-2 hover:bg-black transition-colors ${className}`}
    >
      Org sign in
    </a>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-white transition-shadow duration-200 ${
        scrolled || menuOpen ? "border-b border-rule shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
        <Link to="/home" className="shrink-0" onClick={closeMenu}>
          <img src={logo} alt="Nostia" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Desktop nav — lg, not md: the org sign-in button plus the extra nav
            entry no longer fit on a tablet without crowding. */}
        <nav className="hidden lg:flex gap-7 items-center">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm transition-colors ${
                pathname === to ? "text-ink font-medium" : "text-body hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
          <a href="/support" className="text-sm text-body hover:text-ink transition-colors">
            Support
          </a>
          <OrgSignInButton />
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-rule bg-white"
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-body hover:text-ink transition-colors py-2.5 border-b border-rule"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
              <a
                href="/support"
                className="text-body hover:text-ink transition-colors py-2.5 border-b border-rule"
              >
                Support
              </a>
              <Link
                to="/terms"
                className="text-body hover:text-ink transition-colors py-2.5"
                onClick={closeMenu}
              >
                Terms of Service
              </Link>
              <OrgSignInButton onClick={closeMenu} className="mt-3 w-fit" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-rule mt-24 sm:mt-32 bg-tint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <img src={logo} alt="Nostia" className="h-9 w-auto mb-4" />
          <p className="text-body text-sm max-w-xs leading-relaxed">
            Verified presence for campus programmes. One platform for attendance,
            class organization, and every club meeting and campus event across
            the year.
          </p>
          <a
            href="mailto:nostiaexecutive@nostia.io"
            className="inline-flex items-center gap-2 text-accent hover:underline text-sm mt-5"
          >
            <Mail className="w-4 h-4" />
            nostiaexecutive@nostia.io
          </a>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-ink mb-4 uppercase tracking-widest">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-body hover:text-ink transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-ink mb-4 uppercase tracking-widest">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={CONSOLE_URL} className="text-body hover:text-ink transition-colors">
                Nostia Orgs — sign in
              </a>
            </li>
            <li>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-ink transition-colors"
              >
                Nostia for students — App Store
              </a>
            </li>
            <li>
              <a href="/support" className="text-body hover:text-ink transition-colors">
                Support
              </a>
            </li>
            <li>
              <Link to="/terms" className="text-body hover:text-ink transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/organization-terms" className="text-body hover:text-ink transition-colors">
                Organization Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-muted text-sm">
          © {new Date().getFullYear()} Nostia LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-body font-sans flex flex-col overflow-x-clip">
        <Header />

        <div className="flex-1 w-full flex flex-col items-center px-4 sm:px-6 pt-24 sm:pt-28">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/students" element={<Students />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/organization-terms" element={<OrgTerms />} />
            {/* Retired with the pivot away from the consumer travel product.
                These were in the nav and the sitemap for months, so they
                redirect rather than 404. */}
            <Route path="/about" element={<Navigate to="/home" replace />} />
            <Route path="/newsletter" element={<Navigate to="/home" replace />} />
            {/* /organizations was the live B2B page and is linked off-site;
                the rest are aliases people type. Cheaper than a support email. */}
            <Route path="/organizations" element={<Navigate to="/universities" replace />} />
            <Route path="/orgs" element={<Navigate to="/universities" replace />} />
            <Route path="/organisations" element={<Navigate to="/universities" replace />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/olaf-woodall" element={<OlafWoodall />} />
            {/* Without this, an unmatched path renders an empty content area —
                the header and footer draw and nothing sits between them. The
                public/404.html SPA hack routes real 404s back through here, so
                this is what catches a mistyped or stale link.
                NOTE: /console/ is a real static directory, not a route. Pages
                serves it directly and this router never sees it. */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
