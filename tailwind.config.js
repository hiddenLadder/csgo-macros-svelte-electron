/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/index.html',
    './src/renderer/src/**/*.{svelte,js}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1C1B21',
        'secondary': '#26272C',
        'content': '#E2E2E2',
        'content-secondary': '#56555A',
        'misc-color': '#6C6C70'
      }
    },
  },
  plugins: [],
}
