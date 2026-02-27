import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  root: "./apps",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@multi-step-form/ui": resolve(__dirname, "./packages/ui/src"),
    },
  },
  server: {
    fs: {
      // allow serving files from the ui package and the apps root
      allow: [
        resolve(__dirname, "./packages/ui"),
        resolve(__dirname, "./packages/ui/src"),
        resolve(__dirname, "./apps"),
      ],
    },
    watch: {
      // use absolute negation so chokidar doesn't ignore the external src
      ignored: [
        "**/node_modules/**",
        `!${resolve(__dirname, "packages/ui/src")}/**`,
      ],
    },
  },
  optimizeDeps: {
    // don't pre-bundle the local workspace package — let Vite load source for HMR
    exclude: ["@multi-step-form/ui"],
  },
});
