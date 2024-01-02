import HelpButtons from '@/app/components/HelpButtons/HelpButtons';
import EducationSection from '@/app/components/Sections/Education';
import ProjectSection from '@/app/components/Sections/Project';
import SignalSection from '@/app/components/Sections/Signal';
import StudySection from '@/app/components/Sections/Study';
import VideoSection from '@/app/components/Sections/Video';
import WorkSection from '@/app/components/Sections/Work';

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
