import React from 'react';
import Container from '../components/Container';
import FadeIn from '../components/Fadein';
import Link from 'next/link';
import SectionSkill from '../components/SectionSkill';
import { FiArrowRight } from 'react-icons/fi';

const AboutPage = () => {
   return (
      <>
         <Container>
            <FadeIn>
               <div className='flex flex-col gap-4 mb-12'>
                  <p className='text-3xl font-display sm:text-5xl lg:text-6xl [text-wrap:balance] lg:max-w-4xl leading-[2.5rem] sm:leading-[3.5rem] lg:leading-[4rem]'>
                     Hello - My name is Yan. With 2 years of hands-on experience
                     in web development, I am well-versed in a wide range of
                     programming languages, including HTML5, CSS3, and
                     JavaScript. My expertise extends to popular frameworks like
                     React and Next.js, as well as proficiency in back-end
                     development with technologies like Node.js and Express. I
                     am not only a technical wizard but also a collaborative
                     team player, ready to tackle complex challenges and deliver
                     innovative solutions. My commitment to continuous learning
                     ensures me to stay at the forefront of industry trends,
                     making me an invaluable asset to any web development
                     project.
                  </p>

                  <Link
                     href='/yanlafitte_cv.pdf'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='underline inline-flex items-center text-2xl sm:text-3xl  lg:text-4xl font-display font-semibold my-8 lg:my-16 group '
                  >
                     <FiArrowRight className='mr-2 group-hover:mr-8 duration-300 ease-in-out' />
                     <span>Download my resume</span>
                  </Link>
               </div>
            </FadeIn>
         </Container>
         <SectionSkill />
      </>
   );
};

export default AboutPage;

