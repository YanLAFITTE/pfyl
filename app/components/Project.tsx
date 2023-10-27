'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import clsx from 'clsx';

interface ProjectProps {
   title: string;
   link: string;
   index: number;
   techno: string;
   src: string;
   openProjects: number[];
   setOpenProjects: React.Dispatch<React.SetStateAction<number[]>>;
   onProjectClick: () => void;
}

export default function Project({
   index,
   title,
   link,
   techno,
   src,
   openProjects,
   setOpenProjects,
   onProjectClick,
}: ProjectProps) {
   const isOpen = openProjects.includes(index);
   const projectRef = useRef<HTMLLIElement | null>(null);

   const handleClick = () => {
      onProjectClick();
      if (isOpen) {
         setOpenProjects((prevOpenProjects) =>
            prevOpenProjects.filter((projectIndex) => projectIndex !== index)
         );
      } else {
         setOpenProjects([index]);

         setTimeout(() => {
            if (projectRef.current) {
               projectRef.current.scrollIntoView({ behavior: 'smooth' });
            }
         }, 0);
      }
   };

   useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
         if (
            isOpen &&
            projectRef.current &&
            !projectRef.current.contains(event.target as Node)
         ) {
            // If the project is open and a click occurred outside the project component, close it
            setOpenProjects([]);
         }
      };

      document.addEventListener('click', handleOutsideClick);

      return () => {
         document.removeEventListener('click', handleOutsideClick);
      };
   }, [isOpen, projectRef, setOpenProjects]);

   return (
      // <Link href={link} rel='noopener noreferrer' target='_blank'>
      <li
         ref={projectRef}
         className='py-8 lg:py-12  border-t border-[#fffbf0] cursor-pointer group relative z-20'
         onClick={handleClick}
      >
         <div className='flex items-center w-full justify-between'>
            <div className='flex items-center  '>
               <FiArrowRight className='text-2xl   group-hover:opacity-100 opacity-0 -translate-x-10 group-hover:translate-x-0 duration-300 ease-in-out -mt-2' />
               <h2 className='uppercase text-xl lg:text-4xl group-hover:pl-5 duration-300 ease -mx-6  group-hover:mx-0 mb-2'>
                  {title}
               </h2>
            </div>
            <div className=' group-hover:scale-125 duration-300 ease text-lg lg:text-2xl'>
               {techno}
            </div>
         </div>
         <p>Design & Development</p>
         <div
            className={clsx(
               isOpen
                  ? ' h-full opacity-100 pt-5 flex flex-col  gap-10 lg:gap-O lg:flex-row justify-between lg:items-end'
                  : ' hidden',
               ''
            )}
         >
            <div className='flex flex-col lg:flex-row  gap-5 max-w-lg'>
               <Image src={src} alt='' width={300} height={300} />
               <p className=''>
                  Project made with react , HTML css, etc Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Et, nam id repudiandae
                  laborum velit sint neque ipsam distinctio blanditiis?
                  Provident modi odio enim pariatur delectus, aliquam
                  necessitatibus optio ipsa numquam!
               </p>
            </div>
            <Link
               href={link}
               rel='noopener noreferrer'
               target='_blank'
               className='p-5 border border-white h-6 flex items-center justify-center hover:bg-white hover:text-black '
            >
               See Website
            </Link>
         </div>
      </li>
      // </Link>
   );
}
