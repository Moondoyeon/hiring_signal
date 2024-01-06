import { IWork } from '@/app/types';
import SectionContainer from '../../Container/SectionContainer';
import Content from './Content';
// import { connectDB } from '@/utils/database';

export default async function WorkSection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const works = await db.collection<IWork>('works').find().toArray();
  // works.map((item) => (item._id = item._id.toString()));

  const workList: IWork[] = [
    {
      _id: '65770e13af09f0d42519220e',
      companyName: '아트와',
      period: '2022년 12월 15일 - 2023년 2월 28일 (약 3개월)',
      content: [
        '환경데이터를 수집하는 로봇제조 스타트업의 고객사용 웹(데모) 프론트엔드 개발 참여',
        '데모웹 통계페이지 - Nivo, react-day-picker를 이용해 실시간/기간 그래프 구현',
        '데모웹 통계페이지 - Zustand를 이용해 그래프/표 검색조건을 전역상태로 관리해 props drilling 방지',
        '워드프레스로 회사소개 웹 제작 - 담당: 페이지(company, product, news), 메인레이아웃, 한영번역',
      ],
      notionLink: 'https://moondoyeon.notion.site/Demo-Web-b2851245b5a0441e87cbe4964afef706?pvs=4',
      companyLink: 'https://www.artwa.kr/',
      position: '인턴',
      thumbnails: '/images/work-artwa.png',
    },
    {
      _id: '65770d98af09f0d42519220c',
      companyName: '한국농어촌공사',
      period: '2021년 5월 11일 - 2021년 8월 11일 (3개월)',
      content: [
        '보상금 지급대장 엑셀데이터입력, 오차금액 정정',
        '보상계약문서 편철',
        '우편료 정산',
      ],
      notionLink: '',
      position: '인턴(비개발)',
      companyLink: 'https://www.ekr.or.kr/',
      thumbnails: '/images/work-krc.png',
    },
  ];

  return (
    <SectionContainer observeSection="work-section" style="pt-40 mobile:pt-16 mobile:mb-4">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-3xl mobile:pb-8">WORK</h2>
      <Content works={workList} />
    </SectionContainer>
  );
}
