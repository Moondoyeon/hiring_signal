import { useState } from 'react';

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
  // const moveTransitions: { [key: number]: string } = {};
  const pxTransitions: { [key: number]: string } = {};
  for (let i = 0; i < n; i++) {
    // moveTransitions[i] = `-translate-x-[${i * w}px]`;
    pxTransitions[i] = `-${i * w}px`;
  }
  const move = (idx: number) => {
    setCurIdx(idx);
  };

  const [currentX, setCurrentX] = useState(0);
  const [beforeX, setBeforeX] = useState(0);
  const slide = () => {
    if (currentX <= beforeX) next();
    else prev();
  };
  const getCurrentMouseX = (e: any) => {
    setCurrentX(e.clientX);
    slide();
  };
  const getBeforeMouseX = (e: any) => {
    setBeforeX(e.clientX);
  };

  const getCurrentTouchMouseX = (e: any) => {
    setCurrentX(e.changedTouches[0].clientX);
    slide();
  };
  const getBeforeTouchMouseX = (e: any) => {
    setCurrentX(e.changedTouches[0].clientX);
  };
  return {
    curIdx,
    next,
    prev,
    move,
    pxTransitions,
    getCurrentMouseX,
    getBeforeMouseX,
    getCurrentTouchMouseX,
    getBeforeTouchMouseX,
  };
}
