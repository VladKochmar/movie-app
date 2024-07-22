import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/state';
import { loadFavorites } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class FavoritesResolver implements Resolve<boolean> {
  constructor(private store: Store<MovieState>) {}

  resolve() {
    this.store.dispatch(loadFavorites());
    return true;
  }
}
