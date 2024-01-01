// import { connectDB } from '@/utils/database';

import SectionContainer from '../../Container/SectionContainer';
import { IProject } from '@/types';
import Content from './Content';

export default async function ProjectSection() {
  // const db = connectDB.db(process.env.DB_NAME);
  // const projects = await db.collection<IProject>('projects').find().toArray();
  // projects.map((item) => (item._id = item._id.toString()));
  // console.log(projects);
  const fake: IProject[] = [
    {
      _id: '657accb1ad5c1291816f0535',
      projectName: '채용시그널',
      type: '개인프로젝트',
      link: 'https://github.com/Moondoyeon/hiring_signal',
      thumbnail: '/images/project-hiring-signal.png',
    },
    {
      _id: '657acbccad5c1291816f0532',
      projectName: '랜덤영화뽑기',
      type: '개인프로젝트',
      thumbnail: '/images/project-random-movie-game.png',
      link: 'https://github.com/Moondoyeon/random-movie-game',
    },
    {
      _id: '657acc4cad5c1291816f0533',
      projectName: '빌리지뭐',
      type: '협업프로젝트',
      thumbnail: '/images/project-villagemo.png',
      link: 'https://moondoyeon.notion.site/c4140e34ba6b4dba806918ceb2748924?pvs=4',
    },
  ];

  return (
    <SectionContainer observeSection="project-section" threshold={0.8} style="pt-40 mobile:pt-20">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-2xl mobile:pb-8">PROJECT</h2>
      <Content projects={fake} />
    </SectionContainer>
  );
}
