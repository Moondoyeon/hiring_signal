"use client";

import { useRecoilState } from "recoil";
import { useRef, useState } from "react";
import { sections } from "../../constant";
import { borderColors, textColors } from "../../constant/dynamicStyles";
import useScrollY from "../../hooks/useScrollY";
import { scroll } from "@/app/util";
import { currentSectionState } from "@/app/recoil";
import { section } from "@/app/types";

export default function Header() {
  // 스크롤 업 다운시, 헤더 가시성
  const beforeScrollY = useRef(0);
  const [visible, setVisible] = useState(true);
  const handleHeaderVisible = () => {
    if (currentY > beforeScrollY.current) setVisible(false);
    else setVisible(true);
    beforeScrollY.current = currentY;
  };
  // 특정 스크롤 위치에서 헤더색상 변경
  const { currentY } = useScrollY(handleHeaderVisible);
  const headColor = useRef("white");
  headColor.current = currentY < 1300 ? "white" : "black";

  // 유저가 보고있는 섹션으로 이동
  const [currentSection, setCurrentSection] =
    useRecoilState(currentSectionState);

  const handleSectionChange = (destination: section) => {
    scroll(destination);
    setCurrentSection(destination);
  };

  if (visible) {
    return (
      <header
        className={`fixed w-full z-50 flex justify-between items-center px-8 py-4 border-b ${
          borderColors[headColor.current]
        } ${
          currentY < 1300
            ? "bg-transparent"
            : "bg-white/30 backdrop-blur-sm backdrop-saturate-50"
        }  `}
      >
        <h1
          onClick={() => handleSectionChange("movie-section")}
          className={`w-fit text-3xl font-semibold cursor-pointer pt-2 pb-1 border-y ${
            borderColors[headColor.current]
          } ${textColors[headColor.current]}`}
        >
          오퍼시그널
        </h1>

        <ul
          className={`relative flex justify-between text-2xl font-semibold font-['EF_watermelonSalad'] ${
            textColors[headColor.current]
          }`}
        >
          {Object.entries(sections).map(([key, section]) => (
            <li
              key={section.name}
              className="relative ml-4 cursor-pointer"
              onClick={() => handleSectionChange(section.to)}
            >
              {section.name}
              <div
                className={`absolute top-[160%] w-full h-2 ${
                  section.to === currentSection && currentY > 1300
                    ? "bg-black"
                    : ""
                } ${
                  section.to === currentSection && currentY < 1300
                    ? "bg-white"
                    : ""
                } `}
              ></div>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}
