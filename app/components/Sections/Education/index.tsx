import SectionContainer from '@components/Container/SectionContainer';
import { IEducation } from 'types/section';
import EducationItem from './EducationItem';
// import { connectDB } from '@/utils/database';

export default async function EducationSection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const educations = await db.collection<IEducation>('educations').find().toArray();
  // educations.map((item) => (item._id = item._id.toString()));

  const educationList: IEducation[] = [
    {
      _id: '657d4b178ff016634a0ff80a',
      category: '대학교',
      title: '건국대학교',
      period: '2014.02 - 2021.02',
      content: ['국제무역학과, (부)경제학과 졸업'],
    },
    {
      _id: '657d4c0c8ff016634a0ff80b',
      category: '교육',
      title: '[원티드] Pre-OnBoarding Front-End Course',
      period: '2022.10 - 2022.11',
      content: [
        '협업역량 학습 (eslint, prettier, husky)',
        'CI / CD(Github Actions), AWS 개념 학습',
        'React 렌더링 성능 최적화, 메모이제이션 학습',
        'SSR, SSG, CSR, SPA, MPA 학습',
      ],
    },
    {
      _id: '657d4c7c8ff016634a0ff80d',
      category: '교육',
      title: '[코드스테이츠] Software Engineer Front-End Course',
      period: '2022.04 - 2022.10',
      content: [
        'HTML, CSS, Javascript, React 기초 학습',
        '네트워크, 자료구조, CS 학습',
        '알고리즘 학습 및 문제 풀이 진행',
        '페어 프로그래밍, 협업 프로젝트 2회 진행',
      ],
    },
  ];

  return (
    <SectionContainer observeSection="education-section" style="pt-40 mobile:pt-16 mobile:mb-4">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-3xl mobile:pb-8">EDUCATION</h2>
      <EducationItem eduList={educationList} />
    </SectionContainer>
  );
}
