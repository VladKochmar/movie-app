import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MovieState } from '../store/state';
import { Store } from '@ngrx/store';
import { loadMovieById } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class CurrentMovieResolver implements Resolve<boolean> {
  constructor(private store: Store<MovieState>) {}

  resolve(route: ActivatedRouteSnapshot) {
    const currentId = route.paramMap.get('id');

    if (currentId)
      this.store.dispatch(loadMovieById({ id: parseInt(currentId) }));
    return true;
  }
}
