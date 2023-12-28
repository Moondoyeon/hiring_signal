import { IWork } from '@/app/types';
import SectionContainer from '../../Container/SectionContainer';
import Content from './Content';
import { connectDB } from '@/app/utils/database';

export default async function WorkSection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const works = await db.collection<IWork>('works').find().toArray();
  // works.map((item) => (item._id = item._id.toString()));
  // console.log(works);
  const fake: IWork[] = [
    {
      _id: '65770e13af09f0d42519220e',
      companyName: '아트와',
      content: '환경데이터를 수집하는 로봇의 고객사용 데모웹을 개발하였습니다.',
      notionLink: 'https://moondoyeon.notion.site/Demo-Web-b2851245b5a0441e87cbe4964afef706?pvs=4',
      position: '웹 프론트엔드 인턴',
      thumbnails: '/images/work-artwa.png',
    },
    {
      _id: '65770d98af09f0d42519220c',
      companyName: '한국농어촌공사',
      content:
        '보상금 지급대장 엑셀데이터와 전자문서기록을 비교대조해 총액오차를 맞추는 등 사무보조 업무를 수행하였습니다.',
      notionLink: '',
      position: '사무직 인턴',
      thumbnails: '/images/work-krc.png',
    },
  ];

  return (
    <SectionContainer observeSection="work-section" style="pt-40 mobile:pt-28">
      <h2 className="pb-12 text-4xl font-bold mobile:text-2xl mobile:pb-8">WORK</h2>
      <Content works={fake} />
    </SectionContainer>
  );
}
