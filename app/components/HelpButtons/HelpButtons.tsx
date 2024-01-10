'use client';

import Button from '@components/Form/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RiFlashlightFill, RiFlashlightLine } from '@remixicon/react';
import { useQuery } from '@tanstack/react-query';
import { ISignalCount } from 'types/section';
import { queryKeys } from '@constant/index';
import { signalStatusState, currentSectionState } from '@store/index';
import { getSignalCount } from '@utils/fetcher';
import { handleScrollView } from '@utils/index';

export default function HelpButtons() {
  const querySignalCount = useQuery<ISignalCount>({
    queryKey: [queryKeys.SIGNAL_COUNT],
    queryFn: getSignalCount,
  });
  const sentSignal = useRecoilValue(signalStatusState);

  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);

  return (
    <div className={currentSection === 'movie-section' ? 'hidden' : ''}>
      <Button theme="black" style={`mr-2 z-20 fixed bottom-8 right-16 transition`} disabled>
        <div className="relative z-30">
          {sentSignal ? (
            <RiFlashlightFill size={36} color="#FF5995" className="mx-auto" />
          ) : (
            <RiFlashlightLine size={36} color="white" className="mx-auto" />
          )}
          <span className="text-[10px] absolute left-[70%] top-[75%]">
            {querySignalCount.data?.count}
          </span>
        </div>
      </Button>
      <Button
        onClick={() => {
          handleScrollView('movie-section');
          setCurrentSection('movie-section');
        }}
        theme="black"
        style={`rotate-90 z-30 fixed bottom-8 right-4`}>
        &lt;
      </Button>
    </div>
  );
}
