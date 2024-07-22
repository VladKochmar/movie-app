import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/selectors';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent extends ClearObservable implements OnInit {
  favoriteMovies: Movie[] | null = [];
  selectedFavorites$ = this.store.select(selectFavorites);

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.selectedFavorites$
      .pipe(takeUntil(this.destroy$))
      .subscribe((favorites) => {
        this.favoriteMovies = favorites;
      });
  }
}
