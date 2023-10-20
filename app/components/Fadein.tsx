'use client';
import React, { HTMLProps, createContext, useContext } from 'react';
import { MotionProps, motion, useReducedMotion } from 'framer-motion';

type FadeInProps = HTMLProps<HTMLDivElement>  & MotionProps ;

type FadeInStaggerProps = {
   faster?: boolean;
} & MotionProps;

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -200px' };

const FadeIn: React.FC<FadeInProps> = (props) => {
   const shouldReduceMotion = useReducedMotion();
   const isInStaggerGroup = useContext(FadeInStaggerContext);
   return (
      <motion.div
         variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
            visible: { opacity: 1, y: 0 },
         }}
         transition={{ duration: 0.5 }}
         {...(isInStaggerGroup
            ? {}
            : { initial: 'hidden', whileInView: 'visible', viewport })}
         {...props}
         ref={null}
      />
   );
};

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
   faster = false,
   children,
   ...props
}) => {
   return (
      <FadeInStaggerContext.Provider value={true}>
         <motion.div
            initial='hidden'
            viewport={viewport}
            whileInView="visible"
         
            transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
            {...props}
         >
            {children}
         </motion.div>
      </FadeInStaggerContext.Provider>
   );
};
export default FadeIn;
