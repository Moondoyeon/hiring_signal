import { atom } from 'recoil';
import { section } from '../types';

export const currentSectionState = atom<section>({
  key: 'section',
  default: 'movie-section',
});

export const signalStatusState = atom({
  key: 'signalStatus',
  default: false,
});
