import { Suspense } from 'react';
import SectionContainer from '../../Container/SectionContainer';
import ClickButton from './ClickButton';
import Typing from './Typing';
import Video from './Video';

export default function VideoSection() {
  return (
    <SectionContainer observeSection="movie-section" style="h-screen relative">
      <Suspense fallback={<div></div>}>
        <Video />
      </Suspense>
      <Typing />
      <ClickButton />
    </SectionContainer>
  );
}
