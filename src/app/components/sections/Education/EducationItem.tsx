"use client";

import Image from "next/image";
import HighlightBgColor from "../../HighlightBgColor";

interface IEducation {
  _id: string;
  category: string;
  title: string;
  period: string;
  content: string;
  grade?: string;
}
interface Props {
  eduList: IEducation[];
}
export default function EducationItem({ eduList }: Props) {
  const eduItemColorArray = [
    "before:bg-[#86E0C8]",
    "before:bg-[#83ADEC]",
    "before:bg-[#F3CE7A]",
  ];
  return (
    <section>
      {eduList.map((edu, idx) => (
        <HighlightBgColor
          key={edu._id}
          willBg={eduItemColorArray[idx]}
          bg={"bg-[#f7f7f7]"}
        >
          <div className="relative w-full">
            <div className="flex mb-6 h-[180px]">
              <div className="flex-col p-4 w-1/3 justify-start items-center">
                <h2 className="font-bold text-xl">{edu.category}</h2>
                <div className="relative w-[65px] h-[65px] m-auto top-[10%]">
                  <Image
                    src={`${
                      edu.category === "대학교"
                        ? "/icons/edu-uni.png"
                        : "/icons/edu-aca.png"
                    }`}
                    alt={edu.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex-col w-2/3 my-auto">
                <p className="font-bold text-2xl">{edu.title}</p>
                <p className="text-lg">{edu.period}</p>
                <p className="text-lg">{edu.content}</p>
              </div>
            </div>
          </div>
        </HighlightBgColor>
      ))}
    </section>
  );
}
