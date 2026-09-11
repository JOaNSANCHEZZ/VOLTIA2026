import type { Config } from "tailwindcss";

/**
 * VOLTIA DESIGN SYSTEM
 * ---------------------------------------------------------------
 * Tokens centralizados. NADIE define colores/sombras/radios sueltos
 * en componentes: todo sale de aquí. Esto garantiza consistencia
 * visual absoluta en toda la app (regla del proyecto).
 *
 * Filosofía visual: Stripe + Linear + Tesla Energy.
 * Dark-first, acentos energéticos (cyan/eléctrico/esmeralda),
 * superficies en capas con glassmorphism sutil.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // --- Tokens semánticos (mapeados a CSS vars en globals.css) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        // --- Paleta de marca Voltia (energía) ---
        energy: {
          cyan: "hsl(var(--energy-cyan))",
          electric: "hsl(var(--energy-electric))",
          emerald: "hsl(var(--energy-emerald))",
          coral: "hsl(var(--energy-coral))",
          amber: "hsl(var(--energy-amber))",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        // Sombras suaves en capas, no el "drop-shadow" plano genérico
        soft: "0 1px 2px hsl(220 40% 2% / 0.04), 0 2px 8px hsl(220 40% 2% / 0.06)",
        card: "0 1px 3px hsl(220 40% 2% / 0.05), 0 8px 24px -8px hsl(220 40% 2% / 0.12)",
        elevated:
          "0 2px 4px hsl(220 40% 2% / 0.06), 0 16px 40px -12px hsl(220 40% 2% / 0.18)",
        glow: "0 0 0 1px hsl(var(--energy-emerald) / 0.15), 0 8px 32px -8px hsl(var(--energy-emerald) / 0.25)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.4) 1px, transparent 1px)",
        "energy-gradient":
          "linear-gradient(135deg, hsl(var(--energy-emerald)) 0%, hsl(var(--energy-cyan)) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
