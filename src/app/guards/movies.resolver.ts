import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/state';
import {
  loadFavorites,
  loadMoviesByCategory,
  loadWatchLater,
} from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolver implements Resolve<boolean> {
  constructor(private store: Store<MovieState>) {}

  resolve(route: ActivatedRouteSnapshot) {
    const category = route.paramMap.get('category');

    if (category) {
      this.store.dispatch(loadMoviesByCategory({ category }));
      this.store.dispatch(loadFavorites());
      this.store.dispatch(loadWatchLater());
    }
    return true;
  }
}
