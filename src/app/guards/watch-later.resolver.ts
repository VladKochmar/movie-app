import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/state';
import {
  authenticateUser,
  getUserData,
  loadWatchLater,
} from '../store/actions';
import { map, Observable, switchMap, take } from 'rxjs';
import { selectAccountId, selectUserData } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class WatchLaterResolver implements Resolve<boolean> {
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
                }),
              );
            }
            this.store.dispatch(loadWatchLater());
            return true;
          }),
        );
      }),
    );
  }
}
