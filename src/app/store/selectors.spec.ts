import { popularMovies } from '../../data/mock-data';
import { SortType } from '../models/sort-type.model';
import {
  selectCurrentMovie,
  selectFavorites,
  selectMovies,
  selectSearchedMoviesTitles,
  selectSortedMovies,
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
    genres: null,
    movies: popularMovies,
    selectedGenre: null,
    selectedSortType: null,
    favoriteMovies: popularMovies,
    watchLaterMovies: popularMovies,
    subscriber: subscriberData,
    searchedMoviesTitles: null,
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

  it('should select the selectSearchedMoviesTitles from the state', () => {
    expect(selectSearchedMoviesTitles.projector(initialState)).toEqual(
      initialState.searchedMoviesTitles
    );
  });

  it('should return movies sorted by rating in descending order', () => {
    const sortType: SortType = { id: 1, name: '', type: 'rating-desc' };
    const result = selectSortedMovies.projector(popularMovies, sortType);
    const sortedMovies = popularMovies
      .slice()
      .sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);

    expect(result).toEqual(sortedMovies);
  });

  it('should return movies unsorted when sortType is not provided', () => {
    const sortType = null;
    const result = selectSortedMovies.projector(popularMovies, sortType);

    expect(result).toEqual(popularMovies);
  });
});
