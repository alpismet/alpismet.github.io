import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gmd-popper.portfolio", // Demo URL
  integrations: [preact(), mdx(), sitemap(), tailwind()],
  server: {
    port: 3000,
  },
});
