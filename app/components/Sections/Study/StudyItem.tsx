'use client';

import { IStudy } from 'types/section';
import Image from 'next/image';

interface Props {
  item: IStudy;
  desktopWidth: string;
  mobileWidth: string;
  tabletWidth: string;
  theme: string;
}

export default function StudyItem({ item, theme, desktopWidth, mobileWidth, tabletWidth }: Props) {
  return (
    <div
      key={String(item._id)}
      className={`cursor-pointer min-w-[550px] h-[530px] mobile:h-[480px] tablet:h-[530px] flex justify-center items-start pt-12 ${desktopWidth} ${tabletWidth} ${mobileWidth} border-black border-solid border`}>
      <div className="flex-col h-auto w-[90%]">
        <div
          className={`w-28 h-28 ${theme} rounded-full mx-auto flex justify-center items-center mobile:w-20 mobile:h-20`}>
          <div className="relative w-24 h-24 mx-auto mobile:w-16 mobile:h-16">
            <Image
              src={item.image_url}
              alt={item.title}
              fill={true}
              className="rounded-full"
              sizes="(max-width: 599px) 64px, 96px"
              priority={
                item.title === '모던 자바스크립트 Deep Dive' || item.title === '코어 자바스크립트'
              }
              quality={60}
            />
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-8 mobile:my-6 mobile:flex-col mobile:items-center">
          <h3 className="text-2xl font-semibold mobile:text-[18px]">{item.title}</h3>
          {item.from && (
            <span className="text-lg mobile:text-sm text-gray-700 mt-1 ml-1">{item.from}</span>
          )}
        </div>

        <p className="text-lg mobile:text-[15px]">{item.content}</p>
      </div>
    </div>
  );
}
