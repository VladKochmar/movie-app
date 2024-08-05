import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectCurrentMovie } from '../../store/selectors';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import { NewsSubscriptionComponent } from '../../components/news-subscription/news-subscription.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe, NewsSubscriptionComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent extends ClearObservable implements OnInit {
  movie: Movie | null = null;
  selectedMovie$ = this.store.select(selectCurrentMovie);

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.selectedMovie$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentMovie) => {
        this.movie = currentMovie;
      });
  }
}
