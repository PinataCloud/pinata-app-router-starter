const { fontFamily, backgroundPosition } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', ...fontFamily.sans],
        serif: [...fontFamily.serif],
        agrandir: ['Agrandir', ...fontFamily.sans],
        telegraf: ['Telegraf', ...fontFamily.sans],
      },
      colors: {
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        light: "var(--color-light)",
      },
      backgroundImage: {
        "heroImage": "url('/bg.png')",
      },
      keyframes: {
        animategradient: {
          '0%, 50%': { backgroundPosition: '0%, 50%' },
          '50%, 100%': { backgroundPosition: '100%, 50%' },
          '100%, 50%': { backgroundPositionposition: '0%, 50%' }
        }

      },
    },
  },
  plugins: [],
}

