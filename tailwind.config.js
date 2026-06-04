/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss,css}', // include Angular templates and components
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        primary: {
          DEFAULT: '#F97316', // orange‑500
          light: '#FB923C',   // orange‑400
          dark: '#EA580C',    // orange‑600
        },
        accent: {
          navy: '#0F172A',    // slate‑900
          gray: '#64748B',    // slate‑500/600
          white: '#FFFFFF',
        },
        background: {
          DEFAULT: '#F8FAFC', // slate‑50
        },
      },
      fontFamily: {
        // sans: ['Segoe UI', "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
}
