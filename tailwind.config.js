/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                peach: "#FFDAB9",
                lavender: "#E6E6FA",
                mint: "#B0E0E6",
                skyBlue: "#FADBD8",
                lemon: "#FFFACD",
                palePink: "#FADADD",
            },
        },
    },
    plugins: [],
};
