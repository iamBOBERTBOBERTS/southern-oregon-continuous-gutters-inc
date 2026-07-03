import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050607",
        charcoal: "#111418",
        aluminum: "#c7d0d8",
        rain: "#42a5d5",
        amber: "#f3ad45"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(66, 165, 213, 0.25)",
        amber: "0 0 28px rgba(243, 173, 69, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
