import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

// Movies
export const loadMoviesByCategory = createAction(
  '[Movies List] Load Movies By Category',
  props<{ category: string }>()
);

export const loadMoviesSuccess = createAction(
  '[Movies List] Load Movies Success',
  props<{ movies: Movie[] | null }>()
);

export const loadMoviesFailure = createAction(
  '[Movies List] Load Movies Failure',
  props<{ error: any }>()
);

// Movie
export const loadMovieById = createAction(
  '[Movie] Load Movie By ID',
  props<{ id: number }>()
);

export const loadMovieByIdSuccess = createAction(
  '[Movie] Load Movie By ID Success',
  props<{ movie: Movie | null }>()
);

export const loadMovieByIdFailure = createAction(
  '[Movie] Load Movie By ID Failure',
  props<{ error: any }>()
);

// Favorites
export const loadFavorites = createAction('[Favorites] Load Favorites');

export const loadFavoritesSuccess = createAction(
  '[Favorites] Load Favorites Success',
  props<{ movies: Movie[] | null }>()
);

export const loadFavoritesFailure = createAction(
  '[Favorites] Load Favorites Failure',
  props<{ error: any }>()
);

// Watch Later
export const loadWatchLater = createAction('[Watch Later] Load Watch Later');

export const loadWatchLaterSuccess = createAction(
  '[Watch Later] Load Watch Success',
  props<{ movies: Movie[] | null }>()
);

export const loadWatchLaterFailure = createAction(
  '[Watch Later] Load Watch Later Faivlure',
  props<{ error: any }>()
);
