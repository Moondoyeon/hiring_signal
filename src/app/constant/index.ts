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
export const keyword = ['보완해가는', '꽤 유쾌한', '계속 노력하는'];

export const queryKeys = {
  SIGNAL_COUNT: 'signalCount',
};
