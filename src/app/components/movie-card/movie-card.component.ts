import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import { isFavorite, isWatchLater } from '../../store/selectors';
import {
  toggleMovieToFavorite,
  toggleMovieToWatchLater,
} from '../../store/actions';

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
  constructor(private store: Store) {
    super();
  }

  @Input() movie: Movie | null = null;

  isFavorite: boolean = false;
  isWatchLater: boolean = false;

  imageSrc: string | null = null;
  defaultImageSrc: string = '../../../assets/images/movies-card/not-found.jpg';

  toggleMovieToFavorite(movieId: number) {
    this.isFavorite = !this.isFavorite;
    this.store.dispatch(
      toggleMovieToFavorite({ movieId, isFavorite: this.isFavorite })
    );
  }

  toggleMovieToWatchLater(movieId: number) {
    this.isWatchLater = !this.isWatchLater;
    this.store.dispatch(
      toggleMovieToWatchLater({ movieId, isWatchLater: this.isWatchLater })
    );
  }

  ngOnInit(): void {
    this.imageSrc = this.movie?.poster_path
      ? 'https:/image.tmdb.org/t/p/w500' + this.movie?.poster_path
      : null;

    if (this.movie) {
      this.store
        .select(isFavorite(this.movie))
        .pipe(takeUntil(this.destroy$))
        .subscribe((response) => {
          this.isFavorite = response;
        });

      this.store
        .select(isWatchLater(this.movie))
        .pipe(takeUntil(this.destroy$))
        .subscribe((response) => {
          this.isWatchLater = response;
        });
    }
  }
}
