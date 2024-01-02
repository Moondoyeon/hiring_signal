import SectionContainer from '../../Container/SectionContainer';
import ClickButton from './ClickButton';
import Typing from './Typing';
import Video from './Video';

export default function VideoSection() {
  return (
    <SectionContainer observeSection="movie-section" style="h-screen relative">
      <Video />
      <Typing />
      <ClickButton />
    </SectionContainer>
  );
}
