"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SrollMove from "./SrollMove";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const beforeScrollY = useRef(0);

  const handleHeaderVisible = useCallback(() => {
    if (beforeScrollY.current < currentScrollY) setVisible(false);
    else setVisible(true);
    beforeScrollY.current = currentScrollY;
  }, [currentScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderVisible);
    return () => {
      window.addEventListener("scroll", handleHeaderVisible);
    };
  }, [handleHeaderVisible]);

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

  if (visible)
    return (
      <header
        className={`fixed w-full z-50 bg-transparent flex justify-between items-center px-8 py-4 border-b border-${headColor.current}`}
      >
        <a href="/">
          <h1
            className={`w-fit border-y border-${headColor.current} text-3xl font-semibold text-${headColor.current}`}
          >
            채용시그널
          </h1>
        </a>
        {/* onSetActive 속성에 setState 넘겨서 active state를 boolean 값으로 활성화상태 css 자유롭게줄수있지않을까?  */}
        <ul
          className={`relative flex justify-between text-2xl font-semibold text-${headColor.current}`}
        >
          <SrollMove
            to="/main/#work"
            activeStyle={{ borderBottom: `2px ${headColor.current} solid` }}
          >
            <li className="ml-6 cursor-pointer">WORK</li>
          </SrollMove>
          <SrollMove
            to="/main/#project"
            activeStyle={{ borderBottom: `2px ${headColor.current} solid` }}
          >
            <li className="ml-6 cursor-pointer">PROJECT</li>
          </SrollMove>
          <SrollMove
            to="/main/#study"
            activeStyle={{ borderBottom: `2px ${headColor.current} solid` }}
          >
            <li className="ml-6 cursor-pointer">STUDY</li>
          </SrollMove>
          <SrollMove
            to="/main/#signal"
            activeStyle={{ borderBottom: `2px ${headColor.current} solid` }}
          >
            <li className="ml-6 cursor-pointer">SIGNAL</li>
          </SrollMove>
        </ul>
      </header>
    );
}
