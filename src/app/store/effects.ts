import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../services/movie/movie.service';
import * as MoviesActions from './actions';
import {
  catchError,
  debounceTime,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { NewsSubscriptionService } from '../services/news-subscription/news-subscription.service';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private newsSubscriptionService: NewsSubscriptionService
  ) {}

  loadFilteredMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadFilteredMovies),
      mergeMap(({ category }) => {
        return this.movieService.loadFilteredMovies(category).pipe(
          map((movies) => {
            return MoviesActions.loadMoviesSuccess({ movies });
          }),
          catchError((error) => of(MoviesActions.loadMoviesFailure({ error })))
        );
      })
    )
  );

  loadMoviesByTitle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMoviesByTitle),
      debounceTime(300),
      mergeMap(({ title }) => {
        return this.movieService.loadMoviesByTitle(title).pipe(
          map((movies) => {
            const titlesList = movies.results.map((movie) => ({
              id: movie.id,
              title: movie.title,
            }));
            return MoviesActions.loadMoviesByTitleSuccess({
              titles: titlesList,
            });
          }),
          catchError((error) =>
            of(MoviesActions.loadMoviesByTitleFailure({ error }))
          )
        );
      })
    )
  );

  loadMovieById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovieById),
      mergeMap(({ id }) => {
        return this.movieService.loadMovieById(id).pipe(
          map((movie) => MoviesActions.loadMovieSuccess({ movie })),
          catchError((error) => of(MoviesActions.loadMovieFailure({ error })))
        );
      })
    )
  );

  loadFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadFavorites),
      mergeMap(() => {
        return this.movieService.loadFavorites().pipe(
          map((movies) => {
            const favorites = movies.results;
            return MoviesActions.loadFavoritesSuccess({ movies: favorites });
          }),
          catchError((error) =>
            of(MoviesActions.loadFavoritesFailure({ error }))
          )
        );
      })
    )
  );

  toggleMovieToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.toggleMovieToFavorite),
      mergeMap(({ movieId, isFavorite }) => {
        return this.movieService
          .toggleMovieToFavorites(movieId, isFavorite)
          .pipe(
            map((respone) =>
              MoviesActions.toggleMovieToFavoriteSuccess({
                status_code: respone.status_code,
                status_message: respone.status_message,
              })
            ),
            catchError((error) =>
              of(MoviesActions.toggleMovieToFavoriteFailure({ error }))
            )
          );
      })
    )
  );

  loadWatchLater$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadWatchLater),
      mergeMap(() => {
        return this.movieService.loadWatchLater().pipe(
          map((movies) => {
            const watchLater = movies.results;
            return MoviesActions.loadWatchLaterSuccess({ movies: watchLater });
          }),
          catchError((error) =>
            of(MoviesActions.loadWatchLaterFailure({ error }))
          )
        );
      })
    )
  );

  toggleMovieToWatchLater$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.toggleMovieToWatchLater),
      mergeMap(({ movieId, isWatchLater }) => {
        return this.movieService
          .toggleMovieToWatchLater(movieId, isWatchLater)
          .pipe(
            map((respone) =>
              MoviesActions.toggleMovieToWatchLaterSuccess({
                status_code: respone.status_code,
                status_message: respone.status_message,
              })
            ),
            catchError((error) =>
              of(MoviesActions.toggleMovieToWatchLaterFailure({ error }))
            )
          );
      })
    )
  );

  // News Subscription
  getSubscriber$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.getSubscriber),
      map(() => {
        const subscriberData = this.newsSubscriptionService.getSubscriber();
        return MoviesActions.getSubscriberSuccess({
          subscriber: subscriberData,
        });
      })
    )
  );

  addSubscription$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MoviesActions.setSubscriberToLocalStorage),
        tap((action) =>
          this.newsSubscriptionService.addSubscriptionToLocalSotrage(
            action.subscriber
          )
        )
      ),
    { dispatch: false }
  );

  removeSubscription$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MoviesActions.removeSubsciption),
        tap(() =>
          this.newsSubscriptionService.removeSubsciptionFromLocalStorage()
        )
      ),
    { dispatch: false }
  );

  // Genres
  loadGenres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadGenres),
      switchMap(() => {
        return this.movieService.loadMoviesGenres().pipe(
          map((result) => {
            const genres = result.genres;
            return MoviesActions.loadGenresSuccess({ genres });
          }),
          catchError((error) => of(MoviesActions.loadGenresFailure({ error })))
        );
      })
    )
  );
}
