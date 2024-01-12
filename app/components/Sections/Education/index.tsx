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
      period: '2014년 2월 - 2021년 2월',
      content: ['국제무역학과, (부)경제학과 졸업'],
    },
    {
      _id: '657d4c0c8ff016634a0ff80b',
      category: '교육',
      title: '[원티드] Pre-OnBoarding Course (Front-End) ',
      period: '2022년 10월 24일 - 2022년 11월 18일(1개월)',
      content: [
        'React 렌더링 최적화 학습',
        'SPA, MPA, CSR, SSR 학습 및 Next.js 과제 진행',
        'CI/CD(Github Actions) 학습, AWS S3 배포 실습',
        'React 기반 과제 5회 진행',
      ],
      retrospectLink:
        'https://velog.io/@mmmdo21/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%BD%94%EC%8A%A4-7%EC%B0%A8-%ED%9A%8C%EA%B3%A0',
      learningLink:
        'https://moondoyeon.notion.site/Pre-Onboarding-Front-End-Course-da103ad730564943a153e6f80c31c6dc?pvs=4',
    },
    {
      _id: '657d4c7c8ff016634a0ff80d',
      category: '교육',
      title: '[코드스테이츠] Software Engineering Bootcamp (Front-End) ',
      period: '2022년 4월 25일 - 2022년 10월 19일(6개월)',
      content: [
        'HTML, CSS, Javascript, React, Redux 학습',
        '자료구조·알고리즘 학습 및 문제풀이 진행',
        '네트워크, CS 기초 학습',
        '페어 프로그래밍 풀참석, 협업 프로젝트 2회 진행',
      ],
      retrospectLink: 'https://codestates.notion.site/Pre-Project-e9aedffe4dd14087856d2c1cc18d5f90',
      learningLink:
        'https://velog.io/@mmmdo21/series/%EC%BD%94%EB%93%9C%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%B8%A0-%EC%86%8C%ED%94%84%ED%8A%B8%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81-%EB%B6%80%ED%8A%B8%EC%BA%A0%ED%94%84-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B3%BC%EC%A0%95',
    },
  ];

  return (
    <SectionContainer observeSection="education-section" style="pt-40 mobile:pt-16 mobile:mb-4">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-3xl mobile:pb-8">EDUCATION</h2>
      <EducationItem eduList={educationList} />
    </SectionContainer>
  );
}
