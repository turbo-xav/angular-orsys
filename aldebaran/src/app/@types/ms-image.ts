import { MsComment } from './ms-comment';

export interface MsImage {

  id?: string;
  url: string;
  title: string;
  description: string;
  comments?: MsComment[];
}
