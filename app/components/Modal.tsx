'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

import gsap from 'gsap';

type Project = {
   title: string;
   src: string;
   color: string;
   link: string;
};

interface ModalProps {
   modal: { active: boolean; index: number };
   projects: Project[];
}

const scaleAnimation = {
   initial: { scale: 0, x: '-50%', y: '-50%' },
   enter: {
      scale: 1,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
   },
   closed: {
      scale: 0,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
   },
};

const Modal = ({ modal, projects }: ModalProps) => {
   const { active, index } = modal;
   const modalContainer = useRef(null);

   // useEffect(() => {
   //    //Move Container

   //    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
   //       duration: 0.8,
   //       ease: 'power3',
   //    });

   //    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
   //       duration: 0.8,
   //       ease: 'power3',
   //    });

   //    window.addEventListener('mousemove', (e) => {
   //       const { pageX, pageY } = e;

   //       xMoveContainer(pageX);

   //       yMoveContainer(pageY);

   //    });

   //    window.addEventListener('touchmove', (e) => {
   //       const { pageX, pageY } = e;

   //       xMoveContainer(pageX);

   //       yMoveContainer(pageY);

   //    });

   // }, []);

   useEffect(() => {
      // Move Container

      let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
         duration: 0.8,
         ease: 'power3',
      });

      let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
         duration: 0.8,
         ease: 'power3',
      });

      const moveContainer = (pageX: number, pageY: number) => {
         xMoveContainer(pageX);
         yMoveContainer(pageY);
      };

      const handleMouseMove = (e: MouseEvent) => {
         const { pageX, pageY } = e;
         moveContainer(pageX, pageY);
      };

      const handleTouchMove = (e: TouchEvent) => {
         const touch = e.touches[0];
         const { pageX, pageY } = touch;
         moveContainer(pageX, pageY);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchstart', handleTouchMove);

      return () => {
         // Remove event listeners when the component unmounts
         window.removeEventListener('mousemove', handleMouseMove);
         window.removeEventListener('touchstart', handleTouchMove);
      };
   }, [modalContainer]);

   return (
      <>
         <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial='initial'
            animate={active ? 'enter' : 'closed'}
            className='modalContainer '
         >
            <div className='modalSlider' style={{ top: index * -100 + '%' }}>
               {projects.map((project, index) => {
                  const { src } = project;
                  return (
                     <div
                        className='modal flex flex-col '
                        key={`modal_${index}`}
                        onTouchStart={(e) => {
                           e.preventDefault(); // Prevent the default touch behavior
                        }}
                     >
                        <Image
                           src={`/${src}`}
                           width={300}
                           height={300}
                           alt='image'
                        />
                     </div>
                  );
               })}
            </div>
         </motion.div>
      </>
   );
};

export default Modal;
