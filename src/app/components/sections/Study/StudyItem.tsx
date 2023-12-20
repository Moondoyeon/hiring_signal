'use client';

import useCarousel from '@/app/hooks/useCarousel';
import { IStudy } from '@/app/types';

interface Props {
  listName: string;
  list: IStudy[];
  theme: 'bg-yellow-500' | 'bg-blue-500';
}

export default function StudyItem({ listName, list, theme }: Props) {
  const {
    curIdx,
    move,
    pxTransitions,
    getBeforeMouseX,
    getCurrentMouseX,
    getBeforeTouchMouseX,
    getCurrentTouchMouseX,
  } = useCarousel(Math.ceil(list.length), 550);

  const moveStyle = {
    transform: `translate(${pxTransitions[curIdx]})`,
  };

  return (
    <div className="flex-col w-full">
      <section className="w-[550px]">
        <h2 className="text-3xl font-semibold mb-4">{listName}</h2>
      </section>

      <section className="relative flex-col w-[550px] mb-28">
        <div
          id="carousel-container"
          onMouseDown={getBeforeMouseX}
          onMouseUp={getCurrentMouseX}
          onTouchStart={getBeforeTouchMouseX}
          onTouchEnd={getCurrentTouchMouseX}
          className="max-w-[550px] overflow-hidden border border-black border-solid ">
          <div
            id="carousel"
            className={`flex transition duration-300 ease-in-out`}
            style={moveStyle}>
            {list.map((item) => (
              <div
                key={item._id}
                className="min-w-[550px] h-[480px] flex justify-center items-center">
                <div className="flex-col h-3/4 w-[80%]">
                  <div className="py-8">
                    <div className={`w-24 h-24 ${theme} rounded-full opacity-30 mx-auto`}></div>
                    {/* <div className="relative w-24 h-24 mx-auto">
                      <Image
                        src="/images/coding.jpg"
                        alt={item.title}
                        fill={true}
                        className="rounded-full "
                      ></Image>
                    </div> */}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-8">{item.title}</h3>
                  <p className="text-lg ">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ul className="absolute left-1/2 -translate-x-1/2 mt-6 flex gap-4">
          {list.map((_, idx) => (
            <li
              key={idx}
              onClick={() => move(idx)}
              className={
                idx === curIdx
                  ? `h-4 w-4 rounded-full cursor-pointer opacity-95 ${theme}`
                  : `h-4 w-4 rounded-full cursor-pointer opacity-30 ${theme}`
              }></li>
          ))}
        </ul>
      </section>
    </div>
  );
}
