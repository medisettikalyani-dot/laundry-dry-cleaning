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
        oceanBlue: {
          DEFAULT: "#1D6F9E",
          hover: "#16587E",
          dark: "#114462",
          light: "#EBF5FA",
          50: "#F2F8FC",
          100: "#E1EFF7",
          200: "#C3DFEE",
          600: "#1D6F9E",
          700: "#16587E",
        },
        ecoGreen: {
          DEFAULT: "#74A72E",
          hover: "#618D24",
          dark: "#4D711B",
          light: "#F3F9EA",
          50: "#F7FCF2",
          100: "#EDF7DF",
          200: "#D8ECBD",
          600: "#74A72E",
          700: "#5E8923",
        },
        surface: {
          DEFAULT: "#F4F8FA",
          card: "#FFFFFF",
          muted: "#EBF3F7",
          border: "#E2EDF3",
        },
        cream: {
          DEFAULT: "#F4F8FA",
          50: "#F8FAFC",
          100: "#F4F8FA",
          200: "#EBF3F7",
        },
        beige: {
          DEFAULT: "#E2EDF3",
          100: "#FFFFFF",
          200: "#E2EDF3",
          300: "#D0E3ED",
        },
        burntOrange: {
          DEFAULT: "#1D6F9E",
          hover: "#16587E",
          dark: "#114462",
          light: "#EBF5FA",
        },
        mustard: {
          DEFAULT: "#74A72E",
          hover: "#618D24",
          light: "#F3F9EA",
        },
        royalBlue: {
          DEFAULT: "#1D6F9E",
          hover: "#16587E",
          light: "#EBF5FA",
        },
        charcoal: {
          DEFAULT: "#1E293B",
          muted: "#475569",
          light: "#64748B",
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
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
