import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/state';
import { getSubscriber, loadGenres } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<boolean> {
  constructor(private store: Store<MovieState>) {}

  resolve() {
    this.store.dispatch(getSubscriber());
    this.store.dispatch(loadGenres());
    return true;
  }
}
