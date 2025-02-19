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
      padding: '16px',
      screens: {
        '2xl': '1064px',
        'lg': '992px',
        'md': '768px',
        'sm': '576px',
      },
    },
    extend: {
      colors: {
       
      },
      backgroundImage:{
        heroBgImg: "url('/assets/images/webp/hero-bg-img.webp')",
        youtubeBgImg:"url('/assets/images/webp/youtube-bg-img.webp')"
      },
    },
  },
  plugins: [],
} satisfies Config;
