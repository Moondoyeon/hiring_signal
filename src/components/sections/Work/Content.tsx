'use client';

import Carousel from '../../Carousel';
import CarouselLeftRightButton from '../../Carousel/CarouselLeftRightButton';
import { IWork } from '@/types';
import useCarousel from '@/hooks/useCarousel';
import WorkItem from './WorkItem';

interface Props {
  works: IWork[];
}
export default function Content({ works }: Props) {
  const CAROUSEL_ITEM_WIDTH = 1280;
  const CAROUSEL_ITEM_WIDTH_MOBILE = 350;
  const CAROUSEL_ITEM_WIDTH_TABLET = 800;

  const {
    curIdx,
    transitionStyles,
    next,
    prev,
    handleMouseDown,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel(
    works.length,
    CAROUSEL_ITEM_WIDTH,
    CAROUSEL_ITEM_WIDTH_MOBILE,
    CAROUSEL_ITEM_WIDTH_TABLET,
  );

  return (
    <div className="relative">
      <CarouselLeftRightButton
        next={next}
        prev={prev}
        curIdx={curIdx}
        n={works.length}
        leftStyle="top-[40%] left-[-2%] mobile:top-[-18%] mobile:left-[75%] mobile:w-10 mobile:h-10 tablet:left-[85%] tablet:top-[-28%]"
        rightStyle="top-[40%] left-[98%] mobile:top-[-18%] mobile:left-[88%] mobile:w-10 mobile:h-10 tablet:left-[92%] tablet:top-[-28%]"
      />

      <div className="mobile:flex mobile:justify-center tablet:flex tablet:justify-center">
        <Carousel
          desktopWidth={'max-w-[1280px]'}
          mobileWidth={'mobile:max-w-[350px]'}
          tabletWidth={'tablet:max-w-[800px]'}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
          moveStyle={transitionStyles}>
          {works.map((work) => (
            <WorkItem
              key={String(work._id)}
              work={work}
              desktopWidth={'min-w-[1280px]'}
              mobileWidth={'mobile:min-w-[350px]'}
              tabletWidth={'tablet:min-w-[800px]'}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
