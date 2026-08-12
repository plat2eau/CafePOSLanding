import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#17283B",
        orange: "#F59E0B",
        teal: "#2A9D8F",
        warm: "#FFF9F2",
        charcoal: "#1E2329",
        surface: "#F4F6F8",
        border: "#D9DEE3",
        muted: "#667085",
      },
      borderRadius: {
        button: "10px",
        card: "12px",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
