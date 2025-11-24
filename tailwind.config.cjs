/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: "#000000",
                    white: "#ffffff",
                    grey: "#333333",
                    lightGrey: "#f4f4f4",
                    accent: "#e6e6e6", // Light grey accent often used in backgrounds
                },
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"],
                sans: ["var(--font-sans)", "sans-serif"],
            },
            letterSpacing: {
                wider2: ".2em",
            },
        },
    },
    plugins: [],
};
