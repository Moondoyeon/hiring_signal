"use client";

import { ReactNode } from "react";
import useBgColorAnimation from "../../hooks/useBgColorAnimation";

interface Props {
  bg: string;
  willBg: string;
  children: ReactNode;
}
export default function BgColorAnimation({ bg, willBg, children }: Props) {
  const { hovered, handleMouseEnter, handleMouseLeave } = useBgColorAnimation();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative  bg-color-container ${bg} ${willBg} ${
        hovered ? "hovered" : ""
      } `}
    >
      {children}
    </div>
  );
}
