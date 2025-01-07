import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Base colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Custom colors
        "dashboard-teal": {
          light: "#E6FFFA",
          DEFAULT: "#0D9488",
          dark: "#0F766E"
        },
        "dashboard-neutral": {
          100: "#F6F6F7",
          200: "#EEEEF1",
          300: "#E1E1E6",
          400: "#8E9196"
        }
      },
      keyframes: {
        "card-hover": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-5px)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "card-hover": "card-hover 0.3s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;