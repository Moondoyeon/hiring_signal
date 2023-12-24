'use client';

import { keyword } from '@/app/constant';
import useTyping from '@/app/hooks/useTyping';

export default function Typing() {
  const word = useTyping(keyword);

  return (
    <div className="z-98 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold tracking-wide whitespace-nowrap mobile:flex-col mobile:text-4xl tablet:flex-col tablet:text-6xl">
      <span className="mobile:block tablet:block">저는 </span>
      <span className="mobile:block mobile:my-3 tablet:block tablet:my-4">
        <span> &lt; </span>
        {/* <span className="text-[#00DD99]">책임감 있는</span> */}
        <span className="text-[#00DD99]">{word}</span>
        <span> &#47;</span>
        <span>&gt;</span>
      </span>
      <span className="mobile:block tablet:block"> 사람입니다</span>
    </div>
  );
}
