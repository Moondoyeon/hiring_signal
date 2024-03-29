import { MouseEvent, TouchEvent, useState } from 'react';

export default function useCarousel(n: number, desktopW: number, mobileW: number, tabletW: number) {
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

  const deskTopPxTransitions: { [key: number]: string } = {};
  const mobilePxTransitions: { [key: number]: string } = {};
  const tabletPxTransitions: { [key: number]: string } = {};
  for (let i = 0; i < n; i++) {
    deskTopPxTransitions[i] = `-${i * desktopW}px`;
    mobilePxTransitions[i] = `-${i * mobileW}px`;
    tabletPxTransitions[i] = `-${i * tabletW}px`;
  }
  const move = (idx: number) => {
    setCurIdx(idx);
  };

  const [currentX, setCurrentX] = useState(0);
  const [beforeX, setBeforeX] = useState(0);

  const SLIDE_MIN = 30;
  const slide = () => {
    if (currentX - beforeX < -SLIDE_MIN) next();
    if (currentX - beforeX > SLIDE_MIN) prev();
  };

  const getCurrentMouseX = (e: MouseEvent) => {
    setCurrentX(e.clientX);
  };
  const getBeforeMouseX = (e: MouseEvent) => {
    setBeforeX(e.clientX);
  };
  const handleMouseUp = () => {
    slide();
  };
  const handleTouchEnd = () => {
    slide();
  };
  const getBeforeTouchX = (e: TouchEvent) => {
    setBeforeX(e.changedTouches[0].clientX);
  };
  const getCurrentTouchX = (e: TouchEvent) => {
    setCurrentX(e.changedTouches[0].clientX);
  };

  const transitionStyles = {
    desk: { transform: `translate(${deskTopPxTransitions[curIdx]})` },
    mobile: { transform: `translate(${mobilePxTransitions[curIdx]})` },
    tablet: { transform: `translate(${tabletPxTransitions[curIdx]})` },
  };

  return {
    curIdx,
    next,
    prev,
    move,
    transitionStyles,
    deskTopPxTransitions,
    mobilePxTransitions,
    tabletPxTransitions,
    handleMouseDown: getBeforeMouseX,
    handleMouseMove: getCurrentMouseX,
    handleMouseUp,
    handleTouchStart: getBeforeTouchX,
    handleTouchMove: getCurrentTouchX,
    handleTouchEnd,
  };
}
