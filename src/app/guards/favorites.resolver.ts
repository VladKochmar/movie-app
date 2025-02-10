import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/state';
import { authenticateUser, getUserData, loadFavorites } from '../store/actions';
import { selectAccountId, selectUserData } from '../store/selectors';
import { map, Observable, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesResolver implements Resolve<boolean> {
  constructor(private store: Store<MovieState>) {}

  resolve(): Observable<boolean> {
    this.store.dispatch(getUserData());

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
                })
              );
            }
            this.store.dispatch(loadFavorites());
            return true;
          })
        );
      })
    );
  }
}
