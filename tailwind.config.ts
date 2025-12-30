import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#258cf4",
        "background-light": "#f5f7f8",
        "background-dark": "#101922", // Nuevo color del HTML
        "surface-dark": "#1b2127",    // Nuevo color del HTML
        "border-dark": "#3b4754",     // Nuevo color del HTML
      },
      fontFamily: {
        "display": ["var(--font-inter)", "sans-serif"],
        "sans": ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
};
export default config;