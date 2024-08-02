import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectWatchLater } from '../../store/selectors';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.scss',
})
export class WatchLaterComponent extends ClearObservable implements OnInit {
  watchLaterMovies: Movie[] | null = [];
  selectedWatchLater$ = this.store.select(selectWatchLater);

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.selectedWatchLater$
      .pipe(takeUntil(this.destroy$))
      .subscribe((movies) => {
        this.watchLaterMovies = movies;
      });
  }
}
