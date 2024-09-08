/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1.5: "1.5px",
    },
    extend: {
      colors: {
        "hero-color": "#F8F6E4",
        "text-color": "#111111",
        "button-color": "#399866",
        "button-border-color": "#16442C",
        "circle-color": "#FDC137",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        manuale: ["Manuale", "serif"],
      },
    },
  },
  plugins: [],
};
