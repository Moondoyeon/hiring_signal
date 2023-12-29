'use client';

import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { useCallback, useEffect, useRef, useState } from 'react';
import { scroll } from '@/app/utils';
import { currentSectionState } from '@/app/store';
import { section } from '@/app/types';
import useThrottle from '@/app/hooks/useThrottle';
import Menu from './Menu';

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
            ? 'bg-transparent mobile:border-none border-white'
            : 'bg-white/30 backdrop-blur-sm backdrop-saturate-50 border-black'
        }`}>
        <div
          className={`mobile:flex mobile:justify-between mobile:w-full mobile:items-center tablet:flex tablet:justify-between tablet:w-full tablet:items-center 
          ${!TOP_SECTION_VISIBLE ? 'mobile:hidden tablet:hidden' : ''}`}>
          <h1
            onClick={() => handleSectionChange('movie-section')}
            className={`font-gown w-fit text-3xl cursor-pointer py-1 border-y whitespace-nowrap mobile:text-xl 
            ${TOP_SECTION_VISIBLE ? 'border-white text-white' : 'border-black text-black'}`}>
            채용시그널
          </h1>
          <span
            className={`laptop:hidden desktop:hidden whitespace-nowrap text-base transition cursor-pointer pb-1 
            ${TOP_SECTION_VISIBLE ? 'white' : 'black'}`}
            onClick={() => setMenuClick(!isMenuIconClicked)}>
            {isMenuIconClicked ? (
              <Image
                src="/icons/close.png"
                alt="close"
                width={22}
                height={20}
                className="h-[20px] w-[22px]"
              />
            ) : (
              <Image
                src="/icons/menu-white.png"
                alt="menu"
                width={24}
                height={18}
                className="h-[18px] w-[24px]"
              />
            )}
          </span>
        </div>

        <Menu isMenuIconClicked={isMenuIconClicked} />
      </header>
    );
  }
}
