/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        // Add your custom fonts
        body: ["Poppins", "sans-serif"],
      },

      colors: {
        colorCodGray: "#191919",
        colorOrangyRed: "#8104d4",
        colorLinenRuffle: "#b874f4",
        colorViolet: "#341166",
        colorGreen: "#ff7900",
      },
    },
  },
  plugins: [],
}

