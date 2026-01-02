/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern:
        /(bg|text|rounded|px|py|mr|border|hover:bg|font|transition|duration|uppercase|text-center)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
