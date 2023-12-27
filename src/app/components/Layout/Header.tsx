'use client';

import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { useCallback, useEffect, useRef, useState } from 'react';
import { sections } from '../../constant';
import { borderColors, textColors } from '../../constant/dynamicStyles';
import { scroll } from '@/app/utils';
import { currentSectionState } from '@/app/store';
import { section } from '@/app/types';
import useThrottle from '@/app/hooks/useThrottle';

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
  // 특정 스크롤 위치에서 헤더색상 변경
  const headColor = useRef('white');
  const TOP_SECTION_VISIBLE = currentSection === 'movie-section';
  headColor.current = TOP_SECTION_VISIBLE ? 'white' : 'black';

  const [isMenuIconClicked, setMenuClick] = useState(false);

  if (visible) {
    return (
      <header
        className={`fixed w-full z-50 flex justify-between items-center px-8 py-3 border-b mobile:px-4 mobile:flex-col mobile:items-start tablet:px-4 tablet:flex-col tablet:items-start ${
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
              <Image src="/icons/menu-white.png" alt="menu" width={22} height={28} />
            )}
          </p>
        </div>

        <nav
          className={`relative flex justify-between text-2xl font-sans font-semibold mobile:mt-0 tablet:mt-3 ${
            textColors[headColor.current]
          } ${
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
                className={`absolute top-[145%] tablet:top-[120%] mobile:top-[128%] mobile:h-1 w-full h-2 ${
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
