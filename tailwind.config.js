// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
