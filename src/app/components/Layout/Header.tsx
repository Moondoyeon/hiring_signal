'use client';

import { useRecoilState } from 'recoil';
import { useRef, useState } from 'react';
import { sections } from '../../constant';
import { borderColors, textColors } from '../../constant/dynamicStyles';
import useScrollY from '../../hooks/useScrollY';
import { scroll } from '@/app/utils';
import { currentSectionState } from '@/app/store';
import { section } from '@/app/types';
import Image from 'next/image';

export default function Header() {
  // 스크롤 업 다운시, 헤더 가시성
  const [visible, setVisible] = useState(true);
  const beforeScrollY = useRef(0);
  const handleHeaderVisible = () => {
    if (currentY > beforeScrollY.current) setVisible(false);
    else setVisible(true);
    beforeScrollY.current = currentY;
  };
  const { currentY } = useScrollY(handleHeaderVisible);

  // 유저가 보고있는 섹션으로 이동
  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);
  const handleSectionChange = (destination: section) => {
    scroll(destination);
    setCurrentSection(destination);
  };
  // 특정 스크롤 위치에서 헤더색상 변경
  const headColor = useRef('white');
  const TOP_SECTION_VISIBLE = currentSection === 'movie-section';
  headColor.current = TOP_SECTION_VISIBLE ? 'white' : 'black';

  const [isMenuIconClicked, setMenuClick] = useState(false);

  if (visible) {
    return (
      <header
        className={`fixed w-full z-50 flex justify-between items-center px-8 py-3 border-b mobile:px-4 mobile:flex-col mobile:items-start tablet:px-4 tablet:flex-col tablet:items-start font-['EF_watermelonSalad'] ${
          borderColors[headColor.current]
        } ${
          TOP_SECTION_VISIBLE
            ? 'bg-transparent mobile:border-none'
            : 'bg-white/30 backdrop-blur-sm backdrop-saturate-50'
        } 
        `}>
        <div
          className={`mobile:flex mobile:justify-between mobile:w-full mobile:items-center tablet:flex tablet:justify-between tablet:w-full tablet:items-center ${
            !TOP_SECTION_VISIBLE ? 'mobile:hidden tablet:hidden' : ''
          }`}>
          <h1
            onClick={() => handleSectionChange('movie-section')}
            className={`w-fit text-3xl font-semibold cursor-pointer pt-2 pb-1 border-y whitespace-nowrap mobile:text-xl mobile:pt-2 ${
              borderColors[headColor.current]
            } ${textColors[headColor.current]}`}>
            채용시그널
          </h1>
          <p
            className={`laptop:hidden desktop:hidden whitespace-nowrap text-base transition cursor-pointer pb-1 ${
              textColors[headColor.current]
            }`}
            onClick={() => setMenuClick(!isMenuIconClicked)}>
            {isMenuIconClicked ? (
              <Image src="/icons/close.png" alt="close" width={20} height={18} />
            ) : (
              <Image src="/icons/menu-white.png" alt="menu" width={20} height={26} />
            )}
          </p>
        </div>

        <nav
          className={`relative flex justify-between text-2xl font-semibold mobile:text-base mobile:mt-3 tablet:mt-3 tablet:text-2xl ${
            !TOP_SECTION_VISIBLE || (TOP_SECTION_VISIBLE && isMenuIconClicked)
              ? ''
              : 'mobile:hidden tablet:hidden'
          } ${textColors[headColor.current]}`}>
          {Object.entries(sections).map(([, section]) => (
            <div
              key={section.name}
              className="relative ml-4 cursor-pointer mobile:ml-0 mobile:mr-4 tablet:ml-0 tablet:mr-4"
              onClick={() => handleSectionChange(section.to)}>
              {section.name}
              <div
                className={`absolute top-[145%] tablet:top-[140%] mobile:top-[135%] mobile:h-1 w-full h-2 ${
                  section.to === currentSection && !TOP_SECTION_VISIBLE ? 'bg-black' : ''
                } ${
                  section.to === currentSection && TOP_SECTION_VISIBLE ? 'bg-white' : ''
                } `}></div>
            </div>
          ))}
        </nav>
      </header>
    );
  }
}
