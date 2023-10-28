'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import clsx from 'clsx';

interface ProjectProps {
   title: string;
   link: string;
   index: number;
   year: string;
   src: string;
   technos: string[];
   design?: boolean;
   dev: boolean;
   openProjects: number[];
   setOpenProjects: React.Dispatch<React.SetStateAction<number[]>>;
   onProjectClick: () => void;
}

export default function Project({
   index,
   title,
   link,
   year,
   src,
   technos,
   openProjects,
   dev,
   design,
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
            setOpenProjects([]);
         }
      };

      document.addEventListener('click', handleOutsideClick);

      return () => {
         document.removeEventListener('click', handleOutsideClick);
      };
   }, [isOpen, projectRef, setOpenProjects]);

   return (
      <li
         ref={projectRef}
         className='py-8 lg:py-12  border-t border-color_main cursor-pointer group relative z-20'
         onClick={handleClick}
      >
         <div className='flex items-center w-full justify-between'>
            <div className='flex items-center  '>
               <FiArrowRight className='text-3xl lg:text-4xl   group-hover:opacity-100 opacity-0 -translate-x-10 group-hover:translate-x-0 duration-300 ease-in-out -mt-2' />
               <h2 className=' text-2xl lg:text-4xl group-hover:pl-5 duration-300 ease -mx-6  group-hover:mx-0 mb-2'>
                  {title}
               </h2>
            </div>
            <div className=' group-hover:scale-110 duration-300 ease text-lg '>
               {year}
            </div>
         </div>
         <p>
            {dev && 'Development'} {design && '/ Design'}
         </p>
         <div className={clsx(isOpen ? 'relative mt-10' : ' hidden', '')}>
            <div className='grid grid-cols-1 lg:grid-cols-2  mb-5'>
               <div className='h-auto lg:mr-10 mb-5 lg:mb-0'>
                  <Image
                     src={src}
                     alt={title}
                     width={500}
                     height={400}
                     className='object-contain p-px bg-color_main  h-full w-full'
                  />
               </div>
               <div className='flex flex-col gap-4 lg:gap-8  '>
                  <p className='text-xl'>Technologies:</p>
                  <ul className='flex gap-2 flex-col'>
                     {technos.map((techno, index) => {
                        return <li key={index}>{techno}</li>;
                     })}
                  </ul>
               </div>
            </div>
            <Link
               href={link}
               rel='noopener noreferrer'
               target='_blank'
               className='absolute bottom-0 right-0 p-3 max-w-[150px] bg-color_secondary text-color_main border border-color_main flex justify-center items-center  whitespace-nowrap hover:bg-color_main hover:text-color_secondary '
            >
               See Website
            </Link>
         </div>
      </li>
   );
}
