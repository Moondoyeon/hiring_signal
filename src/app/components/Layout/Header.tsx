'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import useThrottle from '@/app/hooks/useThrottle';
import { section } from '@/app/types';
import Menu from './Menu';
import { scroll } from '@/app/utils';
import { useRecoilState } from 'recoil';
import { currentSectionState } from '@/app/store';
// import { gowunBatang } from '@/app/fonts';

export default function Header() {
  // 스크롤 방향에 따라 헤더 가시성
  const [visible, setVisible] = useState(true);
  const beforeScrollY = useRef(0);
  const handleHeaderVisible = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > beforeScrollY.current && currentY > 50) setVisible(false);
    else setVisible(true);
    beforeScrollY.current = currentY;
  }, []);

  const throttledHandler = useThrottle(handleHeaderVisible, 250);
  useEffect(() => {
    window.addEventListener('scroll', throttledHandler);
    return () => {
      window.addEventListener('scroll', throttledHandler);
    };
  }, [throttledHandler]);

  // 유저가 보고있는 섹션으로 이동
  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);
  const handleSectionChange = (destination: section) => {
    scroll(destination);
    setCurrentSection(destination);
  };

  const TOP_SECTION_VISIBLE =
    currentSection === 'movie-section' || currentSection === 'work-section';
  const [isMenuIconClicked, setMenuClick] = useState(false);

  if (visible) {
    return (
      <header
        className={`fixed w-full z-50 flex justify-between items-center px-8 py-3 border-b mobile:px-4 mobile:flex-col mobile:items-start tablet:px-4 tablet:flex-col tablet:items-start
        ${
          TOP_SECTION_VISIBLE
            ? 'bg-transparent mobile:border-none tablet:border-none border-white'
            : 'bg-white/30 backdrop-blur-sm backdrop-saturate-50 border-black'
        }`}>
        <div
          className={`mobile:flex mobile:justify-between mobile:w-full mobile:items-center tablet:flex tablet:justify-between tablet:w-full tablet:items-center 
          ${!TOP_SECTION_VISIBLE ? 'mobile:hidden tablet:hidden' : ''}`}>
          <h1
            onClick={() => handleSectionChange('movie-section')}
            className={`w-fit text-3xl cursor-pointer py-1 border-y whitespace-nowrap mobile:text-xl 
            ${TOP_SECTION_VISIBLE ? 'border-white text-white' : 'border-black text-black'} 
              `}>
            채용시그널
          </h1>
          <span
            className={`laptop:hidden desktop:hidden whitespace-nowrap text-base transition cursor-pointer  
            ${TOP_SECTION_VISIBLE ? 'white' : 'black'}`}
            onClick={() => setMenuClick(!isMenuIconClicked)}>
            {isMenuIconClicked ? (
              <RiCloseLine color="white" size={38} />
            ) : (
              <RiMenuLine color="white" size={32} />
            )}
          </span>
        </div>

        <Menu isMenuIconClicked={isMenuIconClicked} />
      </header>
    );
  }
}
