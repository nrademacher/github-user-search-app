module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // or false or 'class'
    theme: {
        backgroundColor: {
            "pure-blue": "#0079FF",
            "pure-blue-light": "#60ABFF",
            "splashed-white": "#FEFEFE",
            "ghost-white": "#F6F8FF",
            "medium-jungle-green": "#1E2A47",
            "dark-jungle-green": "#141D2F",
        },
        colors: {
            "pure-blue": "#0079FF",
            "ucla-blue": "#4B6A9B",
            "black-blue": "#222731",
            "slate-gray": "#697c9a",
            charcoal: "#2B3442",
            white: "#FFFFFF",
            error: "#F74646",
        },
        boxShadow: {
            DEFAULT: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567);",
            none: "none",
        },
        borderRadius: {
            DEFAULT: "15px",
            sm: "10px",
            full: "9999px",
        },
        fontFamily: {
            sans: "'Space Mono', sans-serif",
            body: "'Space Mono', sans-serif",
            heading: "'Space Mono', sans-serif",
        },
        fontSize: {
            base: ["15px", "25px"],
            h1: ["26px", "38px"],
            h2: ["22px", "33px"],
            h3: ["16px", "24px"],
            h4: ["13px", "20px"],
            search: ["18px", "25px"],
            stat: ["22px", "32px"],
        },
        fontWeight: {
            body: 400,
            h1: 700,
            h2: 700,
            h3: 400,
            h4: 400,
            stat: 700,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
}
