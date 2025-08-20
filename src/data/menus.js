const base = import.meta.env.BASE_URL || "/";

export const menuMain = [
    {
        name: "Home",
        url: `/`,
        highlighted: false,
    },
    {
        name: "Events",
        url: `/events`,
        highlighted: false,
    },
    {
        name: "Spots",
        url: `/spots`,
        highlighted: false,
    },
    {
        name: "Videos",
        url: `/videos`,
        highlighted: false,
    },
    {
        name: "Kontakt",
        url: `/contact`,
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
