/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brian-green": "#A8FE39"
      },
      fontFamily: {
        "epilogue": "var(--font-epilogue)",
        "poppins": "var(--font-poppins)"
      }
    }
  },
  plugins: [],
};
