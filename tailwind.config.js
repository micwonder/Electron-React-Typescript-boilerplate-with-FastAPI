/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CB5A6F',
        primaryHover: '#C75167',
        primaryDisabled: '#F4AAB7',
        primaryBgColor: '#EBEBEB',
        secondaryBgColor: '#FFFFFF',
        sectionBgColor: '#F5F5F5',
        primaryButtonTextColor: '#F9F9F9',
        navItemTextColor: '#020202',
        bannerTextColor: '#5A5A5A',
        footerDescColor: '#8D8D8D',
        dashboardBgColor: '#F2F1F1',
        dashboardDecColor: '#D2D2D2',
        textdarkColor: '#282828',
        distlineColor: '#828282',
        forgotColor: '#4285F4',
        loginBtnColor: '#F7F7F7',
        signinTextColor: '#121212',
        borderGreyColor: '#c4c4c4',
        borderSelectColor: '#DA123B',
        passwordMediumColor: '#FFDB72',
        passwordStrongColor: '#2BFA62'

      },
      fontSize: {
        bigPrimaryButtonTextSize: '20px',
        smallPrimaryButtonTextSize: '16px',
        bannerTextSize: '60px',
        footerTextSize: '17px',
        footerDescSize: '16px',
        adTitleBigSize: '45px',
        adTitleSmallSize: '25px',
        adDescBigSize: '30px',
        adDescSmallSize: '20px',
        loginBtnTextSize: '16px'

      },
      fontFamily: {
        'sans': ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'arial': ['FrutigerLTStd', 'Helvetica', 'Arial', 'sans-serif'],
        'yamamoto': ['Yantramanav', 'Arial', 'sans-serif'],
        'SFProDisplay': ['SF Pro Display', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'services-banner': 'url("/images/services_banner.png")',
      },
      screens: {
        'sm': { 'min': '0px', 'max': '423px' },
        'md': { 'min': '424px', 'max': '959px' },
        'lg': { 'min': '960px', 'max': '1169px' },
        'xl': { 'min': '1170px', 'max': '1375px' },
        '2xl': { 'min': '1376px', 'max': '1499px' },
        '3xl': { 'min': '1500px', 'max': '1750px' },
        '4xl': { 'min': '1750px' },
      }
    },
  },
  variants: {},
  plugins: [],
};
