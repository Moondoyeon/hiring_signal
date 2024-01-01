'use client';
import { currentSectionState } from '@/recoil';
import { scroll } from '@/utils';
import Image from 'next/image';

import { useSetRecoilState } from 'recoil';

export default function ClickButton() {
  const setCurrentSection = useSetRecoilState(currentSectionState);
  return (
    <span
      onClick={() => {
        scroll('work-section');
        setCurrentSection('work-section');
      }}
      className="absolute top-[85%] left-1/2 -translate-y-[85%] -translate-x-1/2 text-white cursor-pointer ">
      <Image
        className="animate-bounce mb-2 mobile:w-6"
        src={'/icons/down-arrow.png'}
        alt={'down arrow'}
        width={30}
        height={21}
      />
      <div className="mobile:hidden">click</div>
    </span>
  );
}