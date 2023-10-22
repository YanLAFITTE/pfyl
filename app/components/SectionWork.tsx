'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import agence from '../../public/agence-web.png';
import FadeIn, { FadeInStagger } from './Fadein';
import clsx from 'clsx';
import Container from '../components/Container';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';

const SectionWork = () => {
   const [projectOpen, setProjectOpen] = useState(false);

   const handleClick = () => {
      setProjectOpen(!projectOpen);
   };

   return (
      <div className='  bg-black text-white'>
         <Container>
            <div
               className='flex w-full justify-between items-center pb-14'
               id='work'
            >
               <div className='pt-10'>
                  <h3 className='text-2xl lg:text-4xl mb-2'>Selected works</h3>
                  <p>2023</p>
               </div>
               <Link
                  href={'/#work'}
                  scroll
                  className='text-2xl lg:text-4xl mt-1'
               >
                  <AiOutlineArrowDown />
               </Link>
            </div>
            <FadeInStagger>
               <ul className='flex flex-col gap-10 '>
                  <FadeIn>
                     <li
                        className=' pt-10 border-t border-white '
                        onClick={handleClick}
                     >
                        Project1
                     </li>
                  </FadeIn>

                  {/* <div
                     className={clsx(
                        projectOpen
                           ? 'block w-[50%] mt-10 p-5 bg-white '
                           : 'hidden'
                     )}
                  >
                     <Image src={agence} alt='' className=' grayscale-100' />
                  </div> */}

                  <FadeIn>
                     <li className='pt-10 border-t border-white '>Project2</li>
                  </FadeIn>

                  <FadeIn>
                     <li className='pt-10 border-t border-white'>Project3</li>
                  </FadeIn>

                  <FadeIn>
                     <li className='py-10 border-t border-white'>Project4</li>
                  </FadeIn>
               </ul>
            </FadeInStagger>
         </Container>
      </div>
   );
};

export default SectionWork;
