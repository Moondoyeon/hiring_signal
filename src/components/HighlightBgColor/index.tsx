'use client';

import useBgColorAnimation from '@/hooks/useBgColorAnimation';
import { ReactNode } from 'react';

interface Props {
  bg?: string;
  willBg: string;
  customStyle?: string;
  children: ReactNode;
}
export default function HighlightBgColor({
  bg = 'bg-transparent',
  willBg,
  customStyle,
  children,
}: Props) {
  const { hovered, handleMouseEnter, handleMouseLeave } = useBgColorAnimation();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative bg-color-container ${customStyle} ${bg} ${willBg} ${
        hovered ? 'hovered' : ''
      } `}>
      {children}
    </div>
  );
}
