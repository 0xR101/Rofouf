/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#533737",
        backGround: "#ECE1D1",
        secondaryBackground: "#FFF3E1",
        secondaryColor: "#cabdb3",
        fontColorDarkBlue: "#0D0842",
        fontColorGray: "#6C6C6C",
        plaster: "#978686",
        danger: "#ED4337",
        bookStatus: "#D9D9D9",
        Placeholder: "#5A5A5A",
        lightBrown50: "rgba(151, 134, 134, 0.5)",
      },
    },
    fontFamily: {
      poppins: ['poppins'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
