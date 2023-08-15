/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#ffffff',
        'secondary' : '#f5f5f9' ,
        'tertiary' : '#824ffb',
        'tertiary-light': '#dacafe'
      },
    },
  },
  plugins: [],
}

