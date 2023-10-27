import Link from 'next/link';
import Container from '../components/Container';

interface FooterProps {
   footerRef: React.RefObject<HTMLDivElement>;
}

const Footer = ({ footerRef }: FooterProps) => {
   return (
      <div id='contact' ref={footerRef} className=''>
         <footer className='fixed bottom-0  left-0 w-full text-black -z-[5] '>
            <Container>
               <div className='flex lg:items-center sm:flex-row flex-col gap-6 lg:gap-12 justify-between pt-24 lg:pt-32 pb-12'>
                  <div className='text-3xl font-display sm:text-5xl lg:text-6xl font-semibold whitespace-nowrap'>
                     Let&apos;s talk
                  </div>
                  <p className='text-xl lg:text-2xl font-display  '>
                     Do you want to hire me?
                     <br />
                     Contact me through my email or message me on my social handle
                     for quick response.
                  </p>
               </div>
            </Container>
            <Container>
               <div className='h-px w-full bg-black'></div>
            </Container>
            <Container>
               <div className='flex flex-col items-start  '>
                  <div className='flex flex-col w-full'>
                     <ul className='flex w-full flex-col sm:flex-row justify-between gap-8 py-14 text-xl lg:text-2xl'>
                        <Link
                           href='mailto:welcome.yanlafitte@gmail.com'
                           rel='noopener noreferrer'
                           target='_blank'
                        >
                           <li className='text-xl font-display sm:text-3xl lg:text-5xl underline hover:opacity-80 duration-300 ease-in-out'>
                              welcome.yanlafitte@gmail.com
                           </li>
                        </Link>
                        <div className='sm:text-end flex flex-col gap-2'>
                           <Link
                              href='https://github.com/YanLAFITTE'
                              rel='noopener noreferrer'
                              target='_blank'
                              className='hover:underline duration-300 ease-in-out'
                           >
                              <li>github</li>
                           </Link>
                           <Link
                              href='https://www.linkedin.com/in/yan-lafitte/'
                              rel='noopener noreferrer'
                              target='_blank'
                              className='hover:underline duration-300 ease-in-out'
                           >
                              <li>linkedIn</li>
                           </Link>
                        </div>
                     </ul>
                  </div>
               </div>
            </Container>
            <Container>
               <div className=' text-lg lg:text-2xl sm:text-xl flex items-center justify-between  py-14 lg:py-16 w-full border-t border-black'>
                  <p>Built by Yan Lafitte.</p>
                  <p>&copy;2023</p>
               </div>
            </Container>
         </footer>
      </div>
   );
};

export default Footer;
