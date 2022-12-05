/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // "./srcJsHtml/**/*.{html,js}",
        "./srcJsHtml/**/*.js",
        "*.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
    ],
}