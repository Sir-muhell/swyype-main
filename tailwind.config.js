/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ["clash-display"],
        "SpaceGrotesk-Bold": ["SpaceGrotesk-Bold"],
        "SpaceGrotesk-SemiBold": ["SpaceGrotesk-SemiBold"],
        "SpaceGrotesk-Medium": ["SpaceGrotesk-Medium"],
        "SpaceGrotesk-Light": ["SpaceGrotesk-Light"],
        "SpaceGrotesk-Regular": ["SpaceGrotesk-Regular"],
      },
      colors: {
        swyype: {
          blue: "#113AA3",
          yellow: "#EAA801",
          white: "#FFFFFF",
          black: "#000000"
        }
      },
      animation: {
        arrow: "arrow 1s linear infinite"
      },
      keyframes: {
        arrow: {
          "0%": {
            transform: "translateX(-10%)"
          },
          "100%": {
            transform: "translateX(20%)"
          },
        }
      },
      screens: {
        "iphone-se": "320px",
        "xiaomi": "360px",
        "iphone": "375px",
        "iphone-12": "390px",
        "iphonexr": "414px",
        "iphone12": "428px",
        "ipad-mini": "768px",
        "ipad-air": "820px",
        "fold": "884px",
      }
    },
  },
  plugins: [],
}