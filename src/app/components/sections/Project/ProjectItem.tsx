'use client';

import useCarousel from '@/app/hooks/useCarousel';
import { IProject } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import Buttons from './Buttons';
import useInterSectionObserver from '@/app/hooks/useIntersectionObserver';
import { observeGlobalBgChange } from '@/app/util';

interface Props {
  projects: IProject[];
}
export default function ProjectItem({ projects }: Props) {
  const { curIdx, next, prev, pxTransitions } = useCarousel(Math.ceil(projects.length / 2), 580);
  const moveStyle = {
    transform: `translate(${pxTransitions[curIdx]})`,
  };

  const targetRef = useInterSectionObserver({
    handleIntersect: observeGlobalBgChange('purple-mode'),
    threshold: 1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className="relative" ref={targetRef}>
      <Buttons prev={prev} next={next} curIdx={curIdx} n={Math.ceil(projects.length / 2)} />
      <div id="carousel-container" className="max-w-[1280px] overflow-hidden pt-6">
        <div id="carousel" className={`flex transition duration-300 ease-in-out`} style={moveStyle}>
          {projects.map((project) => (
            <Link
              key={project._id}
              href={project.link}
              target="_blank"
              className="min-w-[580px] h-[400px] mr-6 relative overflow-hidden">
              <Image
                src={project.thumbnail}
                style={{ objectFit: 'cover' }}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                alt={project.projectName}
                className="brightness-75 transition duration-200 linear hover:scale-125"
              />
              <div className="text-white ml-6">
                <span className="absolute bottom-[18%] font-bold text-3xl">
                  {project.projectName}
                </span>
                <span className="absolute bottom-[10%] font-light text-2xl">{project.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
