'use client';
import { IStudy } from 'types/section';
import Carousel from '@components/Carousel';
import CarouselCircleButtons from '@components/Carousel/CarouselCircleButtons';
import StudyItem from './StudyItem';
import useCarousel from '@hooks/useCarousel';

interface Props {
  contentName: string;
  list: IStudy[];
  theme: 'bg-yellow-300' | 'bg-blue-300';
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
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  } = useCarousel(
    Math.ceil(list.length),
    CAROUSEL_ITEM_WIDTH,
    CAROUSEL_ITEM_WIDTH_MOBILE,
    CAROUSEL_ITEM_WIDTH_TABLET,
  );

  return (
    <div className="flex-col">
      <h2 className="text-3xl font-semibold mb-4 mobile:text-xl">{contentName}</h2>

      <section className="relative flex-col w-[550px] mb-28 mobile:w-[350px] mobile:mx-auto tablet:mx-auto">
        <Carousel
          desktopWidth={'max-w-[550px]'}
          mobileWidth={'mobile:max-w-[350px]'}
          tabletWidth={'tablet:max-w-[550px]'}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          handleMouseMove={handleMouseMove}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
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
