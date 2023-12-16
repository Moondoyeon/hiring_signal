import { useRecoilState } from "recoil";
import { bgColorModeState } from "../recoil";
import { useEffect } from "react";
import { bgColorMode } from "../types";

export default function useBgColor() {
  const [bgColor, setBgColor] = useRecoilState(bgColorModeState);

  useEffect(() => {
    if (bgColor === "purple-mode") {
      document.documentElement.classList.add("purple-mode");
      document.documentElement.classList.remove("orange-mode");
      document.documentElement.classList.remove("default-mode");
    }
    if (bgColor === "orange-mode") {
      document.documentElement.classList.add("orange-mode");
      document.documentElement.classList.remove("purple-mode");
      document.documentElement.classList.remove("default-mode");
    }
    if (bgColor === "default-mode") {
      document.documentElement.classList.add("default-mode");
      document.documentElement.classList.remove("orange-mode");
      document.documentElement.classList.remove("purple-mode");
    }
  }, [bgColor]);

  const handleBgColorChange = (mode: bgColorMode) => {
    setBgColor(mode);
  };

  return { bgColor, handleBgColorChange };
}
