import HelpButtons from '@/components/HelpButtons/HelpButtons';
import VideoSection from '@/components/Sections/Video';
import WorkSection from '@/components/Sections/Work';
import ProjectSection from '@/components/Sections/Project';
import EducationSection from '@/components/Sections/Education';
import StudySection from '@/components/Sections/Study';
import SignalSection from '@/components/Sections/Signal';

export default async function Home() {
  return (
    <main className="relative">
      <HelpButtons />

      <VideoSection />
      <div className="flex justify-center items-center ">
        <div className="flex-col mobile:px-3">
          <WorkSection />
          <ProjectSection />
          <EducationSection />
          <StudySection />
          <SignalSection />
        </div>
      </div>
    </main>
  );
}
