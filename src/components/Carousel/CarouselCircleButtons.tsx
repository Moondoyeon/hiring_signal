interface Props {
  listLength: number;
  move: (idx: number) => void;
  curIdx: number;
  circleColor: string;
}
export default function CarouselCircleButtons({ listLength, curIdx, circleColor, move }: Props) {
  return (
    <ul className="absolute left-1/2 -translate-x-[50%] mt-6 flex gap-4">
      {Array.from({ length: listLength }).map((_, idx) => (
        <li
          key={idx}
          onClick={() => move(idx)}
          className={
            idx === curIdx
              ? `h-4 w-4 rounded-full cursor-pointer opacity-95 ${circleColor}`
              : `h-4 w-4 rounded-full cursor-pointer opacity-30 ${circleColor}`
          }></li>
      ))}
    </ul>
  );
}
