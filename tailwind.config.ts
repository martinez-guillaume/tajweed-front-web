import type { Config } from "tailwindcss";
export default {
  content: [  "./src/**/*.{html,ts}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {} },
  plugins: [],
} satisfies Config;