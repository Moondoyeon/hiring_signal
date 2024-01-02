/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    screens: {
      mobile: { max: '599px' },
      tablet: { min: '600px', max: '1199px' },
      laptop: { min: '1200px', max: '1535px' },
      desktop: { min: '1536px' },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
  darkMode: 'class',
};
