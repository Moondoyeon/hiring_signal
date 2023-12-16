"use client";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "black" | "white" | "grey";
  size?: "big" | "middle";
  style?: string;
};
export default function Button({
  children,
  theme = "black",
  size = "big",
  onClick,
  style = "",
}: ButtonProps) {
  const config = {
    color: {
      black: "bg-black text-white",
      white: "bg-white text-black border-black",
      grey: "bg-[#DCDCDC] text-white",
    },
    size: {
      big: "w-12 h-12",
      middle: "w-8 h-8",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`${config.color[theme]} ${config.size[size]} ${style}`}
    >
      {children}
    </button>
  );
}
