import { Movie } from '../models/movie.model';

export interface MovieState {
  currentMovie: Movie | null;
  movies: Movie[] | null;
  favoriteMovies: Movie[] | null;
  watchLaterMovies: Movie[] | null;
}

export const initialState: MovieState = {
  currentMovie: null,
  movies: null,
  favoriteMovies: null,
  watchLaterMovies: null,
};
