import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { Component, inject, Input, OnInit } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import {
  isFavorite,
  isWatchLater,
  selectUserData,
} from '../../store/selectors';
import {
  toggleMovieToFavorite,
  toggleMovieToWatchLater,
} from '../../store/actions';
import { AccountTMDB } from '../../models/tmdb-account.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'wom-movie-card',
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
  @Input() movie: Movie | null = null;

  private store = inject(Store);
  private dialogService = inject(DialogService);

  isFavorite: boolean = false;
  isWatchLater: boolean = false;

  imageSrc: string | null = null;
  defaultImageSrc: string = '../../../assets/images/movies-card/not-found.jpg';

  user: AccountTMDB | null = null;

  toggleMovieToFavorite(movieId: number) {
    if (this.user) {
      this.isFavorite = !this.isFavorite;
      this.store.dispatch(
        toggleMovieToFavorite({ movieId, isFavorite: this.isFavorite })
      );
    } else {
      this.initPopup();
    }
  }

  toggleMovieToWatchLater(movieId: number) {
    if (this.user) {
      this.isWatchLater = !this.isWatchLater;
      this.store.dispatch(
        toggleMovieToWatchLater({ movieId, isWatchLater: this.isWatchLater })
      );
    } else {
      this.initPopup();
    }
  }

  initPopup() {
    const ref: DynamicDialogRef = this.dialogService.open(LoginPopupComponent, {
      header: 'Log In With TMDB Account',
      width: '25rem',
    });
  }

  ngOnInit(): void {
    this.imageSrc = this.movie?.poster_path
      ? 'https://image.tmdb.org/t/p/w500' + this.movie?.poster_path
      : null;

    this.store
      .select(selectUserData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.user = response;
      });

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
