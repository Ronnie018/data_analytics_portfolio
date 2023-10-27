/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        bar: '0px 0px 8px 0px rgba(16, 16, 16, 0.76)',
      },
      screens: {
        xsm: '500px',
        xxsm: '400px',
      },

      colors: {
        dark: '#1a1a1a',
        primary: '#FF8A00',
        primary_highlight: '#FFA400',
        primary_light: '#FFA53A',
        primary_subtitle: '#FFEBC7',
      },
    },
  },
  plugins: [],
};
