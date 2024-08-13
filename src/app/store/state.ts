import { Genre } from '../models/genre.model';
import { Movie } from '../models/movie.model';
import { SortType } from '../models/sort-type.model';
import { SubscriberData } from '../models/subscriber.model';
import { TitleItem } from '../models/title-item.model';
import { AccountTMDB } from '../models/tmdb-account.model';

export interface MovieState {
  currentMovie: Movie | null;
  genres: Genre[] | null;
  selectedGenre: Genre | null;
  selectedSortType: SortType | null;
  movies: Movie[] | null;
  totalMovies: number | null;
  favoriteMovies: Movie[] | null;
  watchLaterMovies: Movie[] | null;
  subscriber: SubscriberData | null;
  userData: AccountTMDB | null;
  accountId: number | null;
  searchedMoviesTitles: TitleItem[] | null;
}

export const initialState: MovieState = {
  currentMovie: null,
  genres: null,
  selectedGenre: null,
  selectedSortType: null,
  movies: null,
  totalMovies: null,
  favoriteMovies: null,
  watchLaterMovies: null,
  subscriber: null,
  userData: null,
  accountId: null,
  searchedMoviesTitles: null,
};
