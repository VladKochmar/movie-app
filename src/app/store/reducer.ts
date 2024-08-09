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

  on(MoviesActions.loadMoviesByTitleSuccess, (state, { titles }) => {
    return {
      ...state,
      searchedMoviesTitles: titles,
    };
  }),

  on(MoviesActions.loadMoviesByTitleFailure, (state, { error }) => {
    return {
      ...state,
      searchedMoviesTitles: null,
      error: error,
    };
  }),

  // Movie
  on(MoviesActions.loadMovieSuccess, (state, { movie }) => {
    return {
      ...state,
      currentMovie: movie,
    };
  }),

  on(MoviesActions.loadMovieFailure, (state, { error }) => {
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
  }),

  // News Subscription
  on(MoviesActions.getSubscriberSuccess, (state, { subscriber }) => {
    return {
      ...state,
      subscriber: subscriber,
    };
  }),

  // Genres
  on(MoviesActions.loadGenresSuccess, (state, { genres }) => {
    return {
      ...state,
      genres: genres,
    };
  }),

  on(MoviesActions.loadGenresFailure, (state, { error }) => {
    return {
      ...state,
      genres: null,
      error: error,
    };
  }),

  on(MoviesActions.setSelectedGenre, (state, { genre }) => {
    return {
      ...state,
      selectedGenre: genre,
    };
  }),

  on(MoviesActions.setSelectedSortType, (state, { sortType }) => {
    return {
      ...state,
      selectedSortType: sortType,
    };
  })
);
