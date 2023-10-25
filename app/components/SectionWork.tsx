'use client';
import React, { useState } from 'react';
import FadeIn, { FadeInStagger } from './Fadein';
import Container from '../components/Container';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';
import Project from './Project';
import Modal from './Modal';

const projects = [
   {
      title: 'Web Agency',

      src: 'agence-web.png',

      color: '#000000',
      link: '',
   },

   {
      title: 'Stellar App',

      src: 'disney.png',

      color: '#8C8C8C',
      link: '',
   },

   {
      title: 'Hot Takes',

      src: 'ours.jpg',

      color: '#EFE8D3',
      link: '',
   },

   {
      title: 'Photo App',

      src: 'wall.jpg',

      color: '#706D63',
      link: 'https://photography-portfolio-dun.vercel.app/',
   },

   {
      title: 'Photo App',

      src: 'wall.jpg',

      color: '#706D63',
      link: 'https://photography-portfolio-dun.vercel.app/',
   },

   {
      title: 'Photo App',

      src: 'wall.jpg',

      color: '#706D63',
      link: 'https://photography-portfolio-dun.vercel.app/',
   },
];

const SectionWork = () => {
   const [modal, setModal] = useState({ active: false, index: 0 });
   return (
      <div className='  bg-black text-[#fffbf0] '>
         <Container>
            <div
               className='flex w-full justify-between items-start pb-16 2xl:pt-24 pt-10'
               id='work'
            >
               <div className='font-semibold'>
                  <h3 className='text-3xl font-display sm:text-5xl lg:text-6xl   mb-2'>
                     Selected works
                  </h3>
                  <p>2023</p>
               </div>
               <Link
                  href={'/#work'}
                  scroll
                  className=' text-3xl font-display sm:text-5xl lg:text-6xl rounded-full '
               >
                  <AiOutlineArrowDown />
               </Link>
            </div>
            <div className=' '>
               <FadeInStagger>
                  <ul className='flex flex-col  2xl:pb-24 pb-44 '>
                     {projects.map((project, index) => {
                        return (
                           <FadeIn key={index}>
                              <Project
                                 index={index}
                                 title={project.title}
                                 setModal={setModal}
                                 link={project.link}
                              />
                           </FadeIn>
                        );
                     })}
                  </ul>
                  <Modal modal={modal} projects={projects} />
               </FadeInStagger>
            </div>
         </Container>
      </div>
   );
};

export default SectionWork;
