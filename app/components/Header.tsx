import { clsx } from 'clsx';
import { ElementType } from 'react';
import Container from './Container';
import Link from 'next/link';

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
         <div className='flex items-center justify-between'>
            <Link
               href={'/'}
               aria-label='Home'
               onClick={() => setExpanded(false)}
            >
               <h2
                  className={clsx(
                     invert
                        ? 'cursor-pointer text-lg sm:text-xl duration-300 text-[#fffbf0] mt-1 '
                        : 'cursor-pointer text-lg sm:text-xl duration-300 text-black mt-1 '
                  )}
               >
                  Yan Lafitte
               </h2>
            </Link>

            <div>
               <button
                  ref={toggleRef as React.RefObject<HTMLButtonElement>}
                  type='button'
                  onClick={onToggle}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  className={clsx('group p-2.5 transition  rounded-full')}
                  aria-label='Toggle navigation'
               >
                  <Icon
                     className={clsx(
                        'h-6 w-6 rounded-full',
                        invert ? 'text-[#fffbf0] ' : ' text-black '
                     )}
                  />
               </button>
            </div>
         </div>
      </Container>
   );
};

export default Header;
