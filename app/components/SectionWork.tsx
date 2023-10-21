import React from 'react';
import Image from 'next/image';
import agence from '../../public/agence-web.png';
import FadeIn, { FadeInStagger } from './Fadein';

const SectionWork = () => {
   return (
      <div className='pt-20' id='work'>
         <FadeIn>
            <h3 className='text-3xl'>Selected works</h3>
            <div className='h-px bg-black w-full my-4 lg:my-14 ' />
         </FadeIn>
         <FadeInStagger>
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
               <FadeIn>
                  <li className='p-5 bg-black flex justify-center items-center '>
                     <Image src={agence} alt='' height={500} width={500}  className=''/>
                  </li>
               </FadeIn>
               <FadeIn>
                  <li className='p-5 bg-black flex justify-center items-center '>
                     <Image src={agence} alt='' height={500} width={500}  className=''/>
                  </li>
               </FadeIn>
               <FadeIn>
                  <li className='p-5 bg-black flex justify-center items-center '>
                     <Image src={agence} alt='' height={500} width={500}  className=''/>
                  </li>
               </FadeIn>
               <FadeIn>
                  <li className='p-5 bg-black flex justify-center items-center '>
                     <Image src={agence} alt='' height={500} width={500}  className=''/>
                  </li>
               </FadeIn>
            </ul>
         </FadeInStagger>
      </div>
   );
};

export default SectionWork;
