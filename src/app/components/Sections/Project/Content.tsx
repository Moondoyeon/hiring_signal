'use client';

import useCarousel from '@/app/hooks/useCarousel';
import useInterSectionObserver from '@/app/hooks/useIntersectionObserver';
import useWhichDevice from '@/app/hooks/useWhichDevice';
import ProjectItem from './ProjectItem';
import { IProject } from '@/app/types';
import Carousel from '@/app/components/Carousel';
import CarouselLeftRightButton from '@/app/components/Carousel/CarouselLeftRightButton';
import { observeGlobalBgChange } from '@/app/utils';

interface Props {
  projects: IProject[];
}
export default function Content({ projects }: Props) {
  const CAROUSEL_ITEM_WIDTH = 580;
  const CAROUSEL_ITEM_WIDTH_MOBILE = 328;
  const CAROUSEL_ITEM_WIDTH_TABLET = 800;

  const { isDesktopOrLaptop } = useWhichDevice();
  const carouselCount = isDesktopOrLaptop ? Math.ceil(projects.length / 2) : projects.length;
  const {
    curIdx,
    next,
    prev,
    transitionStyles,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel(
    carouselCount,
    CAROUSEL_ITEM_WIDTH,
    CAROUSEL_ITEM_WIDTH_MOBILE,
    CAROUSEL_ITEM_WIDTH_TABLET,
  );

  const targetRef = useInterSectionObserver({
    handleIntersect: observeGlobalBgChange('purple-mode'),
  });

  return (
    <div className="relative" ref={targetRef}>
      <CarouselLeftRightButton
        next={next}
        prev={prev}
        curIdx={curIdx}
        n={carouselCount}
        leftStyle="bottom-[111%] left-[84%] mobile:left-[75%] mobile:bottom-[107%] mobile:w-10 mobile:h-10 tablet:left-[80%] tablet:bottom-[111%]"
        rightStyle="bottom-[111%] left-[88.7%] mobile:left-[88%] mobile:bottom-[107%] mobile:w-10 mobile:h-10 tablet:left-[92%] tablet:bottom-[111%]"
      />
      <div className="mobile:flex mobile:justify-center tablet:flex tablet:justify-center">
        <Carousel
          desktopWidth={'max-w-[1280px]'}
          mobileWidth={'mobile:max-w-[380px]'}
          tabletWidth={'tablet:max-w-[800px]'}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          handleMouseMove={handleMouseMove}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
          moveStyle={transitionStyles}
          style="mobile:pt-4">
          {projects.map((project) => (
            <ProjectItem
              key={project._id}
              desktopWidth={'min-w-[580px]'}
              mobileWidth={'mobile:min-w-[320px]'}
              tabletWidth={'tablet:min-w-[800px]'}
              project={project}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
