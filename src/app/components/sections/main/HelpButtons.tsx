'use client';

import useScrollY from '@/app/hooks/useScrollY';
import Button from '../../Form/Button';
import { scroll } from '@/app/util';
import { currentSectionState } from '@/app/recoil';
import { useSetRecoilState } from 'recoil';

export default function HelpButtons() {
  const { currentY } = useScrollY();
  const bottom = currentY > 3960 ? 'bottom-24' : 'bottom-4';
  const setCurrentSection = useSetRecoilState(currentSectionState);

  return (
    <div className={`${currentY < 60 ? 'hidden' : ''} `}>
      <Button
        theme="white"
        style={`mr-2 z-20 fixed ${bottom} right-16 hover:bg-black hover:text-white transition`}
        disabled>
        하트
      </Button>
      <Button
        onClick={() => {
          scroll('movie-section');
          setCurrentSection('movie-section');
        }}
        theme="white"
        style={`rotate-90 z-30 fixed ${bottom} right-4 hover:bg-black hover:text-white`}>
        &lt;
      </Button>
    </div>
  );
}
