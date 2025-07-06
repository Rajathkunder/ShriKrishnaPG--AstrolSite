import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://srikrishnapg.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
