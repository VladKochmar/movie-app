import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './state';
import { Movie } from '../models/movie.model';

// Movies
export const selectMovieState = createFeatureSelector<MovieState>('movieState');

export const selectMovies = createSelector(selectMovieState, (state) => {
  return state.movies;
});

export const selectSearchedMoviesTitles = createSelector(
  selectMovieState,
  (state) => {
    return state.searchedMoviesTitles;
  }
);

export const selectCurrentMovie = createSelector(selectMovieState, (state) => {
  return state.currentMovie;
});

export const selectTotalMovies = createSelector(selectMovieState, (state) => {
  return state.totalMovies;
});

// Favorites
export const selectFavorites = createSelector(selectMovieState, (state) => {
  return state.favoriteMovies;
});

export const isFavorite = (movie: Movie) =>
  createSelector(selectMovieState, (state) => {
    let result = false;

    if (state.favoriteMovies) {
      result = state.favoriteMovies.some(
        (currentMovie) => currentMovie.id === movie.id
      );
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

    if (state.watchLaterMovies)
      result = state.watchLaterMovies.some(
        (currentMovie) => currentMovie.id === movie.id
      );

    return result;
  });

// News Subscription
export const selectSubscriber = createSelector(selectMovieState, (state) => {
  return state.subscriber;
});

// Login
export const selectUserData = createSelector(selectMovieState, (state) => {
  return state.userData;
});

export const selectAccountId = createSelector(selectMovieState, (state) => {
  return state.accountId;
});

// Genres
export const selectGenres = createSelector(selectMovieState, (state) => {
  return state.genres;
});

export const selectGenre = createSelector(selectMovieState, (state) => {
  return state.selectedGenre;
});

export const selectSortType = createSelector(selectMovieState, (state) => {
  return state.selectedSortType;
});

export const selectSortedMovies = createSelector(
  selectMovies,
  selectSortType,
  (movies, sortType) => {
    if (!movies) return null;

    switch (sortType?.type) {
      case 'rating-desc':
        return movies
          .slice()
          .sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
      case 'rating-asc':
        return movies
          .slice()
          .sort((movieA, movieB) => movieA.vote_average - movieB.vote_average);
      default:
        return movies;
    }
  }
);
