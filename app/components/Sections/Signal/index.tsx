import SectionContainer from '@components/Container/SectionContainer';
import SignalForm from '@components/Sections/Signal/SignalForm';

export default function SignalSection() {
  return (
    <SectionContainer observeSection="signal-section" style="pt-40 pb-52 mobile:pt-16 mobile:pb-32">
      <h2 className="text-4xl font-semibold mobile:text-3xl ">SIGNAL</h2>
      <p className="pb-12 mobile:pb-8">폼작성 및 제출시 제게 이메일이 발송됩니다 :D</p>
      <SignalForm />
    </SectionContainer>
  );
}
