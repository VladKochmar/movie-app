import { popularMovies } from '../../data/mock-data';
import { SubscriberData } from '../models/subscriber.model';
import {
  getSubscriberSuccess,
  loadFavoritesFailure,
  loadFavoritesSuccess,
  loadMovieFailure,
  loadMovieSuccess,
  loadMoviesFailure,
  loadMoviesSuccess,
  loadWatchLaterFailure,
  loadWatchLaterSuccess,
} from './actions';
import { MoviesReducer } from './reducer';
import { initialState } from './state';

describe('MoviesReducer', () => {
  it('should return the initial state', () => {
    const state = MoviesReducer(undefined, { type: 'unknown' });
    expect(state).toBe(initialState);
  });

  it('should handle loadMoviesSuccess', () => {
    const movies = popularMovies;

    const expectedState = {
      ...initialState,
      movies: movies,
    };

    const state = MoviesReducer(initialState, loadMoviesSuccess({ movies }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadMoviesFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      error: error,
      movies: null,
    };

    const state = MoviesReducer(initialState, loadMoviesFailure({ error }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadMovieSuccess', () => {
    const movie = popularMovies[0];

    const expectedState = {
      ...initialState,
      currentMovie: movie,
    };

    const state = MoviesReducer(initialState, loadMovieSuccess({ movie }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadMoviesFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      error: error,
      currentMovie: null,
    };

    const state = MoviesReducer(initialState, loadMovieFailure({ error }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadFavoritesSuccess', () => {
    const movies = popularMovies;

    const expectedState = {
      ...initialState,
      favoriteMovies: movies,
    };

    const state = MoviesReducer(initialState, loadFavoritesSuccess({ movies }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadFavoritesFailure', () => {
    const error = 'Some error';

    const expectedState = {
      ...initialState,
      error: error,
      favoriteMovies: null,
    };

    const state = MoviesReducer(initialState, loadFavoritesFailure({ error }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadWatchLaterSuccess', () => {
    const movies = popularMovies;

    const expectedState = {
      ...initialState,
      watchLaterMovies: movies,
    };

    const state = MoviesReducer(
      initialState,
      loadWatchLaterSuccess({ movies })
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadWatchLaterFailure', () => {
    const error = 'Some error';

    const expectedState = {
      ...initialState,
      error: error,
      watchLaterMovies: null,
    };

    const state = MoviesReducer(initialState, loadWatchLaterFailure({ error }));
    expect(state).toEqual(expectedState);
  });

  it('should handle getSubscriberSuccess', () => {
    const subscriber: SubscriberData | null = {
      name: 'User',
      email: 'user@gmail.com',
      date: new Date(),
      selectedGenres: [],
      agreement: true,
    };

    const expectedState = {
      ...initialState,
      subscriber: subscriber,
    };

    const state = MoviesReducer(
      initialState,
      getSubscriberSuccess({ subscriber })
    );

    expect(state).toEqual(expectedState);
  });
});
