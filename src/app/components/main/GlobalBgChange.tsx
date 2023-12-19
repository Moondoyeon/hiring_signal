"use client";

import useScrollY from "@/app/hooks/useScrollY";
import { useEffect } from "react";

export function GlobalBgChange() {
  const { currentY } = useScrollY();
  useEffect(() => {
    if (currentY < 1400) {
      document.documentElement.classList.add("purple-white-mode");
      document.documentElement.classList.remove(
        "peach-mode",
        "peach-white-mode",
        "purple-mode"
      );
    } else if (currentY >= 1400 && currentY <= 1900) {
      document.documentElement.classList.add("purple-mode");
      document.documentElement.classList.remove(
        "peach-mode",
        "peach-white-mode",
        "purple-white-mode"
      );
    } else if (currentY > 1900 && currentY <= 3700) {
      document.documentElement.classList.add("peach-white-mode");
      document.documentElement.classList.remove(
        "purple-mode",
        "peach-mode",
        "peach-white-mode"
      );
    } else if (currentY > 3700) {
      document.documentElement.classList.add("peach-mode");
      document.documentElement.classList.remove(
        "peach-white-mode",
        "purple-mode",
        "purple-white-mode"
      );
    }
  }, [currentY]);

  return <></>;
}
