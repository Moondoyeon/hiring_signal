'use client';
import useCarousel from '@/app/hooks/useCarousel';
import { IStudy } from '@/app/types';

import Carousel from '../../Carousel';
import CarouselCircleButtons from '../../Carousel/CarouselCircleButtons';
import StudyItem from './StudyItem';

interface Props {
  contentName: string;
  list: IStudy[];
  theme: 'bg-yellow-500' | 'bg-blue-500';
}

export default function Content({ contentName, list, theme }: Props) {
  const CAROUSEL_ITEM_WIDTH = 550;
  const CAROUSEL_ITEM_WIDTH_MOBILE = 350;
  const CAROUSEL_ITEM_WIDTH_TABLET = 550;
  const {
    curIdx,
    move,
    transitionStyles,
    handleMouseDown,
    handleMouseUp,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel(
    Math.ceil(list.length),
    CAROUSEL_ITEM_WIDTH,
    CAROUSEL_ITEM_WIDTH_MOBILE,
    CAROUSEL_ITEM_WIDTH_TABLET,
  );

  return (
    <div className="flex-col mobile:mx-auto tablet:mx-auto">
      <h2 className="text-3xl font-semibold mb-4 mobile:text-xl">{contentName}</h2>

      <section className="relative flex-col w-[550px] mb-28 mobile:w-[370px] mobile:mx-auto tablet:mx-auto">
        <Carousel
          desktopWidth={'max-w-[550px]'}
          mobileWidth={'mobile:max-w-[350px]'}
          tabletWidth={'tablet:max-w-[550px]'}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          handleTouchStart={handleTouchStart}
          handleTouchEnd={handleTouchEnd}
          moveStyle={transitionStyles}>
          {list.map((item) => (
            <StudyItem
              key={item._id}
              item={item}
              theme={theme}
              desktopWidth="min-w-[550px]"
              mobileWidth="mobile:min-w-[350px]"
              tabletWidth="tablet:min-w-[550px]"
            />
          ))}
        </Carousel>
        <CarouselCircleButtons
          listLength={list.length}
          circleColor={theme}
          move={move}
          curIdx={curIdx}
        />
      </section>
    </div>
  );
}
