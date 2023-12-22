import { section } from '../types';

interface setionValue {
  name: string;
  to: section;
}
export const sections: { [key: string]: setionValue } = {
  work: {
    name: 'WORK',
    to: 'work-section',
  },
  project: {
    name: 'PROJECT',
    to: 'project-section',
  },
  education: {
    name: 'EDUCATION',
    to: 'education-section',
  },
  study: {
    name: 'STUDY',
    to: 'study-section',
  },
  signal: {
    name: 'SIGNAL',
    to: 'signal-section',
  },
};
export const keyword = ['책임감있는', '같이가는', '집요한', '유쾌한', '포기하지않는'];
