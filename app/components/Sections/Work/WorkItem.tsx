'use client';

import Image from 'next/image';
import { RiAddCircleFill } from '@remixicon/react';
import Link from 'next/link';
import { IWork } from 'types/section';
import HighlightBgColor from '@components/HighlightBgColor';

interface Props {
  work: IWork;
  mobileWidth: string;
  desktopWidth: string;
  tabletWidth: string;
}
export default function WorkItem({ work, mobileWidth, desktopWidth, tabletWidth }: Props) {
  return (
    <div
      className={`min-h-[380px] flex items-center px-10 py-6 tablet:px-4 tablet:py-8 mobile:px-5 mobile:py-4 mobile:flex-col border border-solid border-black mobile:h-auto ${desktopWidth} ${tabletWidth} ${mobileWidth}`}>
      <div className="basis-1/3 mr-6 mobile:basis-1/4 mobile:mr-0 tablet:w-auto tablet:mr-4 mobile:flex mobile:items-center">
        <div className="w-[200px] mx-auto mobile:my-10 mobile:h-[50px]">
          <Image
            src={work.thumbnails}
            alt="work experience"
            draggable={false}
            width={0}
            height={0}
            className="w-full h-auto"
            sizes="(max-width: 599px) 300px, (max-width:1199px) 200px, 200px"
            priority={work.companyName === '아트와'}
          />
        </div>
      </div>

      <div className="basis-2/3 h-full flex-col justify-center items-center py-3 tablet:h-auto tablet:py-0 mobile:flex-col mobile:w-full mobile:basis-3/4 mobile:py-0">
        <div className="h-[40%] flex items-start justify-between tablet:flex-col tablet:justify-start mobile:h-auto mobile:flex-col">
          <div className="flex items-end">
            <HighlightBgColor willBg="before:bg-[#86E0C8]">
              <Link
                href={work.companyLink}
                target="_blank"
                className="relative z-20 underline text-2xl font-semibold mobile:text-xl">
                {work.companyName}
              </Link>
            </HighlightBgColor>
            <span className="text-xl ml-2 mobile:text-base">{work.position}</span>
          </div>
          <span className="text-lg mobile:text-[14px]">{work.period}</span>
        </div>
        <div className="h-auto mobile:h-auto">
          <div
            id="border"
            className="w-full bg-black h-[2px] mb-4 tablet:mt-10 tablet:mb-2 mobile:mt-8 mobile:mb-2"
          />
          {work.content.map((el, idx) => (
            <p className="text-lg mobile:text-[15px]" key={idx}>
              &bull; {el}
            </p>
          ))}
        </div>
        <div className="mt-1 mobile:mt-4 flex justify-end items-center">
          {work.notionLink && (
            <HighlightBgColor willBg="before:bg-[#86E0C8]">
              <Link href={work.notionLink} target="_blank" className="flex relative items-center">
                <RiAddCircleFill size={22} />
                <span className="underline ml-1 mobile:text-base tablet:text-lg">자세히</span>
              </Link>
            </HighlightBgColor>
          )}
        </div>
      </div>
    </div>
  );
}
