import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px', // Mobile
        lg: '1440px', // Desktop
      },
      colors: {
        // Primary
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        'instagram-start': 'hsl(37, 97%, 70%)', // For gradient
        'instagram-end': 'hsl(329, 70%, 58%)', // For gradient
        youtube: 'hsl(348, 97%, 39%)',
        'dark-gray': 'hsl(0.64, 0.17%, 0.14%)',

        // Dark Theme Toggle
        'toggle-dark':
          'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',

        // Light Theme

        'toggle-light': 'hsl(230, 22%, 74%)',

        // Dark Theme

        'very-dark-blue-bg': 'hsl(230, 17%, 14%)',
        'very-dark-blue-top-bg': 'hsl(232, 19%, 15%)',
        'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        'dark-gray-hover': 'hsl(227.6, 25%, 26.7%)',
        white: 'hsl(0, 0%, 100%)',

        // Light Theme

        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'light-grayish-blue': 'hsl(227, 47%, 96%)',
        'dark-grayish-blue': 'hsl(228, 12%, 44%)',
        'very-dark-blue-text': 'hsl(230, 17%, 14%)',
        'light-gray': 'hsl(228, 33%, 91%)',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: '14px',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widestx: '.25em',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
