'use client';
import React, { useState } from 'react';
import FadeIn from './Fadein';
import Container from '../components/Container';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';
import Project from './Project';

const projects = [
   {
      title: 'Web Agency',
      src: '/agence-web.png',
      color: '#000000',
      link: '',
      techno: 'React',
   },

   {
      title: 'Stellar App',
      src: '/disney.png',
      color: '#8C8C8C',
      link: '',
      techno: 'React',
   },

   {
      title: 'Hot Takes',
      src: '/ours.jpg',
      color: '#EFE8D3',
      link: '',
      techno: 'React',
   },

   {
      title: 'Photo App',
      src: '/wall.jpg',
      color: '#706D63',
      link: 'https://photography-portfolio-dun.vercel.app/',
      techno: 'React',
   },

   {
      title: 'Photo App',
      src: '/wall.jpg',
      color: '#706D63',
      link: 'https://photography-portfolio-dun.vercel.app/',
      techno: 'React',
   },

   {
      title: 'Photo App',
      src: '/wall.jpg',
      color: '#706D63',
      link: 'https://photography-portfolio-dun.vercel.app/',
      techno: 'React',
   },
];

const SectionWork = () => {
   const [openProjects, setOpenProjects] = useState<number[]>([]);
   const handleProjectClick = (index: number) => {
      // Toggle the clicked project's index in the openProjects state
      if (openProjects.includes(index)) {
         setOpenProjects(
            openProjects.filter((projectIndex) => projectIndex !== index)
         );
      } else {
         setOpenProjects([index]);
      }
   };
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
                  <p className='text-lg lg:text-2xl sm:text-xl'>2023</p>
               </div>
               <Link
                  href={'/#work'}
                  scroll
                  className=' text-3xl font-display sm:text-5xl lg:text-6xl rounded-full '
               >
                  <AiOutlineArrowDown />
               </Link>
            </div>
            <div >
               <ul className='flex flex-col  pb-24  '>
                  {projects.map((project, index) => {
                     return (
                        <FadeIn key={index}>
                           <Project
                              index={index}
                              title={project.title}
                              link={project.link}
                              techno={project.techno}
                              src={project.src}
                              openProjects={openProjects}
                              setOpenProjects={setOpenProjects}
                              onProjectClick={() => handleProjectClick(index)}
                           />
                        </FadeIn>
                     );
                  })}
               </ul>
            </div>
         </Container>
      </div>
   );
};

export default SectionWork;
