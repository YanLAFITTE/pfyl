import Container from './components/Container';
import { FiArrowRight } from 'react-icons/fi';
import FadeIn from './components/Fadein';
import SectionWork from './components/SectionWork';
import Link from 'next/link';

export default function Home() {
   return (
      <>
         <Container>
            <FadeIn>
               <div className='mb-20'>
                  <h1 className='text-3xl font-display sm:text-5xl lg:text-6xl [text-wrap:balance] lg:max-w-4xl'>
                     Hello - I&apos;m Yan, a{' '}
                     <strong className='font-semibold '>
                        front-end developer
                     </strong>
                     .
                     <br /> Let&apos;s craft captivating web experiences
                     together.
                  </h1>

                  <Link
                     href='#contact'
                     className='underline inline-flex items-center text-xl sm:text-3xl  lg:text-4xl font-display font-semibold mt-8 lg:mt-16 group'
                  >
                     <FiArrowRight className='mr-2 group-hover:mr-4 duration-300 ease-in-out' />
                     Get in touch
                  </Link>
               </div>
            </FadeIn>
         </Container>
         <SectionWork />
      </>
   );
}
