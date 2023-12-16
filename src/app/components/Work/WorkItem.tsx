"use client";

import useCarousel from "@/app/hooks/useCarousel";
import { IWork } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import Buttons from "./Buttons";

interface Props {
  works: IWork[];
}
export default function WorkItem({ works }: Props) {
  const { curIdx, pxTransitions, next, prev } = useCarousel(works.length, 1280);
  const moveStyle = {
    transform: `translate(${pxTransitions[curIdx]})`,
  };

  return (
    <div className="relative">
      <Buttons next={next} prev={prev} curIdx={curIdx} n={works.length} />

      <div id="carousel-container" className="max-w-[1280px] overflow-hidden">
        <div
          id="carousel"
          className="flex transition duration-300 ease-in-out"
          style={moveStyle}
        >
          {works.map((work) => (
            <div
              key={work._id}
              className="h-[330px] flex justify-evenly py-6 px-4 min-w-[1280px] border border-solid border-black"
            >
              <Image
                className="basis-2/5 mx-6"
                src="/images/work-artwa.jpeg"
                width={300}
                height={300}
                alt="work at artwa"
              />

              <div className="h-full basis-3/5 mx-6">
                <div className="flex justify-between h-1/2">
                  <span className="text-2xl font-bold">{work.companyName}</span>
                  <span className="text-lg">{work.position}</span>
                </div>
                <div className="w-full bg-black h-0.5 mb-4" />
                <p className="mb-16">{work.content}</p>
                {work.notionLink && (
                  <Link
                    href={work.notionLink}
                    target="_blank"
                    className="underline"
                  >
                    상세설명링크
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
