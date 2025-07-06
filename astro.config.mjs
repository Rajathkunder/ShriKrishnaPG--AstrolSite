import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://srikrishnapg.com",
  integrations: [tailwind()],
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
