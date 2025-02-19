import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "2xl": "1064px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
    },
    extend: {
      colors: {
        offYellow: "#F3B72C",
        offWhite: "#F5F5F5",
        darkBlack: "#1D1D1B",
        lightRed: "#FF132D",
      },
      backgroundImage: {
        heroBgImg: "url('/assets/images/webp/hero-bg-img.webp')",
        youtubeBgImg: "url('/assets/images/webp/youtube-bg-img.webp')",
      },
      fontSize: {
        customXl: "21px",
        custom2Xl: "49px",
        custom3Xl: "76px",
        custom4xl:"80px",
      },
    },
  },
  plugins: [],
} satisfies Config;
