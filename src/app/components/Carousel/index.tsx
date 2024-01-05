'use client';

import useWhichDevice from '@/app/hooks/useWhichDevice';
import { MouseEventType, TouchEventType } from '@/app/types';
import { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  moveStyle: Record<string, Record<string, string>>;
  mobileWidth: string;
  desktopWidth?: string;
  tabletWidth?: string;
  style?: string;
  handleMouseDown?: (e: MouseEventType<HTMLDivElement>) => void;
  handleMouseUp?: (e: MouseEventType<HTMLDivElement>) => void;
  handleTouchStart?: (e: TouchEventType<HTMLDivElement>) => void;
  handleTouchEnd?: (e: TouchEventType<HTMLDivElement>) => void;
  handleTouchMove?: (e: TouchEventType<HTMLDivElement>) => void;
}
export default function Carousel({
  handleMouseDown,
  handleMouseUp,
  handleTouchStart,
  handleTouchEnd,
  handleTouchMove,
  moveStyle,
  children,
  mobileWidth,
  desktopWidth,
  tabletWidth,
  style,
}: CarouselProps) {
  const { isMobile, isTablet } = useWhichDevice();

  return (
    <div
      id="carousel-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      className={`${desktopWidth} overflow-hidden ${mobileWidth} ${tabletWidth} ${style}`}>
      <div
        id="carousel"
        className="flex transition duration-300 ease-in-out"
        style={isMobile ? moveStyle.mobile : isTablet ? moveStyle.tablet : moveStyle.desk}>
        {children}
      </div>
    </div>
  );
}
