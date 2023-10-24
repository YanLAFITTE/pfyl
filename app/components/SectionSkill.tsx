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
      <div className='  bg-black text-white '>
         <Container>
            <div
               className='flex flex-col gap-16 sm:flex-row sm:gap-0 w-full justify-start items-start pb-16 2xl:pt-24 pt-10'
               id='work'
            >
               <div className=' w-[50%]'>
                  <h3 className='text-3xl font-display sm:text-5xl lg:text-6xl  font-semibold mb-12'>
                     Tech Skills
                  </h3>
                  <div className='flex gap-20'>
                     <FadeInStagger>
                        <ul className='flex flex-col gap-6 text-xl'>
                           <FadeIn>
                              <li>HTML</li>
                           </FadeIn>
                           <FadeIn>
                              <li>CSS</li>
                           </FadeIn>
                           <FadeIn>
                              <li>SASS</li>
                           </FadeIn>
                           <FadeIn>
                              <li>Tailwind</li>
                           </FadeIn>
                           <FadeIn>
                              <li>JavaScript</li>
                           </FadeIn>
                           <FadeIn>
                              <li>React</li>
                           </FadeIn>
                           <FadeIn>
                              <li>Next</li>
                           </FadeIn>
                        </ul>
                     </FadeInStagger>
                     <FadeInStagger>
                        <ul className='flex flex-col gap-6 text-xl'>
                           <FadeIn>
                              <li>CMS</li>
                           </FadeIn>
                           <FadeIn>
                              <li>Express</li>
                           </FadeIn>
                           <FadeIn>
                              <li>MongoDB</li>
                           </FadeIn>
                           <FadeIn>
                              <li>Git</li>
                           </FadeIn>
                           <FadeIn>
                              <li>GitHub</li>
                           </FadeIn>
                        </ul>
                     </FadeInStagger>
                  </div>
               </div>
               <div className=''>
                  <h3 className='text-3xl font-display sm:text-5xl lg:text-6xl  font-semibold mb-12'>
                     Soft Skills
                  </h3>

                  <FadeInStagger>
                     <ul className='flex flex-col gap-6 text-xl'>
                        <FadeIn>
                           <li>Communication</li>
                        </FadeIn>
                        <FadeIn>
                           <li>Empathy</li>
                        </FadeIn>
                        <FadeIn>
                           <li>Patience</li>
                        </FadeIn>
                        <FadeIn>
                           <li>Open-Mindedness</li>
                        </FadeIn>
                        <FadeIn>
                           <li>Adaptability</li>
                        </FadeIn>
                        <FadeIn>
                           <li>Curiosity</li>
                        </FadeIn>
                     </ul>
                  </FadeInStagger>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default SectionSkill;
