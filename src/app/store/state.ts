import { Movie } from '../models/movie.model';
import { SubscriberData } from '../models/subscriber.model';

export interface MovieState {
  currentMovie: Movie | null;
  movies: Movie[] | null;
  favoriteMovies: Movie[] | null;
  watchLaterMovies: Movie[] | null;
  subscriber: SubscriberData | null;
}

export const initialState: MovieState = {
  currentMovie: null,
  movies: null,
  favoriteMovies: null,
  watchLaterMovies: null,
  subscriber: null,
};
