'use client';

import Button from '../Form/Button';
import { scroll } from '@/app/utils';
import { currentSectionState, signalStatusState } from '@/app/store';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RiHeartPulseFill, RiHeartPulseLine } from '@remixicon/react';
import { useQuery } from '@tanstack/react-query';
import { ISignalCount } from '@/app/types';
import { getSignalCount } from '@/app/utils/fetcher';

export default function HelpButtons() {
  const querySignalCount = useQuery<ISignalCount>({
    queryKey: ['signalCount'],
    queryFn: getSignalCount,
  });
  const sentSignal = useRecoilValue(signalStatusState);

  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);
  const bottom = currentSection === 'signal-section' ? 'bottom-24' : 'bottom-4';

  return (
    <div className={currentSection === 'movie-section' ? 'hidden' : ''}>
      <Button
        theme="black"
        style={`mr-2 z-20 fixed ${bottom} right-16 transition hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid`}
        disabled>
        <div className="relative z-30">
          {sentSignal ? (
            <RiHeartPulseFill size={36} color="#FF5995" className="mx-auto" />
          ) : (
            <RiHeartPulseLine size={36} color="#DCDCDC" className="mx-auto" />
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
        style={`rotate-90 z-30 fixed ${bottom} right-4 hover:bg-white hover:text-black hover:border hover:border-black hover:border-solid`}>
        &lt;
      </Button>
    </div>
  );
}
