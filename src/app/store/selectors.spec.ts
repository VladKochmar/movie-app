import { popularMovies } from '../../data/mock-data';
import {
  selectCurrentMovie,
  selectFavorites,
  selectMovies,
  selectSubscriber,
  selectWatchLater,
} from './selectors';
import { initialState } from './state';
import { MovieState } from './state';

const subscriberData = {
  name: 'User',
  email: 'user@gmail.com',
  date: new Date(),
  selectedGenres: [],
  agreement: true,
};

describe('Selectors', () => {
  const initialState: MovieState = {
    currentMovie: popularMovies[0],
    movies: popularMovies,
    favoriteMovies: popularMovies,
    watchLaterMovies: popularMovies,
    subscriber: subscriberData,
  };

  it('should select the movies from the state', () => {
    expect(selectMovies.projector(initialState)).toEqual(initialState.movies);
  });

  it('should select the currentMovie from the state', () => {
    expect(selectCurrentMovie.projector(initialState)).toEqual(
      initialState.currentMovie
    );
  });

  it('should select the favoriteMovies from the state', () => {
    expect(selectFavorites.projector(initialState)).toEqual(
      initialState.favoriteMovies
    );
  });

  it('should select the watchLaterMovies from the state', () => {
    expect(selectWatchLater.projector(initialState)).toEqual(
      initialState.watchLaterMovies
    );
  });

  it('should select the subscriber from the state', () => {
    expect(selectSubscriber.projector(initialState)).toEqual(
      initialState.subscriber
    );
  });
});
