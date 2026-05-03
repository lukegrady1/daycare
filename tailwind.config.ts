import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF6EF",
          deep: "#F2EBDD",
        },
        ink: {
          DEFAULT: "#2A2520",
          soft: "#5C5147",
        },
        terracotta: {
          DEFAULT: "#C8633C",
          deep: "#A14E2C",
        },
        sage: "#7A8B5C",
        butter: "#F0C674",
        sky: "#A8C5D6",
        line: "#E5DDC8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      fontSize: {
        body: ["1.0625rem", { lineHeight: "1.65" }],
      },
      letterSpacing: {
        tightish: "-0.02em",
        tighter2: "-0.03em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,37,32,0.04), 0 6px 18px rgba(42,37,32,0.06)",
        card: "0 1px 0 rgba(42,37,32,0.04), 0 12px 32px -12px rgba(42,37,32,0.18)",
        polaroid: "0 18px 36px -16px rgba(42,37,32,0.35)",
      },
      maxWidth: {
        prose: "65ch",
      },
      animation: {
        "draw-underline": "draw 1.2s 0.6s ease-out forwards",
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: "300" },
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
