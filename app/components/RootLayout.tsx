'use client';
import { useReducedMotion, MotionConfig, motion } from 'framer-motion';
import React, { ReactNode, RefObject, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import { FiArrowRight } from 'react-icons/fi';
import clsx from 'clsx';
import Home from '../page';

interface RootLayoutInnerProps {
   children: ReactNode;
   footerRef: React.RefObject<HTMLDivElement>;
}

const RootLayoutInner: React.FC<RootLayoutInnerProps> = ({
   children,
   footerRef,
}) => {
   const panelId = useId();
   const [expanded, setExpanded] = useState(false);
   const openRef = useRef<HTMLButtonElement | null>(null);
   const closeRef = useRef<HTMLButtonElement | null>(null);
   const navRef = useRef<HTMLDivElement | null>(null);
   const shouldReduceMotion = useReducedMotion();

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
               <ul className='lg:flex flex-col   pt-4 lg:pt-14'>
                  <Link href={'/'} onClick={() => setExpanded(false)}>
                     <li className='border-t-[1px] border-[#fffbf0] py-8 group flex items-center '>
                        <FiArrowRight className='text-xl   group-hover:opacity-100 opacity-0 -translate-x-10 group-hover:translate-x-0 duration-300 ease-in-out ' />
                        <div className='text-xl group-hover:ml-4 -ml-4  duration-300 ease-in-out uppercase  '>
                           Home
                        </div>
                     </li>
                  </Link>
                  <Link href='/about' onClick={() => setExpanded(false)}>
                     <li className='border-t-[1px]  border-[#fffbf0] py-8 group flex items-center '>
                        <FiArrowRight className='text-xl  group-hover:opacity-100 opacity-0 -translate-x-10 group-hover:translate-x-0 duration-300 ease-in-out ' />
                        <div className='text-xl  group-hover:mx-4 -ml-4    duration-300 ease-in-out uppercase   '>
                           About
                        </div>
                     </li>
                  </Link>
                  <Link
                     href={'/#contact'}
                     onClick={(e) => {
                        e.preventDefault();
                        setExpanded(false);
                        // Scroll to the footer
                        footerRef?.current?.scrollIntoView({
                           behavior: 'smooth',
                        });
                     }}
                  >
                     <li className='border-t-[1px]  border-[#fffbf0] py-8 group flex items-center'>
                        <FiArrowRight className='text-xl   group-hover:opacity-100 opacity-0 -translate-x-10 group-hover:translate-x-0 duration-300 ease-in-out ' />
                        <div className='text-xl group-hover:ml-4 -ml-4    duration-300 ease-in-out uppercase  '>
                           Contact
                        </div>
                     </li>
                  </Link>
               </ul>
            </Container>
         </motion.div>
         <motion.div
            layout
            className='relative flex flex-auto overflow-hidden   bg-[#fffbf0] text-black '
         >
            <motion.div
               layout
               className='relative isolate flex w-full flex-col '
            >
               <main
                  className={clsx(
                     'w-full flex-auto sm:mb-[566px] mb-[546px] lg:mb-[630px] bg-[#fffbf0] ',
                     expanded
                        ? ' duration-200 pt-[1.5rem] '
                        : ' duration-300 ease pt-[12.5rem] '
                  )}
               >
                  {children}
               </main>
            </motion.div>
         </motion.div>
      </MotionConfig>
   );
};

interface RootLayoutProps {
   children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
   const pathName = usePathname();
   const footerRef = useRef(null);
   return (
      <RootLayoutInner key={pathName} footerRef={footerRef}>
         {children}
         <Footer footerRef={footerRef} />
      </RootLayoutInner>
   );
};

export default RootLayout;
