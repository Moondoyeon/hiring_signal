import SectionContainer from "../SectionContainer";
import SignalForm from "./SignalForm";

export default function SignalSection() {
  return (
    <SectionContainer observeSection="signal-section" style="pt-40 pb-52">
      <h2 className="pb-12 text-4xl font-bold">SIGNAL</h2>
      <SignalForm />
    </SectionContainer>
  );
}
