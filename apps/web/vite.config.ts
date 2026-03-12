import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@multi-step-form/ui": resolve(__dirname, "../../packages/ui/src"),
      "@multi-step-form/utils": resolve(__dirname, "../../packages/utils"),
    },
  },
  server: {
    fs: {
      allow: [
        resolve(__dirname, "../../packages/ui"),
        resolve(__dirname, "../../packages/ui/src"),
        resolve(__dirname, "../../packages/utils"),
        __dirname,
      ],
    },
    watch: {
      ignored: [
        "**/node_modules/**",
        `!${resolve(__dirname, "../../packages/ui/src")}/**`,
        `!${resolve(__dirname, "../../packages/utils")}/**`,
      ],
    },
  },
  optimizeDeps: {
    // don't pre-bundle local workspace packages — let Vite load source for HMR
    exclude: ["@multi-step-form/ui", "@multi-step-form/utils"],
  },
});

