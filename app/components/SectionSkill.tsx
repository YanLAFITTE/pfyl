'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import agence from '../../public/agence-web.png';
import FadeIn, { FadeInStagger } from './Fadein';
import clsx from 'clsx';
import Container from '../components/Container';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';

const SectionSkill = () => {
   const [projectOpen, setProjectOpen] = useState(false);

   const handleClick = () => {
      setProjectOpen(!projectOpen);
   };

   return (
      <div className='  bg-color_secondary text-color_main ' id='skills'>
         <Container>
            <div
               className='flex flex-col gap-16 sm:flex-row sm:gap-0 w-full justify-start items-start pb-16 xl:pb-24 xl:pt-24 pt-10 relative'
               id='work'
            >
               <div className=' w-[50%] '>
                  <h3 className='text-color_main text-3xl font-display sm:text-5xl lg:text-6xl  font-semibold mb-12'>
                     Tech Skills
                  </h3>
                  <div className='flex gap-20'>
                     <FadeIn>
                        <ul className='flex flex-col gap-6 text-xl'>
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>SASS</li>
                           <li>Tailwind</li>
                           <li>JavaScript</li>
                           <li>React</li>
                           <li>Next</li>
                        </ul>
                     </FadeIn>

                     <FadeIn>
                        <ul className='flex flex-col gap-6 text-xl'>
                           <li>CMS</li>
                           <li>Express</li>
                           <li>MongoDB</li>
                           <li>Git</li>
                           <li>GitHub</li>
                        </ul>
                     </FadeIn>
                  </div>
               </div>
               <div className='w-[50%]'>
                  <div className='lg:relative w-full'>
                     <h3 className='text-color_main text-3xl font-display sm:text-5xl lg:text-6xl  font-semibold mb-12'>
                        Soft Skills
                     </h3>
                     <Link
                        href={'/about/#skills'}
                        scroll
                        className='absolute top-9 lg:top-0 right-0 cursor-pointer  items-center p-2.5 rounded-full group bg-color_main '
                     >
                        <AiOutlineArrowDown className='text-xl lg:text-2xl  group-hover:scale-110 text-color_secondary ' />
                     </Link>
                     <FadeIn>
                        <ul className='flex flex-col gap-6 text-xl'>
                           <li>Communication</li>
                           <li>Empathy</li>
                           <li>Patience</li>
                           <li className=' whitespace-nowrap'>
                              Open-Mindedness
                           </li>
                           <li>Adaptability</li>
                           <li>Curiosity</li>
                        </ul>
                     </FadeIn>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default SectionSkill;
