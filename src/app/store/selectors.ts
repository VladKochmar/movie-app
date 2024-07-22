import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './state';

// Movies
export const selectMovieState = createFeatureSelector<MovieState>('MovieState');

export const selectMovies = createSelector(selectMovieState, (MovieState) => {
  return MovieState.movies;
});

export const selectCurrentMovie = createSelector(
  selectMovieState,
  (MovieState) => {
    return MovieState.currentMovie;
  }
);

export const selectFavorites = createSelector(
  selectMovieState,
  (MovieState) => {
    return MovieState.favoriteMovies;
  }
);

export const selectWatchLater = createSelector(
  selectMovieState,
  (MovieState) => {
    return MovieState.watchLaterMovies;
  }
);
