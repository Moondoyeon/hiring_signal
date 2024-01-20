// import { connectDB } from '@/utils/database';
import SectionContainer from '@components/Container/SectionContainer';
import { IProject } from 'types/section';
import Content from './Content';

export default async function ProjectSection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const projects = await db.collection<IProject>('projects').find().toArray();
  // projects.map((item) => (item._id = item._id.toString()));

  const projectList: IProject[] = [
    {
      _id: '657accb1ad5c1291816f0535',
      projectName: '채용시그널',
      type: '개인프로젝트',
      link: 'https://moondoyeon.notion.site/b8b21d6b05134f9baf58990a956714cb?pvs=4',
      thumbnail: '/images/project-hiring-signal.png',
      description:
        '저를 소개하는 포트폴리오 웹입니다. 예능프로그램 하트시그널에서 아이디어를 얻어 채용담당자분의 시그널을 받겠다는 마음을 담아 개발했습니다.',
    },
    {
      _id: '657acbccad5c1291816f0532',
      projectName: '랜덤영화뽑기',
      type: '개인프로젝트',
      thumbnail: '/images/project-random-movie-game.png',
      link: 'https://moondoyeon.notion.site/43a82a4408f541e784c92a614a40cfb8?pvs=4',
      description:
        '슬롯버튼 3개(국가, 개봉년도, 영화종류)를 누르면 영화를 추천해주는 서비스입니다.',
    },
    {
      _id: '657acc4cad5c1291816f0533',
      projectName: '빌리지뭐',
      type: '협업프로젝트',
      thumbnail: '/images/project-villagemo.png',
      link: 'https://moondoyeon.notion.site/c4140e34ba6b4dba806918ceb2748924?pvs=4',
      description:
        '빌리지뭐는 개인 간 물품을 렌탈할 수 있는 공간입니다. 유저는 물건을 싸게 빌려쓸 수 있고, 잉여물을 빌려주는 유저는 이익을 취할 수 있습니다.',
    },
  ];

  return (
    <SectionContainer
      observeSection="project-section"
      threshold={0.3}
      style="pt-40 mobile:pt-16 mobile:mb-4">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-3xl mobile:pb-8">PROJECT</h2>
      <Content projects={projectList} />
    </SectionContainer>
  );
}
