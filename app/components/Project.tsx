'use client';
import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface ProjectProps {
   title: string;
   link: string;
   index: number;
   setModal: (modalState: { active: boolean; index: number }) => void;
   onTouchStart: () => void;
}

export default function index({
   index,
   title,
   setModal,
   link,
   onTouchStart,
}: ProjectProps) {
   return (
      <Link
         href={link}
         rel='noopener noreferrer'
         target='_blank'
         onClick={() => setModal({ active: false, index })}
      >
         <li
            className='py-8 lg:py-12  border-t border-[#fffbf0] cursor-pointer group '
            onMouseEnter={() => {
               setModal({ active: true, index });
            }}
            onMouseLeave={() => {
               setModal({ active: false, index });
            }}
            onTouchStart={onTouchStart}
         >
            <div className='flex items-center '>
               <FiArrowRight className='text-2xl   group-hover:opacity-100 opacity-0 -translate-x-10 group-hover:translate-x-0 duration-300 ease-in-out -mt-2' />
               <h2 className='uppercase text-xl lg:text-4xl group-hover:pl-5 duration-300 ease -mx-6  group-hover:mx-0 mb-2'>
                  {title}
               </h2>
            </div>
            <p>Design & Development</p>
         </li>
      </Link>
   );
}
