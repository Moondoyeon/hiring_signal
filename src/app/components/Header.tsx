"use client";

import { useRef, useState } from "react";
import { sections } from "../constant";
import {
  borderColors,
  headBorderStyles,
  textColors,
} from "../constant/dynamicStyles";
import MoveScrollY from "./MoveScrollY";
import useScrollY from "../hooks/useScrollY";

export default function Header() {
  const beforeScrollY = useRef(0);
  const [visible, setVisible] = useState(true);
  const handleHeaderVisible = () => {
    if (currentY > beforeScrollY.current) setVisible(false);
    else setVisible(true);
    beforeScrollY.current = currentY;
  };
  const { currentY } = useScrollY(handleHeaderVisible);
  const headColor = useRef("white");
  headColor.current = currentY < 1300 ? "white" : "black";

  if (visible) {
    return (
      <header
        className={`fixed w-full z-50 ${
          currentY < 1300
            ? "bg-transparent"
            : "bg-white/30 backdrop-blur-sm backdrop-saturate-50"
        } flex justify-between items-center px-8 py-4 border-b ${
          borderColors[headColor.current]
        }`}
      >
        <MoveScrollY to="movie-section">
          <h1
            className={`w-fit text-3xl font-semibold cursor-pointer ${
              textColors[headColor.current]
            } border-y pt-2 pb-1 ${borderColors[headColor.current]}`}
          >
            오퍼시그널
          </h1>
        </MoveScrollY>

        <ul
          className={`relative flex justify-between text-2xl font-semibold font-['EF_watermelonSalad'] ${
            textColors[headColor.current]
          }`}
        >
          {Object.entries(sections).map(([key, section]) => (
            <MoveScrollY
              key={section.name}
              to={section.to}
              activeStyle={headBorderStyles[headColor.current]}
            >
              <li className="ml-4 cursor-pointer">{section.name}</li>
            </MoveScrollY>
          ))}
        </ul>
      </header>
    );
  }
}
