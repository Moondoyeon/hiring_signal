'use client';

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
      className={`cursor-pointer h-[500px] relative overflow-hidden mr-6 ${desktopWidth} ${tabletWidth} ${mobileWidth} mobile:h-[480px] mobile:mr-2 tablet:mr-0 `}>
      <Image
        src={project.thumbnail}
        style={{ objectFit: 'cover' }}
        fill
        alt={project.projectName}
        sizes="(max-width:599px) 320px, (max-width:1199px),800px, 580px"
        className="brightness-75 transition duration-300 linear hover:scale-110"
        priority={project.projectName !== '빌리지뭐'}
      />

      <div className="text-white ml-6">
        <span className="absolute bottom-[18%] font-medium text-3xl mobile:text-2xl">
          {project.projectName}
        </span>
        <span className="absolute bottom-[10%] font-light text-2xl mobile:text-lg">
          {project.type}
        </span>
      </div>
    </Link>
  );
}
