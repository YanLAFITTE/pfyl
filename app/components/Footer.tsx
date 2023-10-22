import React, { useEffect } from 'react';
import Link from 'next/link';
import Container from '../components/Container';
import FadeIn, { FadeInStagger } from './Fadein';

const Footer = () => {
   useEffect(() => {
      const copy = document.querySelector('#date');

      if (copy) {
         const currentYear = new Date().getFullYear().toString();
         copy.textContent = currentYear;
      }
   }, []);

   return (
      <footer className=' ' id='contact'>
         <FadeIn>
            <Container>
               <div className='text-4xl lg:text-6xl pt-12 pb-6'>
                  Let&apos;s talk
               </div>
            </Container>
            <Container>
               <div className='h-px w-full bg-black'></div>
            </Container>
            <Container>
               <div className='flex flex-col items-start  '>
                  <div className='flex flex-col '>
                     <ul className='flex flex-col gap-8 py-10 text-xl lg:text-2xl'>
                        <Link
                           href='mailto:welcome.yanlafitte@gmail.com'
                           rel='noopener noreferrer'
                           target='_blank'
                        >
                           <li className='text-xl lg:text-5xl underline hover:opacity-80 duration-300 ease-in-out'>
                              welcome.yanlafitte@gmail.com
                           </li>
                        </Link>

                        <Link
                           href='https://github.com/YanLAFITTE'
                           rel='noopener noreferrer'
                           target='_blank'
                           className='hover:underline duration-300 ease-in-out'
                        >
                           <li>github</li>
                        </Link>

                        <Link
                           href='https://www.linkedin.com/in/yan-lafitte/'
                           rel='noopener noreferrer'
                           target='_blank'
                           className='hover:underline duration-300 ease-in-out'
                        >
                           <li>linkedIn</li>
                        </Link>
                     </ul>
                  </div>
                  <div className='flex items-center justify-between w-full py-14  border-t border-black'>
                     <p>Built by Yan Lafitte.</p>
                     <p>
                        &copy;<span id='date'></span>
                     </p>
                  </div>
               </div>
            </Container>
         </FadeIn>
      </footer>
   );
};

export default Footer;
