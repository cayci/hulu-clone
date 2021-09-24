export const mode = 'jit';
export const purge = ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'];
export const darkMode = false;
export const theme = {
  extend: {
    screens: {
      "3xl": "2000px",
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [require('tailwind-scrollbar-hide')];
