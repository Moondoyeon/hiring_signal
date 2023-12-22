// import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';

import SectionContainer from '../SectionContainer';
import Content from './Content';

export default async function StudySection() {
  // https://fastcampus.co.kr/dev_online_nextjs
  // let db = connectDB.db(process.env.DB_NAME);
  // let studyings = await db.collection("studyings").find().toArray();
  // if (console) console.log(studyings);
  const studyings = [
    {
      _id: String(new ObjectId('657c1468a296c1a65106328e')),
      category: 'book',
      title: '모던 자바스크립트 Deep Dive',
      content: '설명~했습니다.',
      image_url: '/images/book-modern-js',
    },
    {
      _id: String(new ObjectId('657c14e1a296c1a651063290')),
      category: 'book',
      title: '그림으로 배우는 Http & Networks basis',
      content: '설명~했습니다.',
      image_url: '/images/book-http-networks',
    },
    {
      _id: String(new ObjectId('657c150ca296c1a651063291')),
      category: 'book',
      title: 'Clean Code',
      content: '설명~했습니다.',
      image_url: '/images/book-clean-code',
    },
    {
      _id: String(new ObjectId('657c1545a296c1a651063292')),
      category: 'course',
      title: '코어 자바스크립트',
      content: '설명~했습니다.',
      image_url: '/images/course-core-js',
    },
    {
      _id: String(new ObjectId('657c15aba296c1a651063293')),
      category: 'course',
      title: '한 입 크기로 잘라먹는 타입스크립트',
      content: '설명~했습니다.',
      image_url: '/images/course-onebite-ts',
    },
    {
      _id: String(new ObjectId('657c15dda296c1a651063294')),
      category: 'course',
      title: 'Next.js 로 커머스 서비스 구축하기',
      content: '설명~했습니다.',
      image_url: '/images/course-fast-nextjs',
    },
    {
      _id: String(new ObjectId('657c1707a296c1a651063295')),
      category: 'course',
      title: '자바스크립트 알고리즘 입문',
      content: '설명~했습니다.',
      image_url: '/images/course-js-algorithm',
    },
  ];
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
