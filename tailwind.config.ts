import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2a2a2a",
        },
        green: {
          primary: "#367C2B",
          dark: "#2a6122",
          light: "#4a9e3d",
          muted: "#5cb84f",
        },
        yellow: {
          accent: "#FFCC00",
          dark: "#e6b800",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EBE3",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
