/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1AB394", // Default primary color
          dark: "#0e6b5c", // Dark variant
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          "@apply px-4 py-0 rounded-lg whitespace-nowrap outline-none border-none font-normal text-base":
            {},
        },
        ".btn-primary": {
          "@apply bg-primary text-white hover:bg-primary-dark": {},
        },
        ".btn-primary-outline": {
          "@apply ring ring-2 ring-inset bg-transparent ring-[#1AB394] text-[#08a384] hover:bg-[#08a384] hover:text-white hover:ring-0":
            {},
        },
        ".btn-secondary": {
          "@apply bg-gray-500 text-white hover:bg-gray-600": {},
        },
        ".btn-success": {
          "@apply bg-green-500 text-white hover:bg-green-600": {},
        },
        ".btn-danger": {
          "@apply bg-red-500 text-white hover:bg-red-600": {},
        },
      });
    },
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
