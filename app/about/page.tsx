'use client';
import React, { useEffect, useRef } from 'react';
import Container from '../components/Container';
import FadeIn from '../components/Fadein';
import Link from 'next/link';
import SectionSkill from '../components/SectionSkill';
import { FiArrowRight } from 'react-icons/fi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase =
   `Hello - I'm Yan, with 2 years of hands-on experience in web development, I am well-versed in a wide range of programming languages, including HTML5, CSS3, and JavaScript. My expertise extends to popular frameworks like React and Next.js, as well as proficiency in back-end development with technologies like Node.js and Express. I am not only a technical wizard but also a collaborative team player, ready to tackle complex challenges and deliver innovative solutions. My commitment to continuous learning ensures me to stay at the forefront of industry trends, making me an invaluable asset to any web development project.`;

const AboutPage = () => {
   const refs = useRef<HTMLElement[]>([]);
   const body = useRef<HTMLDivElement | null>(null);
   const container = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      createAnimation();
   }, []);

   const createAnimation = () => {
      gsap.to(refs.current, {
         scrollTrigger: {
            trigger: container.current!,
            scrub: true,
            start: 'top 30%',
            end: `bottom ${window.innerHeight}`,
            once: true,
         },
         opacity: 1,
         ease: 'none',
         stagger: 1,
         duration: 8,
      });
   };

   const splitWords = (phrase: string) => {
      let body: JSX.Element[] = [];
      phrase.split(' ').forEach((word, i) => {
         const letters = splitLetters(word);
         body.push(
            <p
               key={word + '_' + i}
               className='text-3xl font-display sm:text-5xl lg:text-6xl [text-wrap:balance] lg:max-w-4xl leading-[2.5rem] sm:leading-[3.5rem] lg:leading-[4rem] mr-[1vw] '
            >
               {letters}
            </p>
         );
      });
      return body;
   };

   const splitLetters = (word: string) => {
      let letters: JSX.Element[] = [];
      word.split('').forEach((letter, i) => {
         letters.push(
            <span
               key={letter + '_' + i}
               ref={(el) => {
                  if (el) {
                     refs.current.push(el);
                  }
               }}
               className='opacity-20 '
            >
               {letter}
            </span>
         );
      });
      return letters;
   };
   return (
      <div>
         <Container>
            <FadeIn>
               <div className='flex flex-col gap-4 mb-12'>
                  <div ref={container} className=''>
                     <div
                        ref={body}
                        className=' flex flex-wrap lg:max-w-3xl [text-wrap:balance]'
                     >
                        {splitWords(phrase)}
                     </div>
                  </div>

                  <Link
                     href='/yanlafitte_cv.pdf'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='underline inline-flex items-center text-2xl sm:text-3xl  lg:text-4xl font-display font-semibold py-8 lg:py-16 group max-w-2xl'
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
