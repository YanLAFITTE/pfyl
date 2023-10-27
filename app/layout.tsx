import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayout from './components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <html
         lang='en'
         className=' bg-black text-base antialiased text-[#fffbf0] h-screen'
      >
         <body className='flex min-h-full flex-col '>
            <RootLayout>{children}</RootLayout>
         </body>
      </html>
   );
}
