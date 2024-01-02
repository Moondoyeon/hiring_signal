'use client';

import useInterSectionObserver from '@/app/hooks/useIntersectionObserver';
import { section } from '@/app/types';
import { ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentSectionState } from '@/app/store';
interface Props {
  children: ReactNode;
  observeSection: section;
  threshold?: number;
  rootMargin?: string;
  style?: string;
}
export default function SectionContainer({
  children,
  observeSection,
  threshold = 0.5,
  rootMargin,
  style,
}: Props) {
  const setCurrentSection = useSetRecoilState(currentSectionState);
  const targetRef = useInterSectionObserver({
    handleIntersect: ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) setCurrentSection(observeSection);
    },
    threshold: threshold,
    rootMargin: rootMargin,
  });

  return (
    <section id={observeSection} ref={targetRef} className={style}>
      {children}
    </section>
  );
}
