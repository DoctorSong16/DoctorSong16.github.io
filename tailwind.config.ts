import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'maize': '#FFF385',
        'smoky-black': '#0F0D00',
        'ut-orange': '#FF850A',
        'dark-spring-green': '#007A4E',
        'indigo-dye': '#004166'
      },
      fontFamily: {
        mono: "var(--font-geist-mono)",
        ibarraRealNova: ["var(--font-ibarra-real-nova)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
