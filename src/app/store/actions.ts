import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { SubscriberData } from '../models/subscriber.model';
import { TitleItem } from '../models/title-item.model';
import { Genre } from '../models/genre.model';
import { SortType } from '../models/sort-type.model';
import { AccountTMDB } from '../models/tmdb-account.model';

// Movies
export const loadMoviesByCategory = createAction(
  '[Movies List] Load Movies By Category',
  props<{ category: string }>()
);

export const loadFilteredMovies = createAction(
  '[Movies List] Load Filtered Movies By Category',
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

export const loadMoviesByTitle = createAction(
  '[Search Movies] Load Movies By Title',
  props<{ title: string }>()
);

export const loadMoviesByTitleSuccess = createAction(
  '[Search Movies] Load Movies By Title Success',
  props<{ titles: TitleItem[] | null }>()
);

export const loadMoviesByTitleFailure = createAction(
  '[Search Movies] Load Movies By Title Failure',
  props<{ error: any }>()
);

// Movie
export const loadMovieById = createAction(
  '[Movie] Load Movie By ID',
  props<{ id: number }>()
);

export const loadMovieSuccess = createAction(
  '[Movie] Load Movie By ID Success',
  props<{ movie: Movie | null }>()
);

export const loadMovieFailure = createAction(
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

export const toggleMovieToFavorite = createAction(
  '[Toggle Favorites] Toggle Movie To Favorites',
  props<{ movieId: number; isFavorite: boolean }>()
);

export const toggleMovieToFavoriteSuccess = createAction(
  '[Toggle Favorites] Toggle Movie To Favorites Success',
  props<{ status_code: number; status_message: string }>()
);

export const toggleMovieToFavoriteFailure = createAction(
  '[Toggle Favorites] Toggle Movie To Favorites Failure',
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

export const toggleMovieToWatchLater = createAction(
  '[Toggle Watch Later] Toggle Movie To Watch Later',
  props<{ movieId: number; isWatchLater: boolean }>()
);

export const toggleMovieToWatchLaterSuccess = createAction(
  '[Toggle Watch Later] Toggle Movie To Watch Later Success',
  props<{ status_code: number; status_message: string }>()
);

export const toggleMovieToWatchLaterFailure = createAction(
  '[Toggle Watch Later] Toggle Movie To Watch Later Failure',
  props<{ error: any }>()
);

// News Subscription
export const getSubscriber = createAction('[News Subscription] Get Subscriber');

export const getSubscriberSuccess = createAction(
  '[News Subscription] Get Subscriber Success',
  props<{ subscriber: SubscriberData | null }>()
);

export const setSubscriberToLocalStorage = createAction(
  '[News Subscription] Set Subscriber To LocalStorage',
  props<{ subscriber: SubscriberData }>()
);

export const removeSubsciption = createAction(
  '[News Subscription] Remove Subsciption'
);

// Login
export const getUserData = createAction('[User Data] Get User Data');

export const getUserDataSuccess = createAction(
  '[User Data] Get User Data Success',
  props<{ userData: AccountTMDB | null }>()
);

export const setUserDataToLocalStorage = createAction(
  '[User Data] Set User Data To LocalStorage',
  props<{ userData: AccountTMDB }>()
);

export const authenticateUser = createAction(
  '[Auth] Authenticate And Get Account Id',
  props<{ username: string; password: string }>()
);

export const authenticateUserSuccess = createAction(
  '[Auth] Authenticate User Success',
  props<{ accountId: number }>()
);

export const authenticateUserFailure = createAction(
  '[Auth] Authenticate User Failure',
  props<{ error: any }>()
);

export const removeUser = createAction('[User Data] Remove User');

// Genres
export const loadGenres = createAction('[Genres] Load Genres');

export const loadGenresSuccess = createAction(
  '[Genres] Load Genres Success',
  props<{ genres: Genre[] | null }>()
);

export const loadGenresFailure = createAction(
  '[Genres] Load Genres Failure',
  props<{ error: any }>()
);

export const setSelectedGenre = createAction(
  '[Genre] Set Selected Genres',
  props<{ genre: Genre | null }>()
);

export const setSelectedSortType = createAction(
  '[Sort] Set Selected SortType',
  props<{ sortType: SortType | null }>()
);
