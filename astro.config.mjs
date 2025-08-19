// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https:/MattisJensen.github.io",
    base: "/homepage-devil-line",
    // trailingSlash: 'always',
    integrations: [
        alpinejs(),
        playformInline({
            Beasties: true,
        }),
        mdx(),
        icon(),
    ],
    output: "static",
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
