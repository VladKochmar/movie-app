import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { SubscriberData } from '../models/subscriber.model';

// Movies
export const loadMoviesByCategory = createAction(
  '[Movies List] Load Movies By Category',
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

// Movie
export const loadMovieById = createAction(
  '[Movie] Load Movie By ID',
  props<{ id: number }>()
);

export const loadMovieByIdSuccess = createAction(
  '[Movie] Load Movie By ID Success',
  props<{ movie: Movie | null }>()
);

export const loadMovieByIdFailure = createAction(
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
