import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  base: "/movie-rating",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "assets"
  },
  plugins: []
});
