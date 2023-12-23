'use client';

import { IStudy } from '@/app/types';

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
      className={`min-w-[550px] h-[480px] flex justify-center items-center ${desktopWidth} ${tabletWidth} ${mobileWidth} mobile:h-[360px] border-black border-solid border`}>
      <div className="flex-col h-3/4 w-[80%]">
        <div className="py-8 mobile:py-3">
          <div
            className={`w-24 h-24 ${theme} rounded-full opacity-30 mx-auto mobile:w-16 mobile:h-16`}></div>
          {/* <div className="relative w-24 h-24 mx-auto mobile:w-16 mobile:h-16">
            <Image src="/images/coding.jpg" alt={item.title} fill={true} className="rounded-full" />
          </div> */}
        </div>
        <h3 className="text-2xl font-bold text-center mb-8 mobile:my-4 mobile:text-lg">
          {item.title}
        </h3>
        <p className="text-lg mobile:text-base">{item.content}</p>
      </div>
    </div>
  );
}
