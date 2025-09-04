import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"OneStoreMobileGothicTitleFont"', "ui-sans-serif", "system-ui"],
        display: [
          "OneStoreMobileGothicTitleFont",
          "Pretendard Variable",
          "ui-sans-serif",
          "system-ui",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
        ],
        sans: [
          "GMarketSans",              
          "Pretendard Variable",
          "ui-sans-serif",
          "system-ui",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
        ],
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" },
      borderRadius: { "2xl": "1rem" },
    },
  },
  plugins: [],
} satisfies Config;
