import Project from "./components/Project";
import Signal from "./components/Signal";
import Study from "./components/Study";
import Typing from "./components/Typing";
import Video from "./components/Video";
import Work from "./components/Work";
import SrollMove from "./components/SrollMove";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="h-screen relative">
        <Video />
        <Typing />
        <SrollMove to="/main/#work">
          <span className="absolute z-98 top-[85%] left-1/2 text-white cursor-pointer">
            <Image
              className="animate-bounce"
              src={"/images/down-arrow.png"}
              alt={"down arrow"}
              width={30}
              height={21}
            />
            <span>Click</span>
          </span>
        </SrollMove>
      </section>

      <section className=" flex justify-center items-center">
        <ul className="max-w-[1280px]">
          <li id="/main/#work">
            <Work />
          </li>
          <li id="/main/#project">
            <Project />
          </li>
          <li id="/main/#study" className="h-[950px]">
            <Study />
          </li>
          <li id="/main/#signal" className="h-[950px]">
            <Signal />
          </li>
        </ul>
      </section>
    </main>
  );
}
