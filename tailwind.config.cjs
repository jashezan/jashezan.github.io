/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['Great Vibes']
      },
      backgroundImage: {
        'hero-pattern-1': "url('./public/abstract-timekeeper.svg')",
        'hero-pattern-2': "url('./public/quantum-gradient.svg')",
        'hero-pattern-3': "url('./public/rainbow-vortex.svg')",
        'hero-pattern-4': "url('./public/vanishing-stripes.svg')",
      }
    },
  },
  plugins: [],
}