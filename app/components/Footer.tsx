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
               <div className='text-3xl font-display sm:text-5xl lg:text-6xl font-semibold pt-24 lg:pt-32 pb-12'>
                  Let&apos;s talk
               </div>
            </Container>
            <Container>
               <div className='h-px w-full bg-black'></div>
            </Container>
            <Container>
               <div className='flex flex-col items-start  '>
                  <div className='flex flex-col '>
                     <ul className='flex flex-col gap-8 py-10 text-xl lg:text-2xl'>
                        <Link
                           href='mailto:welcome.yanlafitte@gmail.com'
                           rel='noopener noreferrer'
                           target='_blank'
                        >
                           <li className='text-xl font-display sm:text-3xl lg:text-5xl underline hover:opacity-80 duration-300 ease-in-out'>
                              welcome.yanlafitte@gmail.com
                           </li>
                        </Link>
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
                     </ul>
                  </div>
               </div>
            </Container>
            <Container>
               <div className='flex items-center justify-between  py-14  w-full border-t border-black'>
                  <p>Built by Yan Lafitte.</p>
                  <p>&copy;2023</p>
               </div>
            </Container>
         </footer>
      </div>
   );
};

export default Footer;
