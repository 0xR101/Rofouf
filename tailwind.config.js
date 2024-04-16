/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#533737",
        backGround: "#ECE1D1",
        secondaryColor: "#cabdb3",
        fontColorDarkBlue: "#0D0842",
        fontColorGray: "#6C6C6C",
        lightBrown50: "rgba(151, 134, 134, 0.5)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
