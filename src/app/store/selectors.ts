import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './state';
import { Movie } from '../models/movie.model';

// Movies
export const selectMovieState = createFeatureSelector<MovieState>('movieState');

export const selectMovies = createSelector(selectMovieState, (state) => {
  return state.movies;
});

export const selectCurrentMovie = createSelector(selectMovieState, (state) => {
  return state.currentMovie;
});

// Favorites
export const selectFavorites = createSelector(selectMovieState, (state) => {
  return state.favoriteMovies;
});

export const isFavorite = (movie: Movie) =>
  createSelector(selectMovieState, (state) => {
    let result = false;

    if (state.favoriteMovies) {
      result = state.favoriteMovies.includes(movie);
    }

    return result;
  });

// Watch Later
export const selectWatchLater = createSelector(selectMovieState, (state) => {
  return state.watchLaterMovies;
});

export const isWatchLater = (movie: Movie) =>
  createSelector(selectMovieState, (state) => {
    let result = false;

    if (state.watchLaterMovies) result = state.watchLaterMovies.includes(movie);

    return result;
  });
