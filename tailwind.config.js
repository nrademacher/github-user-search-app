const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media", // or false or 'class'
    theme: {
        colors: {
            "pure-blue": "#0079FF",
            "slate-gray": "#697c9a",
            "ucla-blue": "#4B6A9B",
            charcoal: "#2B3442",
            "ghost-white": "#F6F8FF",
            "splashed-white": "#FEFEFE",
            white: "#FFFFFF",
            "dark-jungle-green": "#141D2F",
            "medium-jungle-green": "#1E2A47",
        },
        fontFamily: {
            sans: "'Space Mono', sans-serif",
            body: "'Space Mono', sans-serif",
            heading: "'Space Mono', sans-serif",
        },
        fontSize: {
            body: ["15px", "25px"],
            h1: ["26px", "38px"],
            h2: ["22px", "33px"],
            h3: ["16px", "24px"],
            h4: ["13px", "20px"],
        },
        fontWeight: {
            body: 400,
            h1: 700,
            h2: 700,
            h3: 400,
            h4: 400,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities(
                {
                    ".optimize-legibility": {
                        "text-rendering": "optimizeLegibility",
                    },
                },
                ["responsive", "hover"]
            )
        }),
    ],
}
