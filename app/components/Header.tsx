import { clsx } from 'clsx';
import { ElementType } from 'react';
import Container from './Container';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

interface HeaderProps {
   panelId: string;
   invert?: boolean;
   icon: ElementType;
   expanded: boolean;
   setExpanded: (arg0: boolean) => void;
   onToggle: () => void;
   toggleRef: React.RefObject<HTMLButtonElement | null>;
}

const Header = ({
   icon: Icon,
   invert,
   onToggle,
   toggleRef,
   panelId,
   expanded,
   setExpanded,
}: HeaderProps) => {
   return (
      <Container>
         <div className='flex items-center justify-between ' id='top'>
            <Link
               href={'/'}
               aria-label='Home'
               onClick={() => setExpanded(false)}
            >
               <h2
                  className={clsx(
                     invert
                        ? 'cursor-pointer text-lg lg:text-2xl sm:text-xl duration-300 text-color_main mt-1 '
                        : 'cursor-pointer text-lg lg:text-2xl sm:text-xl duration-300 text-color_secondary mt-1 '
                  )}
               >
                  Yan Lafitte
               </h2>
            </Link>

            <div className='flex items-center justify-between gap-8 lg:gap-12'>
               <div className='flex gap-6'>
                  <Link
                     href={'https://github.com/YanLAFITTE'}
                     className={clsx(
                        ' text-2xl lg:text-3xl  rounded-full hover:scale-110',
                        invert ? 'text-color_main ' : 'text-color_secondary'
                     )}
                     rel='noopener noreferrer'
                     target='_blank'
                  >
                     <AiOutlineGithub />
                  </Link>
                  <Link
                     href={'https://www.linkedin.com/in/yan-lafitte/'}
                     className={clsx(
                        ' text-2xl lg:text-3xl  rounded-full hover:scale-110 ',
                        invert ? 'text-color_main ' : 'text-color_secondary'
                     )}
                     rel='noopener noreferrer'
                     target='_blank'
                  >
                     <AiOutlineLinkedin />
                  </Link>
               </div>

               <button
                  ref={toggleRef as React.RefObject<HTMLButtonElement>}
                  type='button'
                  onClick={onToggle}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  className={clsx(
                     'group p-2.5 transition rounded-full ease duration-150 bg-color_secondary '
                  )}
                  aria-label='Toggle navigation'
               >
                  <Icon
                     className={clsx(
                        ' text-xl lg:text-2xl rounded-full ease duration-150 ',
                        invert
                           ? 'text-color_main  bg-color_secondary group-hover:scale-110'
                           : ' text-color_main group-hover:scale-110'
                     )}
                  />
               </button>
            </div>
         </div>
      </Container>
   );
};

export default Header;
