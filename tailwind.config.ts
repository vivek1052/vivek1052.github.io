import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        card: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        bar: "bar 500ms ease-in-out",
        card: "card 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
