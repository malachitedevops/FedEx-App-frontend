import { Solution } from './solution';
export interface Homework {
  deadline: Date;
  created: Date;
  subject: string;
  teacherName: string;
  className: string;
  solutions: Solution[];
};