'use client';

import { IWork } from '@/app/types';
import Image from 'next/image';
import { RiAddCircleFill } from '@remixicon/react';
import useWhichDevice from '@/app/hooks/useWhichDevice';

interface Props {
  work: IWork;
  mobileWidth: string;
  desktopWidth: string;
  tabletWidth: string;
}
export default function WorkItem({ work, mobileWidth, desktopWidth, tabletWidth }: Props) {
  const { isTablet, isDesktopOrLaptop } = useWhichDevice();
  return (
    <div
      className={`cursor-pointer hover:bg-[#F1F1FF] transition duration-200 h-[330px] flex justify-evenly 
      py-6 px-4 ${desktopWidth} ${tabletWidth} ${mobileWidth} border border-solid border-black mobile:flex-col mobile:h-auto mobile:px-0 tablet:px-0 `}>
      <Image
        className="basis-2/5 mx-6"
        src="/images/work-artwa.jpeg"
        width={isDesktopOrLaptop || isTablet ? 350 : 300}
        height={300}
        alt="work at artwa"
        draggable={false}
      />

      <div className="h-full basis-3/5 mx-6 mobile:mt-3">
        <div className="flex justify-between h-1/2 mobile:h-1/5">
          <span className="text-2xl font-bold mobile:text-xl">{work.companyName}</span>
          <span className="text-lg mobile:text-base">{work.position}</span>
        </div>
        <div className="w-full bg-black h-0.5 mb-4" />
        <p className="mb-16 mobile:h-1/5">{work.content}</p>
        {work.notionLink && (
          <div className="relative flex justify-end">
            <RiAddCircleFill />
            <span className="ml-1">더보기</span>
          </div>
        )}
      </div>
    </div>
  );
}
