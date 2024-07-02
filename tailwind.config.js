/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:
    {
      "sans": "Poppins",
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'theme': {
          "p": "var(--primary-color)",
          "a": "var(--accent-color)",
          "b":"var(--background-color)",
          "tc": "var(--text-color)",
          "lc": "var(--link-color)",
          "bc": "var(--button-color)",
          "cc": "var(--card-background-color)",

        },
      }
    },
  },
  plugins: [require("daisyui")],

}

// fontSize:{
//  'h1' : '500px',
//  'h2' : '400px',
// },   
