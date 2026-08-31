// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://devil-line.com",
    base: "/",
    // trailingSlash: 'always',
    redirects: {
        "/": "/de",
        "/events": "/de/events",
        "/contact": "/de/contact",
        "/spots": "/de/spots",
        "/videos": "/de/videos",
        "/events/training-wittensee": "/de/events/training-wittensee",
        "/events/fjord-opening": "/de/events/fjord-opening",
        "/events/fjord-opening/2020": "/de/events/fjord-opening/2020",
        "/events/fjord-opening/2022": "/de/events/fjord-opening/2022",
        "/privacy-policy": "/de/privacy-policy",
    },
    integrations: [
        alpinejs(),
        playformInline({
            Beasties: {
                pruneSource: false,
            },
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
