'use client';
import React, { useEffect, useRef } from 'react';
import Container from '../components/Container';
import FadeIn from '../components/Fadein';
import Link from 'next/link';
import SectionSkill from '../components/SectionSkill';
import { FiArrowRight } from 'react-icons/fi';

const phrase = ` With 2 years of hands-on experience in web development, my skill set spans across an array of coding languages, such as HTML5, CSS3, and JavaScript. I specialize in popular frameworks like React and Next.js, and I have solid skills in back-end development, using technologies like Node.js and Express. I consider myself a technical enthusiast, dedicated to crafting efficient solutions. My commitment to continuous learning ensures me to stay at the forefront of industry trends, making me an invaluable asset to any web development project.`;

const AboutPage = () => {
   return (
      <div>
         <Container>
            <FadeIn>
               <div className='flex flex-col gap-4 mb-12'>
                  <div className=''>
                     <div className=' flex flex-wrap justify-between [text-wrap:balance] max-w-4xl'>
                        <span className='text-3xl font-display sm:text-5xl lg:text-6xl mb-8 '>
                           Hello - I&apos;m Yan,
                        </span>
                        <div className=' text-lg lg:text-2xl sm:text-xl'>
                           {phrase}
                        </div>
                     </div>
                  </div>

                  <Link
                     href='/yanlafitte_cv.pdf'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='underline inline-flex items-center text-2xl sm:text-3xl  lg:text-4xl font-display font-semibold pb-8 pt-6 lg:pt-12 lg:pb-16 group max-w-2xl'
                  >
                     <FiArrowRight className='mr-2 group-hover:mr-8 duration-300 ease-in-out' />
                     <span>Download my resume</span>
                  </Link>
               </div>
            </FadeIn>
         </Container>
         <SectionSkill />
      </div>
   );
};

export default AboutPage;
