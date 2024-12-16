import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-interstate)"],
        sono: ["var(--font-sono)"],
      },
      colors: {
        bg: "var(--background)",
        fg: "var(--foreground)",
        oRed: "var(--oRed)",
        oBlue: "var(--oBlue)",
        oPurple: "var(--oPurple)",
        oPrimary: "var(--oPrimary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
