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
            color_main: '#f0f0e8',
            color_secondary: '#1c1c1c',
            color_tertiary: '#aff24c',
         },
      },
   },

   plugins: [],
};
export default config;
