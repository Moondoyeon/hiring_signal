import { ISection } from '@/app/types';

export const SECTION: ISection[] = [
  { name: 'WORK', to: 'work-section' },
  {
    name: 'PROJECT',
    to: 'project-section',
  },
  {
    name: 'EDUCATION',
    to: 'education-section',
  },
  {
    name: 'STUDY',
    to: 'study-section',
  },
  {
    name: 'SIGNAL',
    to: 'signal-section',
  },
];
export const keyword = ['오늘하루 몰입하는', '꽤 유쾌한', '보완해가는'];

export const queryKeys = {
  SIGNAL_COUNT: 'signalCount',
};
