/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2596BE",
      },
      backgroundImage: {
        "primary-hero":
          "linear-gradient(to right, #2596BE, #1b7fa6, #166b8c)",
      },
    },
  },
  plugins: [],
};