import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      // NOTE custom class props
      // spacing: {
      //   13: '3rem'
      // },

      colors: {
        // 'prime': '#EB493C',
        'prime': '#2563eb',
        'br': '#02070D',
        'bgclr': '#F5F5F5'

      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '30px',
        'h4': '24px',
        'h5': '20px',
        'h6': '16px',
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "globe": "url('../public/globe.jpg')",
        // "loginbg": "url('../public/home/log.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
