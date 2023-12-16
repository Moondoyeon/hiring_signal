import { atom } from "recoil";
import { bgColorMode } from "../types";

export const bgColorModeState = atom<bgColorMode>({
  key: "bgColorMode",
  default: "default-mode",
});
