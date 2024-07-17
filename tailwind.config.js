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
        forest: "#001502",
        emerald: "#094E0F",
        gray: "#C7C7C7",
        orange: "#FFC56D",
      },
      boxShadow: {
        orange: "2px 3px 6px 2px rgba(255, 197, 109, 0.25)",
      },
    },
  },
  plugins: [],
};
