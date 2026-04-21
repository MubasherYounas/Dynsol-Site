// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        xs: "425px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1520px",
      },

      boxShadow: {
        soft: "0 2px 8px 0 rgba(0, 0, 0, 0.08)",
        medium: "0 4px 16px 0 rgba(0, 0, 0, 0.12)",
        light: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
        customShadow: "0 0 20px 0 rgba(255, 255, 255, 0.7)",
      },

      colors: {

        primary:"#E3E0DA", 
        
      /* Light Blue Palette */
        lightBlue50: "#F0F8FF",
        lightBlue100: "#E3F2FD",
        lightBlue200: "#BBDEFB",
        lightBlue300: "#90CAF9",
        lightBlue400: "#64B5F6",
        lightBlue500: "#42A5F5",
        lightBlue600: "#2196F3",

        /* Soft Mint Palette */
        mint50: "#F0FFFE",
        mint100: "#E0F7F6",
        mint200: "#B2EBE7",
        mint300: "#80DEDB",
        mint400: "#4DB8AC",
        mint500: "#26A69A",

        /* Neutral Colors */
        white: "#FFFFFF",
        lightGray: "#F5F5F5",
        gray50: "#FAFAFA",
        gray100: "#F5F5F5",
        gray200: "#EEEEEE",
        gray300: "#E0E0E0",
        gray400: "#BDBDBD",
        gray500: "#9E9E9E",
        gray600: "#757575",
        gray700: "#616161",
        gray800: "#424242",
        gray900: "#212121",
        darkText: "#1A1A1A",
        mediumText: "#424242",
        lightText: "#666666",

        /* Legacy Colors (kept for compatibility) */
        customBlue1: "#1C7CD4",
        customBlue2: "#005BA1",
        customBlue3: "#2F97FF",
        customBlue4: "#12609F",
        customMint: "#CAFFFC",
        customCyan: "#00FFFF",
        customAqua: "#00F0FF",
        customNavy: "#0B4383",
        customSky: "#3FA6F6",
        customTeal: "#16B3C3",
        customDarkGray: "#323232",
        customDarkBlue: "#006FDE",
        customMediumBlue: "#3C92DD",
        customBrightBlue: "#0D86FF",
        customLightBlue2: "#49B8FD",

        /* Secondary Color */
        accent: "#E57627",
      },
    },
  },

  plugins: [],
};
