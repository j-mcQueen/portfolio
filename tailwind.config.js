/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        interB: ["Inter Bold", "sans-serif"],
        interL: ["Inter Light", "sans-serif"],
      },
      colors: {
        ice: "#258EFF",
        gray: "#C7C7C7",
        orange: "#FFC56D",
        orangeDim: "rgba(255, 197, 109, 0.7)",
      },
      boxShadow: {
        orange: "2px 3px 6px 2px rgba(255, 197, 109, 0.25)",
      },
    },
  },
  plugins: [],
};
