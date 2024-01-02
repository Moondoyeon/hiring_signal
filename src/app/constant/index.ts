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
export const keyword = ['집요한', '꽤 유쾌한', '그냥 꾸준한'];

export const queryKeys = {
  SIGNAL_COUNT: 'signalCount',
};
