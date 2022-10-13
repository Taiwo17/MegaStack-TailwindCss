/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Sora: ['Sora', ...defaultTheme.fontFamily.sans],
      },
      height: {
        18: '1.125rem',
        54: '3.375rem',
        92: '5.75rem',
        158: '9.875rem',
        295: '18.45rem',
        400: '25rem',
        766: '47.875rem',
      },
      width: {
        366: '22.875rem',
        400: '25rem',
        615: '38.4375rem',
        732: '45.75rem',
      },
      colors: {
        'menu-bg': '#fafafa',
        darkishBlack: '#111222',
        titleHeader: '#25284b',
        btnColor: '#55a5db',
        imgBg: '#f3f8fc;',
        lightDark: '#555556;',
        yellowish: '#f5a506;',
        footerBg: '#25284b',
        breadCrumb: '#9b9b9c;',
      },
      backgroundImage: {
        'mobile-hero': "url('/public/images/mobile_background.png')",
        'desktop-hero': "url('/public/images/blobs.png')",
      },
      lineHeight: {
        110: '110%',
        116: '116%',
        120: '120%',
        140: '140%',
        150: '150%',
        160: '160%',
      },
      fontSize: {
        25: '1.5625rem',
        32: '2rem',
        44: '2.75rem',
        56: '3.5rem',
        96: '96px',
      },
      padding: {
        60: '3.7788rem',
        88: '5.5rem',
        100: '6.25rem',
        130: '8.125rem',
        140: '8.75rem',
        176: '11rem',
        200: '12.5rem',
      },
      margin: {
        18: '1.125rem',
        72: '4.5rem',
        75: '4.6875rem',
      },
      borderWidth: {
        1: '.0625rem',
      },
    },
  },
  plugins: [],
};
