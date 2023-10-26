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
      <div className='  bg-black text-[#fffbf0] '>
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
                     <ul className='flex flex-col gap-6 text-xl'>
                        <FadeIn>
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>SASS</li>
                           <li>Tailwind</li>
                           <li>JavaScript</li>
                           <li>React</li>
                           <li>Next</li>
                        </FadeIn>
                     </ul>

                     <ul className='flex flex-col gap-6 text-xl'>
                        <FadeIn>
                           <li>CMS</li>
                           <li>Express</li>
                           <li>MongoDB</li>
                           <li>Git</li>
                           <li>GitHub</li>
                        </FadeIn>
                     </ul>
                  </div>
               </div>
               <div className=''>
                  <h3 className='text-3xl font-display sm:text-5xl lg:text-6xl  font-semibold mb-12'>
                     Soft Skills
                  </h3>

                  <ul className='flex flex-col gap-6 text-xl'>
                     <FadeIn>
                        <li>Communication</li>
                        <li>Empathy</li>
                        <li>Patience</li>
                        <li>Open-Mindedness</li>
                        <li>Adaptability</li>
                        <li>Curiosity</li>
                     </FadeIn>
                  </ul>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default SectionSkill;
