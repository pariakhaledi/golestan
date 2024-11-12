/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: "340px",
        desktop: "1000px",
      },
      filter: ["responsive", "hover", "focus"],
      backgroundColor: {
        main: "#E9E9E9",
        header: "#252525",
        hovermenue: "#2D2D2D",
        undermenue: "linear-gradient(190deg, #FBFBFB 0%, #D2D2D2 100%)",
        gap: "#E9D69F",
        undermagazine: "#CDE4B0",
        responsibility: "#105153",
        divider: "#828991",
        box1: "#F2F2F2",
        box2: "#DADADA",
      },
      height: {
        header: "90px",
        underheader: "430px",
      },
      colors: {
        menue: "#AFB2B4",
        redd: "#FF0000",
        golestan: "rgb(255, 0, 0)",
        grayy: "#7A7A7A",
        responsibility: "rgb(188, 190, 192)",
        tiongs: "#b29e6b",
      },
      backgroundImage: {
        footer: "url('./public/image/background/2.png')",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-filters")],
};

