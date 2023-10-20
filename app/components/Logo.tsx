import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface LogoProps {
   invert?: boolean;
   href?: string;
   className?: string;
   children: React.ReactNode;
}

const Logo = ({ invert, href, className, children, ...props }: LogoProps) => {
   className = clsx(
      className,
      'text-neutral-950 font-semibold hover:text-red-500'
   );
   const inner = <span className='relative'>{children}</span>;
   if (href) {
      return (
         <Link href={href} className={className} {...props}>
            {inner}
         </Link>
      );
   }
   return (
      <h2
         className={clsx(
            'cursor-pointer text-lg sm:text-xl duration-300',
            className
         )}
         {...props}
      >
         {inner}
      </h2>
   );
};

export default Logo;
