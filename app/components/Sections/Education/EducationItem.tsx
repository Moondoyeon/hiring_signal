'use client';

import Image from 'next/image';
import HighlightBgColor from '../../HighlightBgColor';
import { eduItemBgStyles } from '@constant/dynamicStyles';
import { IEducation } from '../../../types/section';
import Link from 'next/link';

interface Props {
  eduList: IEducation[];
}
export default function EducationItem({ eduList }: Props) {
  return (
    <div>
      {eduList.map((edu, idx) => (
        <HighlightBgColor key={String(edu._id)} willBg={eduItemBgStyles[idx]} bg={'bg-[#f7f7f7]'}>
          <div className="relative w-full px-2 py-4 mb-4 mobile:px-1">
            <div className="flex h-[210px] mobile:flex-col mobile:items-center mobile:h-auto">
              <div className="grid grid-rows-3 w-1/3 mobile:w-[90%]">
                <h3 className="font-semibold text-xl row-start-1 row-span-1 mobile:text-base">
                  {edu.category}
                </h3>
                <div className="row-start-2 row-span-3">
                  <div className="relative w-[65px] h-[65px] mx-auto mobile:w-[40px] mobile:h-[40px] mobile:mx-0 mobile:mt-1 mobile:mb-4">
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
              </div>
              <div className="flex-col w-2/3 my-auto mobile:w-[90%]">
                <span className="font-bold text-2xl tablet:text-xl mobile:text-lg">
                  {edu.title}
                </span>

                <div className="mobile:flex-col">
                  <span className="text-lg mb-4 mobile:text-[14px] mobile:mb-0">{edu.period}</span>
                  <div>
                    {edu.learningLink && (
                      <Link
                        href={edu.learningLink}
                        className="underline hover:text-white mr-2 text-lg mobile:text-[14px]">
                        학습기록
                      </Link>
                    )}
                    {edu.retrospectLink && (
                      <Link
                        href={edu.retrospectLink}
                        className="underline hover:text-white mr-2 text-lg mobile:text-[14px]">
                        회고
                      </Link>
                    )}
                  </div>
                </div>

                {edu.content.map((el, idx) => (
                  <p key={idx} className="text-lg tablet:text-lg mobile:text-[15px]">
                    &bull; {el}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </HighlightBgColor>
      ))}
    </div>
  );
}
