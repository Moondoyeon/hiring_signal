"use client";
import { CSSProperties, ReactNode } from "react";
import { Link } from "react-scroll";

interface Props {
  to: string;
  activeStyle?: CSSProperties | undefined;
  children: ReactNode;
}
export default function SrollMove({ to, children }: Props) {
  return (
    <Link to={to} smooth={true} spy={true}>
      {children}
    </Link>
  );
}
