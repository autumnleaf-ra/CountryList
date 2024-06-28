/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-theme": "hsl(211, 21%, 22%)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
