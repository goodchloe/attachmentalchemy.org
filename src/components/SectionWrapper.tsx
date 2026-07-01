
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id, style }) => {
  return (
    <section id={id} style={style} className={cn('py-12 md:py-16 lg:py-20 animate-fade-in', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
