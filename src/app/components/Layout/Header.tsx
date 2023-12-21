'use client';

import { useRecoilState } from 'recoil';
import { useRef, useState } from 'react';
import { sections } from '../../constant';
import { borderColors, textColors } from '../../constant/dynamicStyles';
import useScrollY from '../../hooks/useScrollY';
import { scroll } from '@/app/util';
import { currentSectionState } from '@/app/recoil';
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
  let TOP_SECTION_VISIBLE = currentSection === 'movie-section';
  headColor.current = TOP_SECTION_VISIBLE ? 'white' : 'black';

  const [mobileTabVisible, setMobileTabVisible] = useState(false);

  if (visible) {
    return (
      <header
        className={`fixed w-full z-50 flex justify-between items-center px-8 py-3 border-b mobile:px-4 mobile:flex-col mobile:items-start font-['EF_watermelonSalad'] ${
          borderColors[headColor.current]
        } ${
          TOP_SECTION_VISIBLE
            ? 'bg-transparent mobile:border-none'
            : 'bg-white/30 backdrop-blur-sm backdrop-saturate-50'
        } 
        `}>
        <div
          className={`mobile:flex mobile:justify-between mobile:w-full mobile:items-center ${
            !TOP_SECTION_VISIBLE ? 'mobile:hidden' : ''
          }`}>
          <h1
            onClick={() => handleSectionChange('movie-section')}
            className={`w-fit text-3xl font-semibold cursor-pointer pt-2 pb-1 border-y whitespace-nowrap mobile:text-lg mobile:pt-1 ${
              borderColors[headColor.current]
            } ${textColors[headColor.current]}`}>
            오퍼시그널
          </h1>
          <p
            className={`laptop:hidden desktop:hidden whitespace-nowrap text-base transition cursor-pointer pb-1 ${
              textColors[headColor.current]
            }`}
            onClick={() => setMobileTabVisible(!mobileTabVisible)}>
            {mobileTabVisible ? (
              <Image src="/icons/close.png" alt="close" width={20} height={18} />
            ) : (
              <Image src="/icons/menu-white.png" alt="menu" width={20} height={26} />
            )}
          </p>
        </div>

        <nav
          className={`relative flex justify-between text-2xl font-semibold mobile:text-base mobile:mt-3 ${
            !TOP_SECTION_VISIBLE || (TOP_SECTION_VISIBLE && mobileTabVisible) ? '' : 'mobile:hidden'
          } ${textColors[headColor.current]}`}>
          {Object.entries(sections).map(([_, section]) => (
            <div
              key={section.name}
              className="relative ml-4 cursor-pointer mobile:ml-0 mobile:mr-4"
              onClick={() => handleSectionChange(section.to)}>
              {section.name}
              <div
                className={`absolute top-[160%] mobile:top-[135%] mobile:h-1 w-full h-2 ${
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
