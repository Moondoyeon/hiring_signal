import WorkItem from "./WorkItem";
import { ObjectId } from "mongodb";
import { IWork } from "@/app/types";

export default async function Work() {
  // let db = connectDB.db(process.env.DB_NAME);
  // let worksfromDB = await db.collection("works").find().toArray();
  // if (console) console.log(worksfromDB);
  const works: IWork[] = [
    {
      _id: String(new ObjectId("65770e13af09f0d42519220e")),
      companyName: "아트와",
      content: "데이터수집 로봇의 고객사용 데모웹을 개발하였습니다.",
      notionLink:
        "https://moondoyeon.notion.site/Demo-Web-b2851245b5a0441e87cbe4964afef706?pvs=4",
      position: "웹 프론트엔드 인턴",
    },
    {
      _id: String(new ObjectId("65770d98af09f0d42519220c")),
      companyName: "한국농어촌공사",
      content:
        "보상지급대장 엑셀데이터와 전자문서기록을 비교대조해 총액오차를 맞추는 등 사무업무를 보조하였습니다.",
      notionLink: "",
      position: "사무직 인턴",
    },
  ];

  return (
    <section className="pt-24 pb-18">
      <h2 className="pb-12 text-4xl font-bold">WORK</h2>
      <WorkItem works={works} />
    </section>
  );
}
