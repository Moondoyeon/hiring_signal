// https://fastcampus.co.kr/dev_online_nextjs
import { connectDB } from '@/app/util/database';
import SectionContainer from '../SectionContainer';
import Content from './Content';
import { IStudy } from '@/app/types';

export default async function StudySection() {
  const db = connectDB.db(process.env.DB_NAME);
  const studyings = await db.collection<IStudy>('studyings').find().toArray();
  studyings.map((item) => (item._id = item._id.toString()));

  const books = studyings.filter((study) => study.category === 'book');
  const courses = studyings.filter((study) => study.category === 'course');

  return (
    <SectionContainer observeSection="study-section" style="pt-48 mobile:pt-28">
      <h2 className="pb-12 text-4xl font-bold mobile:text-2xl mobile:pb-8">STUDY</h2>
      <div className="flex justify-between mobile:flex-col tablet:flex-col">
        <Content contentName={'도서'} list={books} theme="bg-yellow-500" />
        <Content contentName={'강의'} list={courses} theme="bg-blue-500" />
      </div>
    </SectionContainer>
  );
}
