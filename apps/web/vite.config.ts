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
    },
  },
  server: {
    fs: {
      allow: [
        resolve(__dirname, "../../packages/ui"),
        resolve(__dirname, "../../packages/ui/src"),
        __dirname,
      ],
    },
    watch: {
      ignored: [
        "**/node_modules/**",
        `!${resolve(__dirname, "../../packages/ui/src")}/**`,
      ],
    },
  },
  optimizeDeps: {
    // don't pre-bundle the local workspace package — let Vite load source for HMR
    exclude: ["@multi-step-form/ui"],
  },
});

