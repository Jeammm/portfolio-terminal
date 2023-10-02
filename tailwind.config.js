/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./commands/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["Monaco", "Consolas"],
      },
      colors: {
        yellow: "rgb(245,191,79)",
        orange: "rgb(240,145,76)",
        blue: "rgb(123,245,244)",
        green: "rgb(97,197,84)",
        pink: "rgb(235, 131,212)",
        background: "rgb(37,35,52)",
        art: "rgb()",
      },
      lineHeight: {
        'mid-loose': '1.25',
      }
    },
  },
  plugins: [],
};
