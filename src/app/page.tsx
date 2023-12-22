import HelpButtons from './components/sections/main/HelpButtons';
import VideoSection from './components/sections/Video';
import WorkSection from './components/sections/Work';
import ProjectSection from './components/sections/Project';
import EducationSection from './components/sections/Education';
import StudySection from './components/sections/Study';
import SignalSection from './components/sections/Signal';

export default async function Home() {
  return (
    <main className="relative">
      <HelpButtons />

      <section id="movie-section">
        <VideoSection />
      </section>

      <section className="flex justify-center items-center">
        <ul className="max-w-full mobile:px-3">
          <li id="work-section">
            <WorkSection />
          </li>
          <li id="project-section">
            <ProjectSection />
          </li>
          <li id="education-section">
            <EducationSection />
          </li>
          <li id="study-section">
            <StudySection />
          </li>
          <li id="signal-section">
            <SignalSection />
          </li>
        </ul>
      </section>
    </main>
  );
}
