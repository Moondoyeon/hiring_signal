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
  let leftHidden = curIdx === 0 ? "invisible " : "";
  let rightHidden = curIdx === n - 1 ? "invisible " : "";
  return (
    <>
      <Button
        onClick={prev}
        style={`z-10 absolute top-[40%] left-[-2%] ${leftHidden}`}
      >
        &lt;
      </Button>
      <Button
        onClick={next}
        style={`z-10 absolute top-[40%] left-[98%] ${rightHidden}`}
      >
        &gt;
      </Button>
    </>
  );
}
