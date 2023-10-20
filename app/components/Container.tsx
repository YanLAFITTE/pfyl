import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
   as?: React.ElementType<any> | string | undefined;
   className?: string;
   children: React.ReactNode;
}

const Container = ({
   as: Component = 'div',
   className,
   children,
}: ContainerProps) => {
   return (
      <Component className={clsx('max-w-7xl mx-auto px-6 lg:px-8 ', className)}>
         <div className='max-w-2xl mx-auto lg:max-w-none '>{children}</div>
      </Component>
   );
};

export default Container;
