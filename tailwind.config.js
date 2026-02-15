/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Luxury colors
        onyx: {
          DEFAULT: "#0E0E0E",
          dim: "#050505",
          highlight: "#1A1A1A"
        },
        ether: {
          DEFAULT: "#F5F5F5",
          muted: "#52525B"
        },
        indigo: {
          DEFAULT: "#6366F1",
          glow: "rgba(99, 102, 241, 0.5)"
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.08)"
        }
      },
      fontFamily: {
        mono: ['"Inter"', 'sans-serif'], // Swapped to cleaner look for "mono" spots if needed, or keep for code
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Inter"', 'sans-serif'], // Placeholder for Satoshi if we had it
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        glow: "0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)",
        "glow-lg": "0 0 20px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3), 0 0 60px rgba(0, 255, 65, 0.2)",
        "glow-xl": "0 0 40px rgba(0, 255, 65, 0.5), 0 0 80px rgba(0, 255, 65, 0.3), 0 0 120px rgba(0, 255, 65, 0.2)",
        neon: "0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 40px #00FF41",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 255, 65, 0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(0, 255, 65, 0.8), 0 0 50px rgba(0, 255, 65, 0.4)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "typing": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink": {
          "50%": { borderColor: "transparent" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-60px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(60px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.8)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "rotate-in": {
          from: { opacity: "0", transform: "rotate(-15deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotate(0) scale(1)" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "flip-in": {
          from: { opacity: "0", transform: "rotateY(-90deg)" },
          to: { opacity: "1", transform: "rotateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 20px #00FF41"
          },
          "50%": {
            boxShadow: "0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 40px #00FF41, 0 0 80px #00FF41"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "typing": "typing 2s steps(40, end)",
        "blink": "blink 0.7s step-end infinite",
        "fade-in": "fade-in 0.6s ease forwards",
        "slide-in-left": "slide-in-left 0.6s ease forwards",
        "slide-in-right": "slide-in-right 0.6s ease forwards",
        "scale-in": "scale-in 0.5s ease forwards",
        "rotate-in": "rotate-in 0.7s ease forwards",
        "bounce-in": "bounce-in 0.8s ease forwards",
        "flip-in": "flip-in 0.7s ease forwards",
        "shimmer": "shimmer 3s infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "wiggle": "wiggle 0.5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "glitch": "glitch 0.3s ease",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "bounce": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
