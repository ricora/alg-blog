import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  site: "https://alg.tus-ricora.com/",
  integrations: [tailwind(), solidJs(), mdx()],
})
