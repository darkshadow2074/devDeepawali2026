'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={cn('reveal', isVisible && 'visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
