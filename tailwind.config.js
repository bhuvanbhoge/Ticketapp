/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#4B3F72", // Beige
        page: "#F5F5F5", // Light Beige (background)
        card: "#8E735B", // Brown
        "card-hover": "#9C836C", // Lighter Brown
        "default-text": "black", // Dark Gray if not liked use #D4B9A0
        "blue-accent": "#B7A0A8", // Light Beige
        "blue-accent-hover": "#D4B9A0", // Even Lighter Beige

        /*
        // Dark theme colors
        'dark-nav': '#1F1F1F', // Dark Gray
        'dark-page': '#121212', // Dark background
        'dark-card': '#333333', // Darker card
        'dark-card-hover': '#444444', // Slightly lighter dark card
        'dark-text': '#E0E0E0', // Light text
        'dark-blue-accent': '#2D2D2D', // Darker accent
        'dark-blue-accent-hover': '#3C3C3C', // Darker hover accent 
        */
      },
    },
  },
  plugins: [],
};
