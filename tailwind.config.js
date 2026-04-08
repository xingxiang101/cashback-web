/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#fbf4ff",
        background: "#fbf4ff",
        "on-surface": "#33284f",
        "on-surface-variant": "#61557f",
        primary: "#4f30f8",
        "primary-container": "#9c93ff",
        "on-primary": "#f5f0ff",
        "on-primary-container": "#1b007b",
        secondary: "#6747b0",
        "secondary-container": "#dac9ff",
        "on-secondary-container": "#52319a",
        tertiary: "#006a39",
        "tertiary-container": "#61fb9f",
        "on-tertiary-container": "#005d31",
        "tertiary-fixed": "#61fb9f",
        "surface-container": "#eee4ff",
        "surface-container-high": "#e9ddff",
        "surface-container-low": "#f6edff",
        "surface-container-highest": "#e4d6ff",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#b4a6d5",
        "inverse-surface": "#12062c",
        /** Text on inverse (dark) surfaces — must stay light for WCAG on #12062c */
        "inverse-on-surface": "#e8e0f4",
        "inverse-primary": "#c4b5ff",
        "primary-fixed": "#9c93ff",
        "primary-dim": "#4317ed",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      fontFamily: {
        headline: ["Manrope", "Noto Sans TC", "system-ui", "sans-serif"],
        body: ["Inter", "Noto Sans TC", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ambient: "0 20px 40px rgba(79, 48, 248, 0.08)",
      },
    },
  },
  plugins: [],
};
