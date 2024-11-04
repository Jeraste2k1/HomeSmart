/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{'16':'16rem'},
      Top:{'22':'22%'},
    },
  },
  plugins: [require ("@tailwindcss/forms")],
}
