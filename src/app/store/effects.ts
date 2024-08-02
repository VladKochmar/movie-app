import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../services/movie/movie.service';
import * as MoviesActions from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadMoviesByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMoviesByCategory),
      mergeMap(({ category }) => {
        return this.movieService.getMoviesByCategory(category).pipe(
          map((movies) => {
            const moviesList = movies.results;
            return MoviesActions.loadMoviesSuccess({ movies: moviesList });
          }),
          catchError((error) => of(MoviesActions.loadMoviesFailure({ error })))
        );
      })
    )
  );

  loadMovieById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovieById),
      mergeMap(({ id }) => {
        return this.movieService.loadMovieById(id).pipe(
          map((movie) => MoviesActions.loadMovieByIdSuccess({ movie })),
          catchError((error) =>
            of(MoviesActions.loadMovieByIdFailure({ error }))
          )
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
}
