"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SrollMove from "./SrollMove";
import useBgColor from "../hooks/useGlobalBgColor";
import Link from "next/link";
import { sections } from "../constant";
import {
  borderColors,
  headBorderStyles,
  textColors,
} from "../constant/dynamicStyles";

export default function Header() {
  const [currentScrollY, setCurrentScrollY] = useState(0);

  // 1.헤더색깔변경 하양 or 검정
  const beforeScrollY = useRef(0);
  const headColor = useRef("white");
  headColor.current = currentScrollY < 1000 ? "white" : "black";

  const handleCurrentScrollY = useCallback(() => {
    setCurrentScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleCurrentScrollY);
    return () => {
      window.addEventListener("scroll", handleCurrentScrollY);
    };
  }, [handleCurrentScrollY]);

  // 2.스크롤 다운시 헤더 안보이게, 반대는 헤더 보이게
  const [visible, setVisible] = useState(true);
  const handleHeaderVisible = useCallback(() => {
    if (beforeScrollY.current < currentScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    beforeScrollY.current = currentScrollY;
  }, [currentScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderVisible);
    return () => {
      window.addEventListener("scroll", handleHeaderVisible);
    };
  }, [handleHeaderVisible]);

  // 3.배경색깔 변경
  const { handleBgColorChange } = useBgColor();
  useEffect(() => {
    if (currentScrollY >= 1330 && currentScrollY < 2200) {
      handleBgColorChange("purple-mode");
    } else if (currentScrollY >= 4000) {
      handleBgColorChange("orange-mode");
    } else {
      handleBgColorChange("default-mode");
    }
  }, [currentScrollY, handleBgColorChange]);

  if (visible)
    return (
      <header
        className={`fixed w-full z-50 bg-transparent flex justify-between items-center px-8 py-4 border-b ${
          borderColors[headColor.current]
        }`}
      >
        <Link href="/">
          <h1
            className={`w-fit text-3xl font-semibold ${
              textColors[headColor.current]
            } border-y pt-2 pb-1 ${borderColors[headColor.current]}`}
          >
            오퍼시그널
          </h1>
        </Link>

        <ul
          className={`relative flex justify-between text-2xl font-semibold font-['EF_watermelonSalad'] ${
            textColors[headColor.current]
          }`}
        >
          {Object.values(sections).map((section) => (
            <SrollMove
              key={section.name}
              to={section.to}
              activeStyle={headBorderStyles[headColor.current]}
            >
              <li className="ml-4 cursor-pointer">{section.name}</li>
            </SrollMove>
          ))}
        </ul>
      </header>
    );
}
