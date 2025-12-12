import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gmd-popper.portfolio", // Demo URL
  integrations: [preact(), mdx(), sitemap()],
  server: {
    port: 3000,
  },
});
