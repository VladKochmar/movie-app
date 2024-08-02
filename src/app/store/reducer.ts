import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from './actions';
import { initialState } from './state';

export const MoviesReducer = createReducer(
  initialState,

  // Movies
  on(MoviesActions.loadMoviesSuccess, (state, { movies }) => {
    return {
      ...state,
      movies: movies,
    };
  }),

  on(MoviesActions.loadMoviesFailure, (state, { error }) => {
    return {
      ...state,
      movies: null,
      error: error,
    };
  }),

  // Movie
  on(MoviesActions.loadMovieByIdSuccess, (state, { movie }) => {
    return {
      ...state,
      currentMovie: movie,
    };
  }),

  on(MoviesActions.loadMovieByIdFailure, (state, { error }) => {
    return {
      ...state,
      currentMovie: null,
      error: error,
    };
  }),

  // Favorites
  on(MoviesActions.loadFavoritesSuccess, (state, { movies }) => {
    return {
      ...state,
      favoriteMovies: movies,
    };
  }),

  on(MoviesActions.loadFavoritesFailure, (state, { error }) => {
    return {
      ...state,
      favoriteMovies: null,
      error: error,
    };
  }),

  // Watch Later
  on(MoviesActions.loadWatchLaterSuccess, (state, { movies }) => {
    return {
      ...state,
      watchLaterMovies: movies,
    };
  }),

  on(MoviesActions.loadWatchLaterFailure, (state, { error }) => {
    return {
      ...state,
      watchLaterMovies: null,
      error: error,
    };
  })
);
