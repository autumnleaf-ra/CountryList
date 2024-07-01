/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-theme": "hsl(211, 21%, 22%)",
        "dark-theme-2": "hsl(207, 25%, 17%)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
