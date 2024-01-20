'use client';

import HighlightBgColor from '@components/HighlightBgColor';
import { RiAddCircleLine } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';
import { IProject } from 'types/section';

interface Props {
  project: IProject;
  mobileWidth: string;
  desktopWidth: string;
  tabletWidth: string;
}
export default function ProjectItem({ project, tabletWidth, mobileWidth, desktopWidth }: Props) {
  return (
    <Link
      href={project.link}
      target="_blank"
      key={String(project._id)}
      className={`h-[500px] relative overflow-hidden mr-6 ${desktopWidth} ${tabletWidth} ${mobileWidth} mobile:h-[480px] mobile:mr-2 tablet:mr-0 `}>
      <Image
        src={project.thumbnail}
        style={{ objectFit: 'cover' }}
        fill
        alt={project.projectName}
        sizes="(max-width:599px) 320px, (max-width:1199px),800px, 580px"
        className="brightness-75 transition duration-300 linear hover:scale-110"
        priority={project.projectName !== '빌리지뭐'}
      />
      <div className="absolute bottom-[0%] w-full">
        <HighlightBgColor willBg="before:bg-pink-500">
          <div className="text-white px-8 py-3 relative ">
            <span className=" font-medium text-3xl mobile:text-2xl mr-2">
              {project.projectName}
            </span>
            <span className="font-light text-2xl mobile:text-lg">{project.type}</span>
            <p className="mt-1">{project.description}</p>
            <div className="flex justify-end mt-2 p-1">
              <div className="flex relative items-center">
                <RiAddCircleLine size={22} />
                <span className="ml-1">상세설명 보기</span>
              </div>
            </div>
          </div>
        </HighlightBgColor>
      </div>
    </Link>
  );
}
