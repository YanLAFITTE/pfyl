'use client';
import { useReducedMotion, MotionConfig, motion } from 'framer-motion';
import React, { ElementType, ReactNode, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { clsx } from 'clsx';
import Container from './Container';
import Logo from './Logo';
import FadeIn, { FadeInStagger } from './Fadein';

interface HeaderProps {
   panelId: string;
   invert?: boolean;
   icon: ElementType;
   expanded: boolean;
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
}: HeaderProps) => {
   return (
      <Container>
         <div className='flex items-center justify-between '>
            <Link href={'/'} aria-label='Home'>
               <h2
                  className={clsx(
                     invert
                        ? 'cursor-pointer text-lg sm:text-xl duration-300 text-white mt-1'
                        : 'cursor-pointer text-lg sm:text-xl duration-300 text-black mt-1'
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
                  className={clsx('group p-2.5 transition')}
                  aria-label='Toggle navigation'
               >
                  <Icon
                     className={clsx(
                        'h-6 w-6 rounded-full',
                        invert ? 'text-white ' : ' text-black '
                     )}
                  />
               </button>
            </div>
         </div>
      </Container>
   );
};

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
               <FadeInStagger>
                  <ul className='lg:flex flex-col  pt-4 lg:pt-14'>
                     <li className='border-t-[1px] border-stone-200 py-6 group  font-bold'>
                        <FadeIn>
                           <div className='text-large group-hover:tracking-[30px] lg:group-hover:tracking-[50px]  duration-300 ease-in-out uppercase  '>
                              Work
                           </div>
                        </FadeIn>
                     </li>
                     <li className='border-t-[1px]  border-stone-200 py-6 group  font-bold'>
                        <FadeIn>
                           <div className='text-large  group-hover:tracking-[30px] lg:group-hover:tracking-[50px]  duration-300 ease-in-out uppercase  '>
                              About
                           </div>
                        </FadeIn>
                     </li>
                     <li className='border-t-[1px]  border-stone-200 py-6 group   font-bold'>
                        <FadeIn>
                           <div className='text-large group-hover:tracking-[30px] lg:group-hover:tracking-[50px]   duration-300 ease-in-out uppercase  '>
                              Contact
                           </div>
                        </FadeIn>
                     </li>
                  </ul>
               </FadeInStagger>
            </Container>
         </motion.div>
         <motion.div
            layout
            className='relative flex flex-auto overflow-hidden  pt-40 bg-white text-black'
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
   return <RootLayoutInner>{children}</RootLayoutInner>;
};

export default RootLayout;
