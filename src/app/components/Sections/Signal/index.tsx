import SectionContainer from '../../Container/SectionContainer';
import SignalForm from './SignalForm';

export default function SignalSection() {
  return (
    <SectionContainer observeSection="signal-section" style="pt-40 pb-52 mobile:pt-16 mobile:pb-32">
      <h2 className="pb-12 text-4xl font-semibold mobile:text-3xl mobile:pb-8">SIGNAL</h2>
      <SignalForm />
    </SectionContainer>
  );
}
