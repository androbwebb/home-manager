import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F3",
          100: "#F4EFE6",
          200: "#EBE3D4",
          300: "#DDD0BB",
        },
        sand: {
          200: "#E5D8C2",
          300: "#CDBA9B",
          400: "#B89A75",
          500: "#A07F5B",
        },
        clay: {
          400: "#9C7B5C",
          500: "#7E5E45",
          600: "#5E4530",
        },
        espresso: {
          700: "#3A2A1F",
          800: "#2A1E15",
          900: "#1B130D",
        },
        ink: "#221814",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        card: "0 30px 80px -30px rgba(40, 25, 15, 0.35)",
        soft: "0 20px 60px -25px rgba(40, 25, 15, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
