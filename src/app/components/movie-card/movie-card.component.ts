import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import { selectFavorites, selectWatchLater } from '../../store/selectors';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    CommonModule,
    DefaultImagePipe,
    TruncatePipe,
    TooltipModule,
    CardModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent extends ClearObservable implements OnInit {
  constructor(private movieService: MovieService, private store: Store) {
    super();
  }

  @Input() movie: Movie | null = null;

  isFavorite: boolean = false;
  isWatchLater: boolean = false;

  toggleMovieToFavorite(movieId: number) {
    this.isFavorite = !this.isFavorite;
    this.movieService
      .toggleMovieToFavorites(movieId, this.isFavorite)
      .subscribe();
  }

  toggleMovieToWatchLater(movieId: number) {
    this.isWatchLater = !this.isWatchLater;
    this.movieService
      .toggleMovieToWatchLater(movieId, this.isWatchLater)
      .subscribe();
  }

  ngOnInit(): void {
    this.store
      .select(selectFavorites)
      .pipe(takeUntil(this.destroy$))
      .subscribe((favorites) => {
        if (favorites && this.movie)
          this.isFavorite = favorites.includes(this.movie);
      });

    this.store
      .select(selectWatchLater)
      .pipe(takeUntil(this.destroy$))
      .subscribe((watchLater) => {
        if (watchLater && this.movie)
          this.isWatchLater = watchLater.includes(this.movie);
      });
  }
}
