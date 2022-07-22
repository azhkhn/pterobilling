/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.{blade.php,tsx,css,ts}"],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
