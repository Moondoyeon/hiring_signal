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

// 전역 state
export type bgColorMode = "purple-mode" | "orange-mode" | "default-mode";
