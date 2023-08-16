/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1BD760',
                background: {
                    500: '#282828',
                    600: '#232323',
                    700: '#181818',
                    800: '#121212',
                    900: '#000000',
                },
                text: {
                    50: '#FFFFFF',
                    200: '#B9B9B9',
                    300: '#A7A7A7',
                    350: '#868686',
                    400: '#696969',
                },
            }
        },
    },
    plugins: [],
}