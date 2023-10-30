import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayout from './components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Yan Lafitte - Web Developer',
   description: 'Yan Lafitte - front-end developer - portfolio website',
   icons: {
      icon: ['/favicon.ico'],
   },
};

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <html
         lang='en'
         className=' bg-color_main text-base antialiased text-color_main  font-display'
      >
         <body className='overflow-scroll h-full '>
            <RootLayout>{children}</RootLayout>
         </body>
      </html>
   );
}
