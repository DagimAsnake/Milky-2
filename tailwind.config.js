/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBackground: "#FDF8EE",
        brightGreen: "#DDE6ED",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
}

