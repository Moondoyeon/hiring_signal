'use client';

import Image from 'next/image';
import HighlightBgColor from '../../HighlightBgColor';
import { eduItemBgStyles } from '@/app/constant/dynamicStyles';
import { IEducation } from '@/app/types';

interface Props {
  eduList: IEducation[];
}
export default function EducationItem({ eduList }: Props) {
  return (
    <section>
      {eduList.map((edu, idx) => (
        <HighlightBgColor key={String(edu._id)} willBg={eduItemBgStyles[idx]} bg={'bg-[#f7f7f7]'}>
          <div className="relative w-full">
            <div className="flex mb-6 h-[180px] mobile:h-[160px]">
              <div className="flex-col p-4 w-1/3 justify-start items-center mobile:">
                <h2 className="font-bold text-xl mobile:text-base">{edu.category}</h2>
                <div className="relative w-[65px] h-[65px] m-auto top-[10%] mobile:w-[40px] mobile:h-[40px] mobile:top-[18%]">
                  <Image
                    src={`${
                      edu.category === '대학교' ? '/icons/edu-uni.png' : '/icons/edu-aca.png'
                    }`}
                    alt={edu.title}
                    fill
                    sizes="(max-width: 768px) 40px, (max-width: 1200px) 65px"
                  />
                </div>
              </div>
              <div className="flex-col w-2/3 my-auto mobile:pr-4">
                <p className="font-bold text-2xl mobile:text-lg">{edu.title}</p>
                <p className="text-lg mobile:text-base">{edu.period}</p>
                <p className="text-lg mobile:text-base">{edu.content}</p>
              </div>
            </div>
          </div>
        </HighlightBgColor>
      ))}
    </section>
  );
}
