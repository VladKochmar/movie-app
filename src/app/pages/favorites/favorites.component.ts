import { Component } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/selectors';
import { rxState } from '@rx-angular/state';
import { RxLet } from '@rx-angular/template/let';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MoviesListComponent, RxLet],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  readonly state = rxState<{ favorites: Movie[] | null }>(
    ({ set, connect }) => {
      set({ favorites: null });
      connect('favorites', this.store.select(selectFavorites));
    },
  );

  favorites$ = this.state.select('favorites');

  constructor(private store: Store) {}
}
