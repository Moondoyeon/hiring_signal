import { IWork } from 'types/section';
import SectionContainer from '@components/Container/SectionContainer';
import Content from './Content';
// import { connectDB } from '@/utils/database';

export default async function WorkSection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const works = await db.collection<IWork>('works').find().toArray();
  // works.map((item) => (item._id = item._id.toString()));

  const workList: IWork[] = [
    {
      _id: '65770e13af09f0d42519220e2',
      companyName: '(주)파이어스코프',
      period: '2024년 3월 4일 - 2024년 9월 30일',
      content: [
        'PG(Payple) 연동을 통한 해외결제 기능 구현(NestJs, MySQL, Angular)',
        'SendGrid 서비스 이용해 재결제 실패한 유저에게 이메일 전송 기능 구현',
        'ngx-translate 이용해 브라우저 설정 언어에 따라 번역(영어, 한국어) 제공',
        'nest/schedule과 Slack API 이용해 유저 활동 데이터(구독자 수, 글 작성 수) 슬램 알림 자동화',
        'Firebase Auth 이용해 신규 서비스 인증 기능 구현(회원가입, 로그인)',
        '재사용 가능한 UI 컴포넌트 구현(Table, Toast, Alarm Modal, Banner, Input, Button, Link)',
      ],
      notionLink: '',
      companyLink: 'https://www.firescope.io/',
      position: '개발팀 팀원',
      thumbnails: '/images/work-firescope.png',
    },
    {
      _id: '65770e13af09f0d42519220e',
      companyName: '(주)아트와',
      period: '2022년 12월 15일 - 2023년 2월 28일 (약 3개월)',
      content: [
        '환경데이터를 수집하는 로봇제조 스타트업의 고객사용 웹(데모) 프론트엔드 개발 참여',
        '[데모웹] 통계페이지: Nivo, react-day-picker로 실시간/기간 그래프 구현',
        '[데모웹] 통계페이지: Zustand로 그래프/표 검색조건을 전역상태로 관리해 props drilling 방지',
        '[데모웹] UI 프로토타입 제작(Figma)',
        '워드프레스로 회사소개 웹 제작 - 담당: 페이지(company,product,news), 메인레이아웃, 한영번역',
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
