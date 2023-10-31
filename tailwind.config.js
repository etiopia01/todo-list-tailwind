/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {"Very-Dark-Blue": "hsl(235, 21%, 11%)",
    "Very-Dark-Desaturated-Blue" : "hsl(235, 24%, 19%)",
   "Light-Grayish-Blue": "hsl(234, 39%, 85%)",
   "Light-hover-Blue": "hsl(236, 33%, 92%)",
    "Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
   "Very-Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
   "Bright-Blue": "hsl(220, 98%, 61%)",
"Background" : "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)"
     },
    extend: {

    },
  },
  plugins: [],
}

