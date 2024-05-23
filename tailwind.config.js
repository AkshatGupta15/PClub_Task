/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        subheading : "#6b7280",
        links : "#0673F0",
        success : "#2EA44E",
        sub2 : "#9099B3"
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}

