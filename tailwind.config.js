/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sansKr: ['var(--font-noto-sans-kr)'],
        gown: ['var(--font-gown-batang)'],
        gownDodum: ['var(--font-gown-dodum)'],
        song: ['var(--font-song-myung)'],
      },
    },
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
