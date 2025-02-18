const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gradient: {
          from: "hsl(var(--gradient-from))",
          to: "hsl(var(--gradient-to))",
        },
        "dots-color": "hsl(var(--dots))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".bg-dots": {
          backgroundColor: "transparent",
          backgroundImage: `radial-gradient(transparent 1px, ${theme("colors.dots-color")} 1px)`,
          backgroundSize: "4px 4px",
          backdropFilter: "blur(3px)",
          mask: "linear-gradient(#000 60%, transparent)",
        },
        ".bg-dots-section": {
          position: "relative",
          zIndex: "1",
          backdropFilter: "blur(3px)",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: "0",
            zIndex: "-1",
            backgroundColor: "transparent",
            backgroundImage: `radial-gradient(transparent 1px, ${theme("colors.dots-color")} 1px)`,
            backgroundSize: "4px 4px",
            mask: "linear-gradient(transparent, #000 60%, transparent)",
          },
        },
        ".bg-dots-fade-y": {
          backgroundColor: "transparent",
          backgroundImage: `radial-gradient(transparent 1px, ${theme("colors.dots-color")} 1px)`,
          backgroundSize: "4px 4px",
          backdropFilter: "blur(3px)",
          mask: "linear-gradient(transparent, #000 60%, transparent)",
        },
        ".bg-dots-section-fade-y": {
          position: "relative",
          zIndex: "1",
          backdropFilter: "blur(3px)",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: "0",
            zIndex: "-1",
            backgroundColor: "transparent",
            backgroundImage: `radial-gradient(transparent 1px, ${theme("colors.dots-color")} 1px)`,
            backgroundSize: "4px 4px",
            mask: "linear-gradient(transparent, #000 60%, transparent)",
          },
        },
        ".bg-dots-fade-t": {
          backgroundColor: "transparent",
          backgroundImage: `radial-gradient(transparent 1px, ${theme("colors.dots-color")} 1px)`,
          backgroundSize: "4px 4px",
          backdropFilter: "blur(3px)",
          mask: "linear-gradient(to top, #000 60%, transparent)",
        },
      });

      addComponents({
        ".bg-gradient": {
          backgroundImage: `linear-gradient(90deg, ${theme("colors.gradient.from")} 0%, ${theme("colors.gradient.to")} 50%)`,
        },
        ".bg-gradient-hover": {
          backgroundImage: `linear-gradient(90deg, ${theme("colors.gradient.from")} 0%, ${theme("colors.gradient.to")} 50%)`,
        },
      });
    }),
  ],
};
