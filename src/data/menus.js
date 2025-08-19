const base = import.meta.env.BASE_URL || "/";

export const menuMain = [
    {
        name: "Home",
        url: `${base}/`,
        highlighted: false,
    },
    {
        name: "Events",
        url: `${base}/events`,
        highlighted: false,
    },
    {
        name: "Spots",
        url: `${base}/spots`,
        highlighted: false,
    },
    {
        name: "Videos",
        url: `${base}/videos`,
        highlighted: false,
    },
    {
        name: "Kontakt",
        url: `${base}/contact`,
        highlighted: false,
    },
];

export const home = `${base}/`;

export const footerPrimary = [
    {
        title: "Navigatie",
        items: [{ name: "home", url: "/" }],
    },
];

export const footerSecondary = [
    {
        title: "support",
        items: [{ name: "pricing", url: "/pricing" }],
    },
];

export const footerTertiary = [
    {
        title: "Links",
        items: [
            { name: "privacybeleid", url: "/privacy-policy" },
            { name: "api status", url: "/api-status" },
        ],
    },
];
