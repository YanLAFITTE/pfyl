import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
            display: [
               ['Mona Sans', ...defaultTheme.fontFamily.sans],
               { fontVariationSettings: '"width" 125' },
            ],
         },
         colors: {
            transparent: 'transparent',
            current: 'currentColor',
            color_main: '#e6e6e6',
            color_secondary: '#11170b',
            color_tertiary: '#aff24c',
         },
      },
   },

   plugins: [],
};
export default config;
