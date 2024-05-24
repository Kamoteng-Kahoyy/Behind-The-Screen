/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Add all relevant file types and directories
    './build/**/*.html', // Keep this if you also have HTML files in the build directory
  ],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
      },
    },
  },
  plugins: [],
}
