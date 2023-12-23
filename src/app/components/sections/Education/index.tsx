import { connectDB } from '@/app/util/database';
import EducationItem from './EducationItem';
import SectionContainer from '../SectionContainer';
import { IEducation } from '@/app/types';

export default async function EducationSection() {
  const db = connectDB.db(process.env.DB_NAME);
  const educations = await db.collection<IEducation>('educations').find().toArray();
  educations.map((item) => (item._id = item._id.toString()));
  return (
    <SectionContainer observeSection="education-section" style="pt-48 mobile:pt-28">
      <h2 className="pb-12 text-4xl font-bold mobile:text-2xl mobile:pb-8">EDUCATION</h2>
      <EducationItem eduList={educations} />
    </SectionContainer>
  );
}
