'use client';

import Image from 'next/image';
import { RiAddCircleFill } from '@remixicon/react';
import Link from 'next/link';
import { IWork } from '@/app/types';
import { IWork2 } from '.';
import HighlightBgColor from '../../HighlightBgColor';

interface Props {
  work: IWork2;
  mobileWidth: string;
  desktopWidth: string;
  tabletWidth: string;
}
export default function WorkItem({ work, mobileWidth, desktopWidth, tabletWidth }: Props) {
  return (
    <div
      className={`h-[330px] flex items-center px-10 py-6 tablet:px-4 mobile:px-4 mobile:py-4 mobile:flex-col border border-solid border-black mobile:min-h-[480px] ${desktopWidth} ${tabletWidth} ${mobileWidth}`}>
      <div className="basis-1/3 mr-6 mobile:basis-1/4 mobile:mr-0 tablet:w-auto tablet:mr-4 ">
        <div className="w-[200px] mx-auto mobile:mt-10">
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
      <div className="basis-2/3 h-full py-6 tablet:py-0 mobile:flex-col mobile:relative tablet:relative mobile:basis-3/4 mobile:py-2 ">
        <div className="h-[50%] flex items-start justify-between tablet:h-[36%] tablet:flex-col tablet:justify-start mobile:h-auto mobile:flex-col">
          <div className="flex items-end">
            <HighlightBgColor willBg="before:bg-[#86E0C8]" customStyle="z-10">
              <Link
                href={work.companyLink}
                target="_blank"
                className="relative z-20 underline text-2xl font-semibold mobile:text-xl">
                {work.companyName}
              </Link>
            </HighlightBgColor>
            <span className="text-xl ml-2 mobile:text-base">{work.position}</span>
          </div>
          <span className="text-base mobile:text-[14px]">{work.period}</span>
        </div>
        <div className="h-[50%] mobile:h-1/3">
          <div id="border" className="w-full bg-black h-0.5 mb-4 mobile:mt-4" />
          {work.content.map((el, idx) => (
            <p className="tablet:text-[14.5px] mobile:text-[15px]" key={idx}>
              &bull; {el}
            </p>
          ))}
        </div>
        {work.notionLink && (
          <Link
            href={work.notionLink}
            target="_blank"
            className="flex justify-end items-center top-[80%] left-[75%] tablet:absolute tablet:top-[92%] tablet:left-[85%] mobile:absolute mobile:top-[92%] mobile:left-[78%]">
            <RiAddCircleFill size={22} />
            <p className="underline pb-[0.5px] ml-1 mobile:text-sm">자세히</p>
          </Link>
        )}
      </div>
    </div>
  );
}
