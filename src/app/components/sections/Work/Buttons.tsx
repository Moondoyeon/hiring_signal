'use client';

import Button from '../../Form/Button';

export interface CarouselButtonProps {
  next: () => void;
  prev: () => void;
  curIdx: number;
  n: number;
}
export default function Buttons({ next, prev, curIdx, n }: CarouselButtonProps) {
  return (
    <>
      <Button
        onClick={prev}
        theme={curIdx === 0 ? 'grey' : 'black'}
        style="z-10 absolute top-[40%] left-[-2%]"
        disabled={curIdx === 0}>
        &lt;
      </Button>
      <Button
        onClick={next}
        theme={curIdx === n - 1 ? 'grey' : 'black'}
        style="z-10 absolute top-[40%] left-[98%]"
        disabled={curIdx === n - 1}>
        &gt;
      </Button>
    </>
  );
}
