import { MouseEvent, TouchEvent } from 'react';

export interface IWork {
  _id: string;
  companyName: string;
  content: string;
  notionLink: string;
  position: string;
  thumbnails: string;
}

export interface IProject {
  _id: string;
  projectName: string;
  type: string;
  thumbnail: string;
  link: string;
}

export interface IStudy {
  _id: string;
  category: string;
  title: string;
  content: string;
  image_url: string;
}

export interface IEducation {
  _id: string;
  category: string;
  title: string;
  period: string;
  content: string;
  grade?: string;
}

export type section =
  | 'movie-section'
  | 'work-section'
  | 'project-section'
  | 'education-section'
  | 'study-section'
  | 'signal-section';

export type MouseEventType<T = Element> = MouseEvent<T>;
export type TouchEventType<T = Element> = TouchEvent<T>;

export interface ISignalCount {
  count: number;
}
export interface ISignalForm {
  name: string;
  email: string;
  message: string;
}
