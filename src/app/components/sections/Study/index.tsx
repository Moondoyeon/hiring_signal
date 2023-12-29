import { connectDB } from '@/app/utils/database';
import SectionContainer from '../../Container/SectionContainer';
import Content from './Content';
import { IStudy } from '@/app/types';

export default async function StudySection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const studyings = await db.collection<IStudy>('studyings').find().toArray();
  // studyings.map((item) => (item._id = item._id.toString()));
  // console.log(studyings);
  const fake: IStudy[] = [
    {
      _id: '657c1468a296c1a65106328e',
      category: 'book',
      title: '모던 자바스크립트 Deep Dive',
      content:
        '자바스크립트의 바이블 같은 책입니다. JS의 기본개념과 동작원리를 알 수 있고 브라우저 렌더링, Ajax와 같이 웹 개발에서 자바스크립트의 쓰임도 설명합니다. 학습한 스로틀 개념을 현재 보고계신 웹에 적용해 스크롤 이벤트핸들러의 호출주기를 제어하여 성능을 개선한 경험이 있습니다. 아직 3회독 밖에 못했지만 꾸준히 회독수를 늘려나갈 예정입니다.',
      image_url: '/images/book-modern-js.png',
    },
    {
      _id: '657c14e1a296c1a651063290',
      category: 'book',
      title: '그림으로 배우는 HTTP & Networks Basic',
      content:
        'HTTP와 네트워크에 대한 기초지식을 알려주는 책입니다. 멀리 떨어진 컴퓨터 두 대가 TCP/IP 프로토콜의 약속을 따라 데이터를 주고받으며 네트워크를 형성한다는 것, 응용계층 프로토콜인 HTTP의 구조와 특성을 알게 되었습니다. 학습한 지식은 SSR,CSR Next.js의 Pre-Rendering, Hydraiton 개념을 이해함에 도움이 되었습니다.',
      image_url: '/images/book-http-networks.jpeg',
    },
    {
      _id: '657c150ca296c1a651063291',
      category: 'book',
      title: 'Clean Code',
      content:
        '좋은 코드를 작성하는 방법을 알려주는 책입니다. 현재 읽고 있는 중입니다. 누구든 읽기 쉬운 코드를 작성하는 것의 중요성을 실감하고 있고, 그런 코드를 실제로 작성하기 위해 꾸준히 노력하겠습니다.',
      image_url: '/images/book-clean-code.webp',
    },
    {
      _id: '657c1545a296c1a651063292',
      category: 'course',
      title: '코어 자바스크립트',
      content:
        '자바스크립트의 필수개념을 다룬 강의입니다. 원시형과 참조형 타입, 실행 컨텍스트, this, 클로저, 프로토타입, 클래스 등의 개념을 학습했습니다. 기존에 글로 받아들였던 개념들을 시각자료와 함께 학습하게 되면서, JS 코드의 동작을 그림그리듯 상상하며 이해해보는 경향이 생겼습니다.',
      image_url: '/images/course-core-js.png',
    },
    {
      _id: '657c15aba296c1a651063293',
      category: 'course',
      title: '한입 크기로 잘라먹는 타입스크립트',
      content:
        '타입스크립트를 단순한 타입정의 그 이상으로 잘 활용해보자 수강한 강의입니다. 타입스크립트의 기본문법과 동작원리, 인터페이스, 제네릭, 유틸리티 타입 등을 학습했습니다. 학습한 제네릭 개념을 이용해 타입을 동적으로 받아들이는 공통 Input 컴포넌트를 만들었습니다.',

      image_url: '/images/course-onebite-ts.png',
    },
    {
      _id: '657c15dda296c1a651063294',
      category: 'course',
      title: 'Next.js로 커머스 서비스 구축하기',
      content:
        'Next.js로 앱을 만드는 방법이 궁금해서 수강한 강의입니다. 해당 프레임워크의 기본구조와 Pre-Rendering, SSR, SSG, ISR 의 개념 등에 대해 학습했습니다. 특히 서비스의 모든 API 응답 로직을 작성하며 백엔드단 흐름을 이해했던 것이 재밌었습니다.',
      image_url: '/images/course-fast-nextjs.png',
    },
    {
      _id: '657c1707a296c1a651063295',
      category: 'course',
      title: '자바스크립트 알고리즘 입문',
      content:
        '기본적인 배열 메서드 활용 문제부터 완전탐색, 스택, 큐, 해시, 이분탐색, 정렬, DFS, BFS, DP 등 자료구조와 알고리즘 문제풀이를 진행했습니다. 문제를 해결하기 위한 논리적인 사고력을 키울 수 있었습니다. 특히 커스텀 훅을 만드는 것이 기존 대비 수월해졌습니다.',
      image_url: '/images/course-js-algorithm.png',
    },
  ];
  const books = fake.filter((study) => study.category === 'book');
  const courses = fake.filter((study) => study.category === 'course');

  return (
    <SectionContainer observeSection="study-section" style="pt-48 mobile:pt-20">
      <h2 className="pb-12 text-4xl font-gown font-semibold mobile:text-2xl mobile:pb-8">STUDY</h2>
      <div className="flex justify-between mobile:flex-col tablet:flex-col">
        <Content contentName={'도서'} list={books} theme="bg-yellow-300" />
        <Content contentName={'강의'} list={courses} theme="bg-blue-300" />
      </div>
    </SectionContainer>
  );
}
