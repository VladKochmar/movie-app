import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../services/movie/movie.service';
import * as MoviesActions from './actions';
import {
  catchError,
  concatMap,
  debounceTime,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { NewsSubscriptionService } from '../services/news-subscription/news-subscription.service';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private newsSubscriptionService: NewsSubscriptionService,
    private authService: AuthService
  ) {}

  loadFilteredMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadFilteredMovies),
      switchMap(({ category, page }) => {
        return this.movieService.loadFilteredMovies(category, page).pipe(
          map(({ movies, totalMovies }) => {
            return MoviesActions.loadMoviesSuccess({ movies, totalMovies });
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
      switchMap(({ title }) => {
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
      switchMap(({ id }) => {
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
      switchMap(() => {
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
      switchMap(({ movieId, isFavorite }) => {
        return this.movieService
          .toggleMovieToFavorites(movieId, isFavorite)
          .pipe(
            concatMap((respone) => [
              MoviesActions.toggleMovieToFavoriteSuccess({
                status_code: respone.status_code,
                status_message: respone.status_message,
              }),
              MoviesActions.loadFavorites(),
            ]),
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
      switchMap(() => {
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
      switchMap(({ movieId, isWatchLater }) => {
        return this.movieService
          .toggleMovieToWatchLater(movieId, isWatchLater)
          .pipe(
            concatMap((respone) => [
              MoviesActions.toggleMovieToWatchLaterSuccess({
                status_code: respone.status_code,
                status_message: respone.status_message,
              }),
              MoviesActions.loadWatchLater(),
            ]),
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

  // Login
  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.getUserData),
      map(() => {
        const userData = this.authService.getUserData();
        return MoviesActions.getUserDataSuccess({ userData });
      })
    )
  );

  addUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MoviesActions.setUserDataToLocalStorage),
        tap((action) =>
          this.authService.addUserDataToLocalStorage(action.userData)
        )
      ),
    { dispatch: false }
  );

  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.authenticateUser),
      switchMap((action) =>
        this.authService
          .authenticateAndGetAccountId(action.username, action.password)
          .pipe(
            map((accountId) =>
              MoviesActions.authenticateUserSuccess({ accountId })
            ),
            catchError((error) =>
              of(MoviesActions.authenticateUserFailure({ error }))
            )
          )
      )
    )
  );

  removeUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MoviesActions.removeUser),
        tap(() => this.authService.removeUserFromLocalStorage())
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
