'use client';

import { keyword } from '@/app/constant';
import useTyping from '@/app/hooks/useTyping';

export default function Typing() {
  const word = useTyping(keyword);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center text-white text-7xl font-bold whitespace-nowrap tracking-wide mobile:flex-col mobile:items-start mobile:w-[140px] tablet:flex-col tablet:items-start tablet:w-[240px] mobile:text-4xl tablet:text-6xl">
      <span className="">저는</span>

      <div className="flex mx-3 mobile:mx-0 mobile:my-3 tablet:mx-0 tablet:my-5">
        <span> &lt;</span>
        <span className="mx-3 text-[#00DD99]">{word}</span>
        <span> &#47; &gt;</span>
      </div>

      <span>사람입니다</span>
    </div>
  );
}
