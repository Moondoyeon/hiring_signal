"use client";

import Image from "next/image";
import { CarouselButtonProps } from "../Work/Buttons";

export default function Buttons({
  prev,
  next,
  curIdx,
  n,
}: CarouselButtonProps) {
  // let leftHidden = curIdx === 0 ? "invisible" : "";
  // let rightHidden = curIdx === n - 1 ? "invisible " : "";
  return (
    <div className="text-right mb-2 w-[92%]">
      <button onClick={prev}>
        <Image
          src={
            curIdx === 0
              ? "/images/arrow-left-in.png"
              : "/images/arrow-left.png"
          }
          width={36}
          height={30}
          style={{ width: "auto", height: "auto" }}
          alt="left arrow"
        />
      </button>
      <button onClick={next}>
        <Image
          src={
            curIdx === n - 1
              ? "/images/arrow-right-in.png"
              : "/images/arrow-right.png"
          }
          width={36}
          height={30}
          alt="right arrow"
          style={{ width: "auto", height: "auto", marginLeft: "8px" }}
        />
      </button>
    </div>
  );
}
