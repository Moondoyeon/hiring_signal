// import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import ProjectItem from "./ProjectItem";
import SectionContainer from "../SectionContainer";

export default async function ProjectSection() {
  // let db = connectDB.db(process.env.DB_NAME);
  // let projects = await db.collection("projects").find().toArray();
  // if (console) console.log(projects);
  const projects = [
    {
      _id: String(new ObjectId("657accb1ad5c1291816f0535")),
      projectName: "채용시그널",
      type: "개인프로젝트",
      link: "https://github.com/Moondoyeon/hiring_signal",
      thumbnail: "/images/project-hiring-signal.png",
    },
    {
      _id: String(new ObjectId("657acbccad5c1291816f0532")),
      projectName: "랜덤영화뽑기",
      type: "개인프로젝트",
      thumbnail: "/images/project-random-movie-game.png",
      link: "https://github.com/Moondoyeon/random-movie-game",
    },
    {
      _id: String(new ObjectId("657acc4cad5c1291816f0533")),
      projectName: "빌리지뭐",
      type: "협업프로젝트",
      thumbnail: "/images/project-villagemo.png",
      link: "https://moondoyeon.notion.site/c4140e34ba6b4dba806918ceb2748924?pvs=4",
    },
  ];
  return (
    <SectionContainer observeSection="project-section" style="pt-56 z-0">
      <h2 className="pb-12 text-4xl font-bold">PROJECT</h2>
      <ProjectItem projects={projects} />
    </SectionContainer>
  );
}
