'use client';
import Container from './components/Container';
import { FiArrowRight } from 'react-icons/fi';
import FadeIn from './components/Fadein';
import SectionWork from './components/SectionWork';
import Link from 'next/link';

export default function Home() {
   return (
      <>
         <Container className=''>
            <div className='mb-12 2xl:mb-24 '>
               <FadeIn>
                  <h1 className=' text-3xl font-display sm:text-5xl lg:text-6xl [text-wrap:balance] lg:max-w-4xl leading-[2.5rem] sm:leading-[3.5rem] lg:leading-[4rem]'>
                     Hello - I&apos;m Yan,
                     <br /> a{' '}
                     <strong className='font-semibold '>
                        front-end developer
                     </strong>
                     .
                     <br /> Let&apos;s craft innovative web experiences
                     together.
                  </h1>
               </FadeIn>
               <FadeIn>
                  <Link
                     href={'/#contact'}
                     className='underline inline-flex items-center text-2xl sm:text-3xl  lg:text-4xl font-display font-semibold py-8 lg:py-16 group w-full max-w-2xl'
                  >
                     <FiArrowRight className='mr-2 group-hover:mr-8 duration-300 ease-in-out' />
                     Get in touch
                  </Link>
               </FadeIn>
            </div>
         </Container>
         <SectionWork />
      </>
   );
}
