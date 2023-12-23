import { connectDB } from '@/app/utils/database';
import Content from './Content';
import SectionContainer from '../../Container/SectionContainer';
import { IProject } from '@/app/types';

export default async function ProjectSection() {
  const db = connectDB.db(process.env.DB_NAME);
  const projects = await db.collection<IProject>('projects').find().toArray();
  projects.map((item) => (item._id = item._id.toString()));

  return (
    <SectionContainer observeSection="project-section" threshold={0.8} style="pt-56 mobile:pt-28">
      <h2 className="pb-12 text-4xl font-bold mobile:text-2xl mobile:pb-8">PROJECT</h2>
      <Content projects={projects} />
    </SectionContainer>
  );
}
