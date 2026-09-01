/** @type {import('tailwindcss').Config} */
// One palette, defined once. The site is sold to deans and provosts, so the
// register is print-like: black type, hairline rules, and colour reserved for
// links and primary buttons. Nothing here glows.
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",      // headings, primary buttons
        body: "#444444",     // body copy
        muted: "#6B7280",    // captions, metadata
        accent: "#1A4D3A",   // links only, and the rare emphasis
        rule: "#DDDDDD",     // hairline borders
        tint: "#F8F9FA",     // panel fill, alternating bands
      },
      fontFamily: {
        // Institutional serif for display type. No webfont: a network round
        // trip to render a headline is a worse trade than using the stack
        // every reader already has.
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      },
    },
  },
  plugins: [],
}
