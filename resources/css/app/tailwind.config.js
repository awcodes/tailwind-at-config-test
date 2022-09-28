const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const brandColors = {
    primary: {
        100: "#e6eef5",
        200: "#bfd4e6",
        300: "#99bad7",
        400: "#4d86b9",
        500: "#00529b",
        600: "#004a8c",
        700: "#003e74",
        800: "#00315d",
        900: "#00284c",
    },
    secondary: {
        100: "#e8e9ee",
        200: "#c7c9d5",
        300: "#a5a9bb",
        400: "#616888",
        500: "#1d2755",
        600: "#1a234d",
        700: "#161d40",
        800: "#111733",
        900: "#0e132a",
    },
    tertiary: {
        100: "#f4fbfd",
        200: "#e4f4fa",
        300: "#d4edf7",
        400: "#b4e0f1",
        500: "#94d3eb",
        600: "#85bed4",
        700: "#6f9eb0",
        800: "#597f8d",
        900: "#496773",
    },
    accent: {
        50: "#fef3f4",
        100: "#fde7e9",
        200: "#f9c4c8",
        300: "#f6a0a7",
        400: "#ef5865",
        500: "#e81123",
        600: "#d10f20",
        700: "#ae0d1a",
        800: "#8b0a15",
        900: "#720811",
    },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
        "!./resources/views/vendor/*",
    ],
    theme: {
        screens: {
            sm: "568px",
            md: "768px",
            lg: "1024px",
        },
        extend: {
            fontFamily: {
                display: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                link: {
                    DEFAULT: "#1367e3",
                    hover: "#094fb5",
                },
                gray: colors.slate,
                success: colors.emerald,
                danger: colors.rose,
                warning: colors.orange,
                ...brandColors,
            },
            animation: {
                slide: "slide 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            },
            keyframes: {
                slide: {
                    from: {
                        transform: "translateX(-100%)",
                    },
                    to: {
                        transform: "translateX(100%)",
                    },
                },
            },
        },
        textShadows: {
            DEFAULT: colors.slate[500],
            primary: brandColors.primary[500],
            secondary: brandColors.secondary[500],
            tertiary: brandColors.tertiary[500],
            accent: brandColors.accent[500],
            white: "#ffffff",
        },
    },

    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow-sm": (value) => ({
                        textShadow: `0 0 2px ${value}70`,
                    }),
                    "text-shadow": (value) => ({
                        textShadow: `0 0 3px ${value}70`,
                    }),
                    "text-shadow-md": (value) => ({
                        textShadow: `0 0 5px ${value}70`,
                    }),
                    "text-shadow-lg": (value) => ({
                        textShadow: `0 0 8px ${value}70`,
                    }),
                    "text-shadow-xl": (value) => ({
                        textShadow: `0 0 12px ${value}70`,
                    }),
                    "text-shadow-2xl": (value) => ({
                        textShadow: `0 0 16px ${value}70`,
                    }),
                },
                { values: theme("textShadows") }
            );
        }),
    ],
};
