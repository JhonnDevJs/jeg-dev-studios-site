// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... resto de tu config ...
  plugins: [
    require('@tailwindcss/typography'), // <--- Agrega esto
  ],
};
export default config;