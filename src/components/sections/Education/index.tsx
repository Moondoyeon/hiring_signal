// import { connectDB } from '@/utils/database';

import SectionContainer from '../../Container/SectionContainer';
import { IEducation } from '@/types';
import EducationItem from './EducationItem';

export default async function EducationSection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const educations = await db.collection<IEducation>('educations').find().toArray();
  // educations.map((item) => (item._id = item._id.toString()));
  // console.log(educations);
  const fake: IEducation[] = [
    {
      _id: '657d4b178ff016634a0ff80a',
      category: '대학교',
      title: 'XX대학교',
      period: '2014.02 - 2021.02',
      content: '국제무역학과, (부)경제학과 졸업',
    },
    {
      _id: '657d4c0c8ff016634a0ff80b',
      category: '교육',
      title: '[원티드] Pre-OnBoarding Front-End Course',
      period: '2022.10 - 2022.11',
      content: '',
    },
    {
      _id: '657d4c7c8ff016634a0ff80d',
      category: '교육',
      title: '[코드스테이츠 부트캠프] Software Engineer Front-End Course',
      period: '2022.04 - 2022.10',
      content: '',
    },
  ];

  return (
    <SectionContainer observeSection="education-section" style="pt-40 mobile:pt-20">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-2xl mobile:pb-8">EDUCATION</h2>

      <EducationItem eduList={fake} />
    </SectionContainer>
  );
}
