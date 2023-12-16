"use client";

import Button from "../Button";

export interface CarouselButtonProps {
  next: () => void;
  prev: () => void;
  curIdx: number;
  n: number;
}
export default function Buttons({
  next,
  prev,
  curIdx,
  n,
}: CarouselButtonProps) {
  return (
    <>
      <Button
        onClick={prev}
        theme={curIdx === 0 ? "grey" : "black"}
        style="z-10 absolute bottom-[112%] left-[84%]"
      >
        &lt;
      </Button>
      <Button
        onClick={next}
        theme={curIdx === n - 1 ? "grey" : "black"}
        style="z-10 absolute bottom-[112%] left-[88.7%]"
      >
        &gt;
      </Button>
    </>
  );
}
