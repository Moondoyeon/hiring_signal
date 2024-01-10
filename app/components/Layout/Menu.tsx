'use client';

import { SECTION } from '@constant/index';
import { currentSectionState } from '@store/index';
import { handleScrollView } from '@utils/index';
import { section } from 'types/section';
import { useRecoilState } from 'recoil';

export default function Menu({ isMenuIconClicked }: { isMenuIconClicked: boolean }) {
  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);

  const handleSectionChange = (destination: section) => {
    handleScrollView(destination);
    setCurrentSection(destination);
  };
  const TOP_SECTION_VISIBLE = currentSection === 'movie-section';

  return (
    <nav
      className={`relative flex justify-between mobile:mt-0 tablet:mt-0 
    ${TOP_SECTION_VISIBLE ? 'text-white mobile:mt-2 tablet:mt-4' : 'text-black'} 
    ${
      !TOP_SECTION_VISIBLE || (TOP_SECTION_VISIBLE && isMenuIconClicked)
        ? ''
        : 'mobile:hidden tablet:hidden'
    }`}>
      {SECTION.map((section) => (
        <div
          key={section.name}
          className="relative ml-4 cursor-pointer font-medium text-2xl mobile:text-[15px] tablet:text-xl mobile:ml-0 mobile:mr-3 tablet:ml-0 tablet:mr-4"
          onClick={() => handleSectionChange(section.to)}>
          {section.name}
          <div
            className={`absolute top-[145%] tablet:top-[128%] mobile:top-[128%] mobile:h-1 w-full h-1 
       ${section.to === currentSection && !TOP_SECTION_VISIBLE ? 'bg-black' : ''} 
       ${section.to === currentSection && TOP_SECTION_VISIBLE ? 'bg-white' : ''} `}
          />
        </div>
      ))}
    </nav>
  );
}
