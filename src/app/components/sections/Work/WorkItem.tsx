'use client';

import { IWork } from '@/app/types';
import Image from 'next/image';
import { RiAddCircleFill } from '@remixicon/react';
import useWhichDevice from '@/app/hooks/useWhichDevice';
// import useWhichDevice from '@/app/hooks/useWhichDevice';

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
      className={`cursor-pointer hover:bg-[#F1F1FF] transition duration-200 h-[330px] flex items-center justify-center
      px-10 py-6 ${desktopWidth} ${tabletWidth} ${mobileWidth} border border-solid border-black mobile:flex-col mobile:h-[380px] mobile:p-2`}>
      <div className="mobile:h-[100px] flex justify-center items-center my-6">
        <Image
          src={work.thumbnails}
          alt="work experience"
          draggable={false}
          width={isDesktopOrLaptop ? 390 : isTablet ? 330 : 150}
          height={isDesktopOrLaptop ? 400 : isTablet ? 400 : 100}
          className="mr-6 mobile:mr-0"
        />
      </div>
      <div className="basis-3/5 h-full p-4 mobile:flex-col mobile:relative mobile:h-[200px] mobile:py-2 ">
        <div className="h-1/2 flex justify-between mobile:h-1/3">
          <p className="text-2xl font-bold mobile:text-xl">{work.companyName}</p>
          <p className="text-lg mobile:text-base">{work.position}</p>
        </div>
        <div className="h-1/3 mobile:h-1/3">
          <div id="border" className="w-full bg-black h-0.5 mb-4" />
          <p>{work.content}</p>
        </div>
        <div className="flex justify-end mobile:absolute top-[80%] left-[75%]">
          <RiAddCircleFill />
          <p className="pt-[2px] ml-1">더보기</p>
        </div>
      </div>
    </div>
  );
}
