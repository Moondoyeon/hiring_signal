"use client";

import useBgColorAnimation from "@/app/hooks/useBgColorAnimation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BgColorAnimation from "../BgColorAnimation/BgColorAnimation";

interface IEducation {
  _id: string;
  category: string;
  title: string;
  period: string;
  content: string;
  grade?: string;
}
interface Props {
  eduList: IEducation[];
}
export default function EducationItem({ eduList }: Props) {
  const eduItemColorArray = [
    "before:bg-[#86E0C8]",
    "before:bg-[#83ADEC]",
    "before:bg-[#F3CE7A]",
  ];
  return (
    <section>
      {eduList.map((edu, idx) => (
        <BgColorAnimation
          key={edu._id}
          willBg={eduItemColorArray[idx]}
          bg={"bg-[#f7f7f7]"}
        >
          <div className="relative w-full">
            <div className=" flex mb-6">
              <div className="flex-col p-4 w-1/3 h-[220px] justify-start items-center">
                <h2 className="font-bold text-xl">{edu.category}</h2>
                <div className="relative w-[65px] h-[65px] left-[40%] top-[18%]">
                  <Image
                    src={`${
                      edu.category === "대학교"
                        ? "/images/edu-uni.png"
                        : "/images/edu-aca.png"
                    }`}
                    alt={edu.title}
                    fill={true}
                  />
                </div>
              </div>
              <div className=" flex-col h-[180px]  w-2/3 py-[5%]">
                <p className="font-bold text-2xl">{edu.title}</p>
                <p className="text-lg">{edu.period}</p>
                <p className="text-lg">{edu.content}</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </BgColorAnimation>
      ))}
    </section>
  );
}
