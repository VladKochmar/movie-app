import { Component, inject } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'wom-favorites',
  standalone: true,
  imports: [MoviesListComponent, AsyncPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  private store = inject(Store);
  selectedFavorites$ = this.store.select(selectFavorites);
}
