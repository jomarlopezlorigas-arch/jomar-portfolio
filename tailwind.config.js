/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  colors: {
    background: "#0B0F19",
    card: "#111827",
    primary: "#6366F1",
    secondary: "#22D3EE",
    textMain: "#F9FAFB",
    textSub: "#9CA3AF",
  },

    },
  },
  plugins: [],
};
