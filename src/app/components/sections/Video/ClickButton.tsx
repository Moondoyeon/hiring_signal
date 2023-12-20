"use client";
import Image from "next/image";
import { scroll } from "@/app/util";
import { currentSectionState } from "@/app/recoil";
import { useSetRecoilState } from "recoil";

export default function ClickButton() {
  const setCurrentSection = useSetRecoilState(currentSectionState);
  return (
    <span
      onClick={() => {
        scroll("work-section");
        setCurrentSection("work-section");
      }}
      className="absolute z-98 top-[85%] left-1/2 text-white cursor-pointer"
    >
      <Image
        className="animate-bounce mb-2"
        src={"/icons/down-arrow.png"}
        alt={"down arrow"}
        width={30}
        height={21}
      />
      <span>click</span>
    </span>
  );
}
