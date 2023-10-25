import React from 'react';
import FadeIn from './Fadein';

interface ProjectProps {
   index: number;
   title: string;
   setModal: (modalState: { active: boolean; index: number }) => void;
}

const Project = ({ index, setModal, title }: ProjectProps) => {
   return (
      <FadeIn
         className=' cursor-pointer group'
         onMouseEnter={() => {
            setModal({ active: true, index });
         }}
         onMouseLeave={() => {
            setModal({ active: false, index });
         }}
      >
         <li className='py-8 lg:py-12  border-t border-[#fffbf0]  '>
            <h2 className='uppercase text-xl lg:text-4xl group-hover:pl-5 duration-300 ease'>{title}</h2>
            <p className=''>Design & Development</p>
         </li>
      </FadeIn>
   );
};

export default Project;
