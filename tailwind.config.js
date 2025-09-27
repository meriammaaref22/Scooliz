/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          dark: "#4E342E",
          DEFAULT: "#8D6E63",
          light: "#C8A165",
        },
        beige: {
          DEFAULT: "#F5F5DC",
          light: "#FFF8E7",
        },
      },
    },
  },
  plugins: [],
}
