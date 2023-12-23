import Typing from '../../Typing';
import Video from './Video';
import ClickButton from './ClickButton';
import SectionContainer from '../../Container/SectionContainer';

export default function VideoSection() {
  return (
    <SectionContainer observeSection="movie-section" style="h-screen relative">
      <Video />
      <Typing />
      <ClickButton />
    </SectionContainer>
  );
}
