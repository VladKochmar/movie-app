import { Movie } from '../models/movie.model';
import { SubscriberData } from '../models/subscriber.model';
import { TitleItem } from '../models/title-item.model';

export interface MovieState {
  currentMovie: Movie | null;
  movies: Movie[] | null;
  favoriteMovies: Movie[] | null;
  watchLaterMovies: Movie[] | null;
  subscriber: SubscriberData | null;
  searchedMoviesTitles: TitleItem[] | null;
}

export const initialState: MovieState = {
  currentMovie: null,
  movies: null,
  favoriteMovies: null,
  watchLaterMovies: null,
  subscriber: null,
  searchedMoviesTitles: null,
};
