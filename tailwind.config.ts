import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-green": "#3E8948",
        green: "#03341C",
        yellow: "#FEE109",
        orange: "#D37724",
        "green-yellow": "#664F0C",
        "light-brown": "#884B2B",
        brown: "#481C04",
      },
      fontFamily: {
        pixel: "var(--font-pixel-operator)",
      },
      maxWidth: {
        desktop: "1192px",
      },
    },
  },
  plugins: [],
};
export default config;
