export default {
  darkMode: 'class', // <-- this is the key
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D47A1",
        secondary: "#00ACC1",
        neutral: "#FAFAFA",
        dark: "#1A1A1A",
        accent: "#D32F2F",
        highlight: "#43A047",
        warning: "#F9A825",
      },
    },
  },
  plugins: [],
};
