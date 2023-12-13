import Video from "./components/Video";
import { connectDB } from "./util/database";
export default async function Home() {
  // let db = connectDB.db(process.env.DB_NAME);
  // let works = await db.collection("works").find().toArray();
  // if (console) console.log(works);
  return (
    <main>
      <div className="h-screen">
        <Video />
      </div>
      <ul className="text-3xl font-bold">
        <li id="/main/#work" className="h-[550px]">
          WORK
        </li>
        <li id="/main/#project" className="h-[550px]">
          PROJECT
        </li>
        <li id="/main/#study" className="h-[550px]">
          STUDY
        </li>
        <li id="/main/#signal" className="h-[550px]">
          SIGNAL
        </li>
      </ul>
    </main>
  );
}
