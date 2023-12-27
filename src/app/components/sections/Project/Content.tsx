'use client';

import useCarousel from '@/app/hooks/useCarousel';
import { IProject } from '@/app/types';
import useInterSectionObserver from '@/app/hooks/useIntersectionObserver';
import { observeGlobalBgChange } from '@/app/utils';
import ProjectItem from './ProjectItem';

import Carousel from '../../Carousel';
import CarouselLeftRightButton from '../../Carousel/CarouselLeftRightButton';
import useWhichDevice from '@/app/hooks/useWhichDevice';

interface Props {
  projects: IProject[];
}
export default function Content({ projects }: Props) {
  const CAROUSEL_ITEM_WIDTH = 580;
  const CAROUSEL_ITEM_WIDTH_MOBILE = 328;
  const CAROUSEL_ITEM_WIDTH_TABLET = 800;

  const { isDesktopOrLaptop } = useWhichDevice();
  const carouselCount = isDesktopOrLaptop ? Math.ceil(projects.length / 2) : projects.length;
  const { curIdx, next, prev, transitionStyles } = useCarousel(
    carouselCount,
    CAROUSEL_ITEM_WIDTH,
    CAROUSEL_ITEM_WIDTH_MOBILE,
    CAROUSEL_ITEM_WIDTH_TABLET,
  );

  const targetRef = useInterSectionObserver({
    handleIntersect: observeGlobalBgChange('purple-mode'),
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className="relative" ref={targetRef}>
      <CarouselLeftRightButton
        next={next}
        prev={prev}
        curIdx={curIdx}
        n={carouselCount}
        leftStyle="bottom-[112%] left-[84%] mobile:left-[75%] mobile:bottom-[108%] mobile:w-10 mobile:h-10 tablet:left-[85%] tablet:bottom-[112%]"
        rightStyle="bottom-[112%] left-[88.7%] mobile:left-[88%] mobile:bottom-[108%] mobile:w-10 mobile:h-10 tablet:left-[92%] tablet:bottom-[112%]"
      />
      <Carousel
        desktopWidth={'max-w-[1280px]'}
        mobileWidth={'mobile:max-w-[380px]'}
        tabletWidth={'tablet:max-w-[800px]'}
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
  );
}
