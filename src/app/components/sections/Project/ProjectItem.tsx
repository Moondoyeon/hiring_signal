'use client';

import { IProject } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  project: IProject;
  mobileWidth: string;
  desktopWidth: string;
  tabletWidth: string;
}
export default function ProjectItem({ project, tabletWidth, mobileWidth, desktopWidth }: Props) {
  return (
    <Link
      key={String(project._id)}
      href={project.link}
      target="_blank"
      className={`h-[400px] mr-6 ${desktopWidth} ${tabletWidth}  ${mobileWidth}  mobile:h-[240px] mobile:mr-2 tablet:mr-0 relative overflow-hidden`}>
      <Image
        src={project.thumbnail}
        style={{ objectFit: 'cover' }}
        fill
        alt={project.projectName}
        className="brightness-75 transition duration-200 linear hover:scale-125"
      />

      <div className="text-white ml-6">
        <span className="absolute bottom-[18%] font-bold text-3xl mobile:text-2xl">
          {project.projectName}
        </span>
        <span className="absolute bottom-[10%] font-light text-2xl mobile:text-lg">
          {project.type}
        </span>
      </div>
    </Link>
  );
}
