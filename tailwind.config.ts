import type { Config } from "tailwindcss";
const { colors: defaultColors } = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "custom-dark-blue":"#030A8C"
      },
      width:{
        "191":"764px",
        "200":"800px"
      },
      maxHeight:{
        "150":"600px"
      }
    },
  },
  plugins: [],
};
export default config;
