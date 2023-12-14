import { ObjectId } from "mongodb";

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
