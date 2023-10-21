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
         <Container>
            <FadeIn>
               <div className='h-px bg-black w-full my-4 lg:my-14 ' />
               <div className='flex flex-col items-start pt-10  gap-10'>
                  <div className='flex flex-col gap-8'>
                     <div className='text-4xl lg:text-6xl'>Let&apos;s talk</div>
                     <ul className='flex flex-col gap-4 text-xl lg:text-2xl'>
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
                  <div className='flex items-center justify-between w-full pb-14 '>
                     <p>Built by Yan Lafitte.</p>
                     <p>
                        &copy;<span id='date'></span>
                     </p>
                  </div>
               </div>
            </FadeIn>
         </Container>
      </footer>
   );
};

export default Footer;
