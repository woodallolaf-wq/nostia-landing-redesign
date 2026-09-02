import React from "react";

// ─────────────────────────────────────────────────────────────
// The strip at the top of every page that says, in large bold letters, which
// page you are on.
//
// The nav shows where you can go; it does not tell a reader who landed on a
// deep link from an email what they are looking at. This does — a masthead
// rule in the print sense, set in the sans face so it never competes with the
// serif headline underneath it.
//
// `as` exists because two different things are being asked of this component.
// On the marketing pages the real <h1> is the headline below, so the label is
// a <p> and must not steal the heading slot. On the legal pages the page name
// IS the heading, so they pass as="h1" and drop their own.
//
// It renders outside the framer-motion staggers on purpose. A masthead that
// fades in is a masthead you notice arriving; this one is simply there.
// ─────────────────────────────────────────────────────────────

export default function PageMasthead({ label, note, as: Tag = "p" }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b-2 border-ink pb-3 mb-8 sm:mb-10">
      <Tag className="font-bold uppercase tracking-tight leading-none text-ink text-3xl sm:text-4xl md:text-5xl">
        {label}
      </Tag>
      {note && (
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{note}</p>
      )}
    </div>
  );
}
