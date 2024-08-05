import { Genre } from './genre.model';

export interface SubscriberData {
  name: string;
  email: string;
  date: Date;
  selectedGenres: Genre[];
  agreement: boolean;
}
