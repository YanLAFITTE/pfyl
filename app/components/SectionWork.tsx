'use client';
import React, { useState } from 'react';
import FadeIn from './Fadein';
import Container from '../components/Container';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';
import Project from './Project';

const projects = [
   {
      title: 'Photography app',
      description: "",
      src: '/photography.png',
      link: 'https://photography-portfolio-dun.vercel.app/portfolio',
      technos: ['React', 'Next','TypeScript', 'Tailwind', 'unspalsh API'],
      year: '2023'
   },
   {
      title: 'Dimitri Iovane',
      description: "",
      src: '/dic.png',
      link: 'https://dimitri-art.vercel.app/',
      technos: ['React', 'Next','TypeScript', 'Tailwind', 'Sanity CMS'],
      year: '2023'
   },
   {
      title: 'Contact page',
      description: "",
      src: '/agence-web.png',
      link: '',
      technos: ['React', 'Sass'],
      year: '2023'
   },
   {
      title: 'Kaza',
      description: "",
      src: '/kaza1.png',
      link: 'https://kasa-app-yanlafitte.vercel.app/',
      technos: ['React', 'Sass'],
      year: '2022'
   },
   {
      title: 'Stellar App',
      description: "",
      src: '/stellar.png',
      link: 'https://stellar-app.vercel.app/',
      technos: ['HTML', 'CSS', 'JS', 'Nasa API'],
      year: '2023'
   },

   {
      title: 'OhMyFood!',
      description: "",
      src: '/ohmyfood.png',
      link: 'https://yanlafitte.github.io/P3_CODE/index.html',
      technos: ['HTML', 'CSS'],
      year: '2022'
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
               <div className=''>
                  <h3 className='text-3xl font-display sm:text-5xl lg:text-6xl font-semibold  mb-2'>
                     Selected works
                  </h3>
                  <p className='text-lg lg:text-2xl sm:text-xl'>2023</p>
               </div>
               <Link
                  href={'/#work'}
                  scroll
                  className='cursor-pointer  items-center p-2.5 rounded-full group bg-[#fffbf0] '
               >
                  <AiOutlineArrowDown className='text-xl lg:text-2xl  group-hover:scale-110 text-black ' />
               </Link>
            </div>
            <div>
               <ul className='flex flex-col  pb-24 lg:pb-28  '>
                  {projects.map((project, index) => {
                     return (
                        <FadeIn key={index}>
                           <Project
                              index={index}
                              title={project.title}
                              link={project.link}
                              year={project.year}
                              src={project.src}
                              openProjects={openProjects}
                              setOpenProjects={setOpenProjects}
                              onProjectClick={() => handleProjectClick(index)}
                              technos={project.technos}
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
