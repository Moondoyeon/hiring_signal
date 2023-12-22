'use client';

import Button from '../../Form/Button';
import { scroll } from '@/app/util';
import { currentSectionState } from '@/app/recoil';
import { useRecoilState } from 'recoil';

export default function HelpButtons() {
  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);
  const bottom = currentSection === 'signal-section' ? 'bottom-24' : 'bottom-4';

  return (
    <div className={currentSection === 'movie-section' ? 'hidden' : ''}>
      <Button
        theme="white"
        style={`mr-2 z-20 fixed ${bottom} right-16 hover:bg-black hover:text-white transition`}
        disabled>
        시그널
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
