/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-fira-code)"],
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        // sm: "1.5rem",
        // md: "2rem",
      },
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        // xl: "1280px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // '2xl': '1536px',
    },
  },
  plugins: [],
};
