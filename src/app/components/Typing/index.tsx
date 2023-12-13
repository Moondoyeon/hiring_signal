"use client";

import { keyword } from "@/app/constant";
import useTyping from "@/app/hooks/useTyping";

export default function Typing() {
  let word = useTyping(keyword);

  return (
    <div className="z-98 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold tracking-wide whitespace-nowrap">
      <span>저는 </span>
      <span> &lt; </span>
      <span className="text-[#00DD99]">{word}</span>
      <span> &#47;</span>
      <span>&gt;</span>
      <span> 사람입니다</span>
    </div>
  );
}
