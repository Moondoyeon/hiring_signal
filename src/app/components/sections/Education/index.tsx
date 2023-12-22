// import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';
import EducationItem from './EducationItem';
import SectionContainer from '../SectionContainer';

export default async function EducationSection() {
  // let db = connectDB.db(process.env.DB_NAME);
  // let educations = await db.collection("educations").find().toArray();
  // if (console) console.log(educations);

  const educations = [
    {
      _id: String(new ObjectId('657d4b178ff016634a0ff80a')),
      category: '대학교',
      title: '건국대학교',
      period: '2014.02 - 2021.02',
      content: '국제무역학과, (부)경제학과 졸업 ',
      grade: '4.1/4.5',
    },
    {
      _id: String(new ObjectId('657d4c0c8ff016634a0ff80b')),
      category: '교육',
      title: '[원티드] pre-온보딩 프론트엔드 코스',
      period: '2022.10 - 2022.11',
      content: '',
    },
    {
      _id: String(new ObjectId('657d4c7c8ff016634a0ff80d')),
      category: '교육',
      title: '[코드스테이츠] 소프트웨어 엔지니어 FE 코스',
      period: '2022.04 - 2022.10',
      content: '',
    },
  ];

  return (
    <SectionContainer observeSection="education-section" style="pt-48 mobile:pt-28">
      <h2 className="pb-12 text-4xl font-bold mobile:text-2xl mobile:pb-8">EDUCATION</h2>
      <EducationItem eduList={educations} />
    </SectionContainer>
  );
}
