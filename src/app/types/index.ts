export interface IWork {
  _id: string;
  companyName: string;
  content: string;
  notionLink: string;
  position: string;
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

export type section =
  | 'movie-section'
  | 'work-section'
  | 'project-section'
  | 'education-section'
  | 'study-section'
  | 'signal-section';
