'use client';

import { sections } from '@/app/constant';
import { currentSectionState } from '@/app/store';
import { section } from '@/app/types';
import { scroll } from '@/app/utils';
import { useRecoilState } from 'recoil';

export default function Menu({ isMenuIconClicked }: { isMenuIconClicked: boolean }) {
  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);

  const handleSectionChange = (destination: section) => {
    scroll(destination);
    setCurrentSection(destination);
  };
  const TOP_SECTION_VISIBLE = currentSection === 'movie-section';
  return (
    <nav
      className={`relative flex justify-between text-2xl font-sans font-semibold mobile:mt-0 tablet:mt-3 
    ${TOP_SECTION_VISIBLE ? 'text-white' : 'text-black'} 
    ${
      !TOP_SECTION_VISIBLE || (TOP_SECTION_VISIBLE && isMenuIconClicked)
        ? ''
        : 'mobile:hidden tablet:hidden'
    }`}>
      {Object.entries(sections).map(([, section]) => (
        <div
          key={section.name}
          className="relative ml-4 cursor-pointer mobile:text-[15px] mobile:ml-0 mobile:mr-3 tablet:ml-0 tablet:mr-4"
          onClick={() => handleSectionChange(section.to)}>
          {section.name}
          <div
            className={`absolute top-[145%] tablet:top-[120%] mobile:top-[128%] mobile:h-1 w-full h-2 
          ${section.to === currentSection && !TOP_SECTION_VISIBLE ? 'bg-black' : ''} 
          ${section.to === currentSection && TOP_SECTION_VISIBLE ? 'bg-white' : ''} `}
          />
        </div>
      ))}
    </nav>
  );
}
