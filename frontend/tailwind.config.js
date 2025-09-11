export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D47A1",   // deep hospital blue (trust, authority)
        secondary: "#00ACC1", // vibrant teal (calm but alive)
        neutral: "#FAFAFA",   // clean background
        dark: "#1A1A1A",      // strong contrast for text
        accent: "#D32F2F",    // bold red (emergency/alerts)
        highlight: "#43A047", // fresh green (success, positive action)
        warning: "#F9A825",   // warmer amber
      },
    },
  },
  plugins: [],
};
