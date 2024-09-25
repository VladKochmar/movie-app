import { Component } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectWatchLater } from '../../store/selectors';
import { rxState } from '@rx-angular/state';
import { RxLet } from '@rx-angular/template/let';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [MoviesListComponent, RxLet],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.scss',
})
export class WatchLaterComponent {
  readonly state = rxState<{ watchLater: Movie[] | null }>(
    ({ set, connect }) => {
      set({ watchLater: null });
      connect('watchLater', this.store.select(selectWatchLater));
    },
  );

  watchLater$ = this.state.select('watchLater');

  constructor(private store: Store) {}
}
