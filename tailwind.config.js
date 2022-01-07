module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
      "./src/components/*.{js,jsx}",
    ],
    safelist: [
      "after:bg-[#5ECFA5]",
      "after:bg-[#6C8E70]",
      "after:bg-[#A99A86]",
      "after:bg-[#BBA038]",
    ],
  },
  theme: {
    fontFamily: {
      sans: ["IBM-Plex-Sans", "sans-serif"],
      title: ["IBM-Plex-Mono", "sans-serif"],
    },
    colors: {},
    extend: {
      fontSize: {
        "2.5xl": [
          "1.675rem",
          {
            lineHeight: "2rem",
          },
        ],
      },
      colors: {
        "primary-default": "var(--primary-default)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "gray-default": "var(--gray-default)",
        "gray-dark": "var(--gray-dark)",
        "gray-darker": "var(--gray-darker)",
        "text-white": "var(--text-white)",
        "text-gray": "var(--text-gray)",
        "text-gray-dark": "var(--text-gray-dark)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
