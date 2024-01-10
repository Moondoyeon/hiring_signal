import WorkSection from '@components/Sections/Work';
import HelpButtons from '@components/HelpButtons/HelpButtons';
import EducationSection from '@components/Sections/Education';
import ProjectSection from '@components/Sections/Project';
import SignalSection from '@components/Sections/Signal';
import StudySection from '@components/Sections/Study';
import VideoSection from '@components/Sections/Video';

export default async function Home() {
  return (
    <main className="relative">
      <HelpButtons />
      <VideoSection />

      <div className="flex justify-center items-center">
        <div className="flex-col mobile:w-[95%] tablet:w-[95%]">
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
