import { Component, inject } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { Store } from '@ngrx/store';
import { selectWatchLater } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'wom-watch-later',
  standalone: true,
  imports: [MoviesListComponent, AsyncPipe],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.scss',
})
export class WatchLaterComponent {
  private store = inject(Store);
  selectedWatchLater$ = this.store.select(selectWatchLater);
}
