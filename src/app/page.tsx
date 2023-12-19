import Project from "./components/Project";
import Signal from "./components/Signal";
import Study from "./components/Study";
import Typing from "./components/Typing";
import Video from "./components/Video";
import Work from "./components/Work";

import Image from "next/image";
import Education from "./components/Education";
import HelpButtons from "./components/main/HelpButtons";
import MoveScrollY from "./components/MoveScrollY";

export default async function Home() {
  return (
    <main>
      <section className="relative">
        <HelpButtons />
      </section>
      <section id="movie-section" className="h-screen relative">
        <Video />
        <Typing />
        <MoveScrollY to="work-section">
          <span className="absolute z-98 top-[85%] left-1/2 text-white cursor-pointer">
            <Image
              className="animate-bounce mb-2"
              src={"/icons/down-arrow.png"}
              alt={"down arrow"}
              width={30}
              height={21}
            />
            <span>click</span>
          </span>
        </MoveScrollY>
      </section>

      <section className="flex justify-center items-center">
        <ul className="max-w-[1280px]">
          <li id="work-section">
            <Work />
          </li>
          <li id="project-section">
            <Project />
          </li>
          <li id="education-section">
            <Education />
          </li>
          <li id="study-section">
            <Study />
          </li>
          <li id="signal-section">
            <Signal />
          </li>
        </ul>
      </section>
    </main>
  );
}
