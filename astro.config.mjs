import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://abdullahnettoor.com",
  output: "static",
  trailingSlash: "never",
  integrations: [sitemap()],
  build: {
    format: "directory"
  }
});
