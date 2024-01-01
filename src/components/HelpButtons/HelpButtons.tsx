'use client';

import Button from '../Form/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RiFlashlightFill, RiFlashlightLine } from '@remixicon/react';
import { useQuery } from '@tanstack/react-query';
import { ISignalCount } from '@/types';
import { getSignalCount } from '@/utils/fetcher';
import { currentSectionState, signalStatusState } from '@/recoil';
import { scroll } from '@/utils';
import { queryKeys } from '@/constant/queryKeys';

export default function HelpButtons() {
  const querySignalCount = useQuery<ISignalCount>({
    queryKey: [queryKeys.SIGNAL_COUNT],
    queryFn: getSignalCount,
  });
  const sentSignal = useRecoilValue(signalStatusState);

  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);
  const bottom = currentSection === 'signal-section' ? 'bottom-28' : 'bottom-4';

  return (
    <div className={currentSection === 'movie-section' ? 'hidden' : ''}>
      <Button theme="black" style={`mr-2 z-20 fixed ${bottom} right-16 transition`} disabled>
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
          scroll('movie-section');
          setCurrentSection('movie-section');
        }}
        theme="black"
        style={`rotate-90 z-30 fixed ${bottom} right-4`}>
        &lt;
      </Button>
    </div>
  );
}
