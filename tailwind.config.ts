import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        pink1: "#FF81AC",
        pink2: "#E44D80",
        pink3: "#FF3F80",
        pink4: "#E2E2E2",
        pink5: "#FFFAFB",
        blue1: "#5072EA",
        blue2: "#3F5ECD",
      }
    },
    
  },
  plugins: [],
};
export default config;
