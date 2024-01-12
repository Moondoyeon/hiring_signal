// import { connectDB } from '@/utils/database';
import { IStudy } from 'types/section';
import SectionContainer from '@components/Container/SectionContainer';
import Content from './Content';

export default async function StudySection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const studyings = await db.collection<IStudy>('studyings').find().toArray();
  // studyings.map((item) => (item._id = item._id.toString()));

  const studyList: IStudy[] = [
    {
      _id: '657c1468a296c1a65106328e',
      category: 'book',
      title: '모던 자바스크립트 Deep Dive',
      content:
        '자바스크립트의 바이블 같은 책입니다. JS의 기본개념과 동작원리 뿐만 아니라 브라우저 렌더링, Ajax와 같은 웹 개발에서 자바스크립트의 쓰임새를 설명합니다. 학습한 스로틀 개념을 현재 보고 계신 웹에 적용해 스크롤 이벤트 핸들러의 호출주기를 제어하여 성능을 개선한 경험이 있습니다.',
      image_url: '/images/book-modern-js.png',
    },
    {
      _id: '657c14e1a296c1a651063290',
      category: 'book',
      title: 'HTTP & Networks Basic',
      content:
        'HTTP와 네트워크에 대한 기초지식을 알려주는 책입니다. 멀리 떨어진 컴퓨터 두 대가 TCP/IP 프로토콜의 약속을 따라 데이터를 주고받으며 네트워크를 형성한다는 것, 응용계층 프로토콜인 HTTP의 구조와 특성을 알게 되었습니다. 학습한 지식은 CSR, SSR과 같은 렌더링 방식과 페이지 로드 과정을 이해하는 데 도움이 되었습니다.',
      image_url: '/images/book-http-networks.jpeg',
    },
    {
      _id: '657c150ca296c1a651063296',
      category: 'book',
      title: '모던 리액트 Deep Dive',
      content:
        '(읽는중) 리액트 동작원리를 깊이 이해하고자 시작한 책입니다. 제가 사용하는 기술이 내부적으로 어떻게 동작하는지 알아야지만이 안정감있고 더 효율적인 코드를 쓸 수 있다고 생각합니다. 더 좋은 코드를 작성하기 위해 멈추지 않고 꾸준히 공부하는 개발자가 되겠습니다.',
      image_url: '/images/book-modern-react.jpeg',
    },
    // {
    //   _id: '657c150ca296c1a651063291',
    //   category: 'book',
    //   title: 'Clean Code',
    //   content:
    //     '(읽는중) 좋은 코드를 작성하는 방법을 알려주는 책입니다. 누구든 읽기 쉬운 코드를 작성하는 것의 중요성을 느끼게 되었고, 그런 코드를 실제로 작성하기 위해 노력하겠습니다.',
    //   image_url: '/images/book-clean-code.webp',
    // },
    {
      _id: '657c1545a296c1a651063292',
      category: 'course',
      title: '코어 자바스크립트',
      from: '인프런',
      content:
        '자바스크립트의 필수개념을 다룬 강의입니다. 원시형·참조형 타입, 실행 컨텍스트, this, 클로저, 프로토타입, 클래스 등을 학습했습니다. 기존에 텍스트로만 이해한 개념을 시각자료와 함께 학습하면서, 자바스크립트의 동작을 그림그리듯 상상하며 이해해보는 경향이 생겼습니다.',
      image_url: '/images/course-core-js.png',
    },
    {
      _id: '657c15aba296c1a651063293',
      category: 'course',
      title: '한입 크기로 잘라먹는 타입스크립트',
      from: '인프런',
      content:
        '타입스크립트를 단순한 타입정의 이상으로 잘 활용해보고자 수강한 강의입니다. TS의 탄생배경과 동작원리, 기본타입, 인터페이스, 제네릭, 유틸리티 타입 등을 학습했습니다. 학습한 제네릭 개념을 이용해 타입을 동적으로 받아들이는 공통 Input 컴포넌트를 만들어 현재 보고계신 웹에 적용했습니다.',

      image_url: '/images/course-onebite-ts.png',
    },
    {
      _id: '657c15dda296c1a651063294',
      category: 'course',
      title: 'Next.js로 커머스 서비스 구축하기',
      from: '패스트캠퍼스',
      content:
        'Next.js로 복잡한 앱 서비스를 만들어 보고 싶어서 수강한 강의입니다. Next.js의 기본구조와 렌더링방식, getServerSideProps·getStaticProps와 같은 데이터페칭 함수의 사용법을 익혔습니다. 특히 Next.js가 제공하는 api 작성 기능을 통해, 한 서비스의 백엔드단 로직을 작성해본 것이 재밌었습니다.',
      image_url: '/images/course-fast-nextjs.png',
    },
    {
      _id: '657c1707a296c1a651063295',
      category: 'course',
      title: '자바스크립트 알고리즘 입문',
      from: '인프런',
      content:
        '기본적인 배열·객체 메서드 활용부터 완전탐색, 스택, 큐, 해시, 이분탐색, 정렬, DFS, BFS, DP 등 자료구조와 알고리즘 문제풀이를 진행했습니다. 복잡한 문제 해결을 위한 논리력을 키울 수 있었고 특히 커스텀 훅을 만드는 것이 기존 대비 수월해졌습니다.',
      image_url: '/images/course-js-algorithm.png',
    },
  ];
  const books = studyList.filter((study) => study.category === 'book');
  const courses = studyList.filter((study) => study.category === 'course');

  return (
    <SectionContainer observeSection="study-section" style="pt-40 mobile:pt-16 mobile:mb-4">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-3xl mobile:pb-8">STUDY</h2>

      <div className="flex justify-between mobile:flex-col tablet:flex-col">
        <Content contentName={'도서'} list={books} theme="bg-yellow-300" />
        <Content contentName={'강의'} list={courses} theme="bg-blue-300" />
      </div>
    </SectionContainer>
  );
}
