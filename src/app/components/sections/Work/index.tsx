import { IWork } from '@/app/types';
import SectionContainer from '../SectionContainer';
import Content from './Content';
import { connectDB } from '@/app/util/database';

export default async function WorkSection() {
  const db = connectDB.db(process.env.DB_NAME);
  const works = await db.collection<IWork>('works').find().toArray();
  works.map((item) => (item._id = item._id.toString()));

  return (
    <SectionContainer observeSection="work-section" style="pt-40 mobile:pt-28">
      <h2 className="pb-12 text-4xl font-bold mobile:text-2xl mobile:pb-8">WORK</h2>
      <Content works={works} />
    </SectionContainer>
  );
}
