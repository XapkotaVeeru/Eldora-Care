/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B4332",    // Deep Forest Green
        background: "#FDF8F0", // Warm Cream
        accent: "#D4860A",     // Golden Amber
        emotional: "#F4A896",  // Soft Rose
        charcoal: "#222222",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}