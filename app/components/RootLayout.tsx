'use client';
import { useReducedMotion, MotionConfig, motion } from 'framer-motion';
import React, { ReactNode, useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';

interface RootLayoutInnerProps {
   children: ReactNode;
}

const RootLayoutInner: React.FC<RootLayoutInnerProps> = ({ children }) => {
   const panelId = useId();
   const [expanded, setExpanded] = useState(false);
   const openRef = useRef<HTMLButtonElement | null>(null);
   const closeRef = useRef<HTMLButtonElement | null>(null);
   const navRef = useRef<HTMLDivElement | null>(null);
   const shouldReduceMotion = useReducedMotion();

   useEffect(() => {
      function onClick(event: MouseEvent) {
         const target = event.target as HTMLElement | null;

         if (target && target.closest('a')?.href === window.location.href) {
            setExpanded(false);
         }
      }

      window.addEventListener('click', onClick);

      return () => {
         window.removeEventListener('click', onClick);
      };
   }, []);

   return (
      <MotionConfig
         transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
         <header>
            <div
               className='absolute left-0 right-0 top-0 z-40 pt-6 lg:pt-14 '
               aria-hidden={expanded ? 'true' : undefined}
               data-inert={expanded ? '' : undefined}
            >
               <Header
                  setExpanded={setExpanded}
                  panelId={panelId}
                  icon={HiMenuAlt4}
                  toggleRef={openRef}
                  expanded={expanded}
                  onToggle={() => {
                     setExpanded((expanded) => !expanded);
                     window.setTimeout(() =>
                        closeRef.current?.focus({ preventScroll: true })
                     );
                  }}
               />
               <Container>
                  <div className='h-px bg-black w-full mt-4 lg:mt-14 lg:hidden' />
               </Container>
            </div>
         </header>
         <motion.div
            layout
            id={panelId}
            style={{ height: expanded ? 'auto' : 0 }}
            className='relative z-50 overflow-hidden  '
            aria-hidden={expanded ? undefined : 'true'}
            data-inert={expanded ? undefined : ''}
         >
            <motion.div layout>
               <div ref={navRef} className=' pt-6 lg:pt-14'>
                  <Header
                     setExpanded={setExpanded}
                     invert
                     panelId={panelId}
                     icon={IoMdClose}
                     toggleRef={openRef}
                     expanded={expanded}
                     onToggle={() => {
                        setExpanded((expanded) => !expanded);
                        window.setTimeout(() =>
                           closeRef.current?.focus({ preventScroll: true })
                        );
                     }}
                  />
               </div>
            </motion.div>

            <Container>
               <ul className='lg:flex flex-col  pt-4 lg:pt-14'>
                  <Link href='/#work' onClick={() => setExpanded(false)}>
                     <li className='border-t-[1px] border-stone-200 py-6 group  font-bold'>
                        <div className='text-large group-hover:tracking-[30px] lg:group-hover:tracking-[50px]  duration-300 ease-in-out uppercase  '>
                           Work
                        </div>
                     </li>
                  </Link>
                  <Link href='/about' onClick={() => setExpanded(false)}>
                     <li className='border-t-[1px]  border-stone-200 py-6 group  font-bold'>
                        <div className='text-large  group-hover:tracking-[30px] lg:group-hover:tracking-[50px]  duration-300 ease-in-out uppercase  '>
                           About
                        </div>
                     </li>
                  </Link>
                  <Link href='/#contact' onClick={() => setExpanded(false)}>
                     <li className='border-t-[1px]  border-stone-200 py-6 group   font-bold'>
                        <div className='text-large group-hover:tracking-[30px] lg:group-hover:tracking-[50px]   duration-300 ease-in-out uppercase  '>
                           Contact
                        </div>
                     </li>
                  </Link>
               </ul>
            </Container>
         </motion.div>
         <motion.div
            layout
            className='relative flex flex-auto overflow-hidden  pt-40 bg-white text-black '
            onClick={() => setExpanded(false)}
         >
            <motion.div
               layout
               className='relative isolate flex w-full flex-col pt-9 '
            >
               <main className='w-full flex-auto'>{children}</main>
            </motion.div>
         </motion.div>
      </MotionConfig>
   );
};

interface RootLayoutProps {
   children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
   const pathName = usePathname();
   return (
      <RootLayoutInner key={pathName}>
         {children}
         <Footer />
      </RootLayoutInner>
   );
};

export default RootLayout;
