/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      black : "#000000",
      yellow: "#FFF734",
      green: "#68F590",
      grey: "#F3F3F3" , 
      "green-light":"#d2eff1",
      white : "#fff",
      lightCiyan : "#C0C0C0",
      Orange : "#E18A07",
      lightOrange : "#dfc59e"
      
    },

    fontFamily:{
      sans:["Georgia","sans-serif"],
      sans1: ['Bebas Neue', 'sans-serif'],
      serif:["Merriweather","serif"],
      display: ['Oswald','sans-serif'],
    },

    fontSize :{
      sm:   "0.8rem",
      base: "1rem",
      lg:   "1.15rem",
      xl:   "1.25rem",
      "2xl":  "1.563rem",
      "3xl":  "1.953rem",
      "4xl":  "2.4414rem",
      "5xl":  "3.052rem",
      "6xl":  "3.5rem",
    },
    extend: { 
      screens :{
        sm:"640px",
        // =>@media (min-width: 640px) 

        md:"768px",
        //=> @media (min-width: 768px
        
        lg: "1024px",
        //=> @media (min-width : 1024)

        xl: "1280px",
        //=> @media (min-width : 1280px)

        "2xl": "1536px",
        //=> @media (min-width : 1536px)

      }
    },
  },
  plugins: [],
}
