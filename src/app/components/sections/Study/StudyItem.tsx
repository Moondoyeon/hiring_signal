'use client';

import { IStudy } from '@/app/types';
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
      className={`cursor-pointer min-w-[550px] h-auto flex justify-center items-start py-10 ${desktopWidth} ${tabletWidth} ${mobileWidth} border-black border-solid border`}>
      <div className="flex-col h-auto w-[85%]">
        <div
          className={`w-28 h-28 ${theme} rounded-full mx-auto flex justify-center items-center mobile:w-20 mobile:h-20`}>
          <div className="relative w-24 h-24 mx-auto mobile:w-16 mobile:h-16">
            <Image
              src={item.image_url}
              alt={item.title}
              fill={true}
              className="rounded-full"
              sizes="(max-width: 599px) 64px, 96px"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center my-8 mobile:my-6 mobile:text-[18px]">
          {item.title}
        </h3>
        <p className="text-lg mobile:text-base">{item.content}</p>
      </div>
    </div>
  );
}
