import Image from 'next/image';
import Container from './components/Container';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
   return (
      <Container>
         <div>
            <p className='text-4xl font-display sm:text-5xl lg:text-6xl [text-wrap:balance] lg:max-w-4xl'>
               Hello - I&apos;m Yan, a <strong className='font-semibold '>front-end developer</strong >.
               <br /> Let&apos;s craft captivating web experiences together.
            </p>

            <button className='underline inline-flex items-center text-2xl sm:text-3xl  lg:text-4xl font-display font-semibold mt-8 lg:mt-16'>
               <FiArrowRight className='mr-2' />
             Get in touch
            </button>
         </div>
      </Container>
   );
}
