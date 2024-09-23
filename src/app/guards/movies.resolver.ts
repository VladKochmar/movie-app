import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/state';
import {
  loadFavorites,
  loadGenres,
  loadFilteredMovies,
  loadWatchLater,
  getUserData,
  authenticateUser,
} from '../store/actions';
import { selectAccountId, selectUserData } from '../store/selectors';
import { map, Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolver implements Resolve<boolean> {
  constructor(private store: Store<MovieState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const category = route.paramMap.get('category');
    const page = route.paramMap.get('page') ? route.paramMap.get('page') : 1;

    if (category) {
      this.store.dispatch(getUserData());
      this.store.dispatch(loadGenres());
      this.store.dispatch(loadFilteredMovies({ category, page }));

      return this.store.select(selectUserData).pipe(
        take(1),
        switchMap((accountData) => {
          return this.store.select(selectAccountId).pipe(
            take(1),
            map((id) => {
              if (!id && accountData) {
                this.store.dispatch(
                  authenticateUser({
                    username: accountData.name,
                    password: accountData.password,
                  }),
                );
              }
              this.store.dispatch(loadFavorites());
              this.store.dispatch(loadWatchLater());
              return true;
            }),
          );
        }),
      );
    }

    return of(false);
  }
}
