/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    colors: {
      primary: "#8EC641",
      secondary: "#A3D75A", // Lighter shade of primary
      warning: "#759C2E", // Darker shade of primary
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
};
export const plugins = [];
