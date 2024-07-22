import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/state';
import { loadWatchLater } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class WatchLaterResolver implements Resolve<boolean> {
  constructor(private store: Store<MovieState>) {}

  resolve() {
    this.store.dispatch(loadWatchLater());
    return true;
  }
}
