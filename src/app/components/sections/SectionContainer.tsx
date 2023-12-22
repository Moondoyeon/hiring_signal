'use client';

import useInterSectionObserver from '@/app/hooks/useIntersectionObserver';
import { currentSectionState } from '@/app/recoil';
import { section } from '@/app/types';
import { ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';
interface Props {
  children: ReactNode;
  observeSection: section;
  style?: string;
}
export default function SectionContainer({ children, observeSection, style }: Props) {
  const setCurrentSection = useSetRecoilState(currentSectionState);
  const targetRef = useInterSectionObserver({
    handleIntersect: ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) setCurrentSection(observeSection);
    },
    threshold: 0.8,
  });

  return (
    <section ref={targetRef} className={style}>
      {children}
    </section>
  );
}
