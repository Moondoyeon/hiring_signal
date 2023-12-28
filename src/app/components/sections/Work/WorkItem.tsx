'use client';

import { IWork } from '@/app/types';
import Image from 'next/image';
import { RiAddCircleFill } from '@remixicon/react';

interface Props {
  work: IWork;
  mobileWidth: string;
  desktopWidth: string;
  tabletWidth: string;
}
export default function WorkItem({ work, mobileWidth, desktopWidth, tabletWidth }: Props) {
  return (
    <div
      className={`cursor-pointer hover:bg-[#F1F1FF] transition duration-200 h-[330px] flex items-center justify-center
      px-10 py-6 ${desktopWidth} ${tabletWidth} ${mobileWidth} border border-solid border-black mobile:flex-col mobile:h-[380px] mobile:p-2`}>
      <div className="flex justify-center items-center my-6 mobile:my-14 mobile:h-auto mobile:w-auto">
        <Image
          src={work.thumbnails}
          alt="work experience"
          draggable={false}
          width={0}
          height={0}
          className="mr-6 mobile:mr-0 w-full h-auto"
          sizes="(max-width: 599px) 300px, (max-width:1199px) 330px, 390px"
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
