import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          DEFAULT: "#F8F0E7",
          50: "#FCF8F3",
          100: "#F8F0E7",
          200: "#F0E1D2",
        },
        beige: {
          DEFAULT: "#E9D9C9",
          100: "#F2E8DE",
          200: "#E9D9C9",
          300: "#D8C2AC",
        },
        burntOrange: {
          DEFAULT: "#C74708",
          hover: "#AF3C05",
          dark: "#943304",
          light: "#FDF2EC",
        },
        mustard: {
          DEFAULT: "#F9C943",
          hover: "#E8B830",
          light: "#FEF7E3",
        },
        royalBlue: {
          DEFAULT: "#2869AE",
          hover: "#215792",
          light: "#EAF1F8",
        },
        charcoal: {
          DEFAULT: "#202020",
          muted: "#4F4F4F",
          light: "#787878",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
