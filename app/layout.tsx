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
         className='h-full bg-color_secondary text-base antialiased text-color_main  font-display'
      >
         <body className='flex flex-col '>
            <RootLayout>{children}</RootLayout>
         </body>
      </html>
   );
}
