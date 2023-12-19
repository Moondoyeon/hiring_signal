"use client";
import { CSSProperties, ReactNode } from "react";
import { Link } from "react-scroll";

interface Props {
  to: string;
  activeClass?: string | undefined;
  activeStyle?: CSSProperties | undefined;
  children: ReactNode;
  onSetActive?: () => void;
  onSetInactive?: () => void;
}
export default function MoveScrollY({
  to,
  activeClass,
  activeStyle,
  onSetActive,
  onSetInactive,
  children,
}: Props) {
  return (
    <Link
      to={to}
      smooth={true}
      spy={true}
      activeStyle={activeStyle}
      activeClass={activeClass}
      onSetActive={onSetActive}
      onSetInactive={onSetInactive}
    >
      {children}
    </Link>
  );
}
