'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import agence from '../../public/agence-web.png';
import FadeIn, { FadeInStagger } from './Fadein';
import clsx from 'clsx';

const SectionWork = () => {
   const [projectOpen, setProjectOpen] = useState(false);

   const handleClick = () => {
      setProjectOpen(!projectOpen);
   };

   return (
      <div className='pt-20' id='work'>
         <FadeIn>
            <h3 className='text-3xl'>Selected works</h3>
         </FadeIn>
         <div className='h-px bg-black w-full my-4 lg:my-14 ' />
         <FadeInStagger>
            <ul className='flex flex-col gap-10'>
               <FadeIn>
                  <li className=' p-5  ' onClick={handleClick}>
                     Project1
                  </li>
                  <div
                     className={clsx(
                        projectOpen
                           ? 'block w-[50%] mt-10 p-5 bg-black '
                           : 'hidden'
                     )}
                  >
                     <Image src={agence} alt='' />
                  </div>
               </FadeIn>
               <FadeIn>
                  <li className='p-5 '>Project2</li>
               </FadeIn>
               <FadeIn>
                  <li className='p-5'>Project3</li>
               </FadeIn>
               <FadeIn>
                  <li className='p-5'>Project4</li>
               </FadeIn>
            </ul>
         </FadeInStagger>
      </div>
   );
};

export default SectionWork;
