import { useState } from "react";

export default function useCarousel(n: number, w: number) {
  const [curIdx, setCurIdx] = useState(0);
  const prev = () => {
    setCurIdx(() => {
      if (curIdx === 0) return 0;
      else return curIdx - 1;
    });
  };
  const next = () => {
    setCurIdx(() => {
      if (curIdx === n - 1) return n - 1;
      else return curIdx + 1;
    });
  };
  const moveTransitions: { [key: number]: string } = {};
  const pxTransitions: { [key: number]: string } = {};
  for (let i = 0; i < n; i++) {
    moveTransitions[i] = `-translate-x-[${i * w}px]`;
    pxTransitions[i] = `-${i * w}px`;
  }

  return { curIdx, next, prev, moveTransitions, pxTransitions };
}
