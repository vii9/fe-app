module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        192: "48rem",
        94: "28.75rem",
        101: "38.5rem",
      },
      height: {
        160: "40rem",
      },
      boxShadow: {
        // material 32
        "3xl":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
      animation: {
        spin: "spin 3s linear infinite",
        bounce: "bounce 2s infinite"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
