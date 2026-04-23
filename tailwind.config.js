/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SV Basic Manual"', '"Courier New"', 'Courier', 'monospace'],
        mono: ['"SV Basic Manual"', '"Courier New"', 'Courier', 'monospace'],
        urban: ['"Urbanstash Soft"', '"SV Basic Manual"', '"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        orange: {
          500: '#f97316',
          600: '#ea580c',
        }
      }
    },
  },
  plugins: [],
}
