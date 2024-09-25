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
import { rxState } from '@rx-angular/state';
import { RxLet } from '@rx-angular/template/let';

interface MovieCardState {
  isFavorite: boolean;
  isWatchLater: boolean;
  user: AccountTMDB | null;
}

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
    RxLet,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  readonly state = rxState<MovieCardState>(({ set, connect }) => {
    set({ isFavorite: false, isWatchLater: false, user: null });

    connect('user', this.store.select(selectUserData));
  });

  constructor(
    private store: Store,
    private dialogService: DialogService,
  ) {}

  isFavorite$ = this.state.select('isFavorite');
  isWatchLater$ = this.state.select('isWatchLater');

  imageSrc: string | null = null;
  defaultImageSrc: string = '../../../assets/images/movies-card/not-found.jpg';

  get favoritesIcon() {
    return this.state.get('isFavorite') ? 'pi pi-heart-fill' : 'pi pi-heart';
  }

  get watchLaterIcon() {
    return this.state.get('isWatchLater')
      ? 'pi pi-bookmark-fill'
      : 'pi pi-bookmark';
  }

  ngOnInit(): void {
    this.imageSrc = this.movie?.poster_path
      ? 'https://image.tmdb.org/t/p/w500' + this.movie?.poster_path
      : null;

    this.state.connect('isFavorite', this.store.select(isFavorite(this.movie)));
    this.state.connect(
      'isWatchLater',
      this.store.select(isWatchLater(this.movie)),
    );
  }

  toggleMovieToFavorite(movieId: number) {
    if (this.state.get('user')) {
      const isFavorite = !this.state.get('isFavorite');
      this.state.set({ isFavorite });

      this.store.dispatch(toggleMovieToFavorite({ movieId, isFavorite }));
    } else {
      this.initPopup();
    }
  }

  toggleMovieToWatchLater(movieId: number) {
    if (this.state.get('user')) {
      const isWatchLater = !this.state.get('isWatchLater');
      this.state.set({ isWatchLater });

      this.store.dispatch(toggleMovieToWatchLater({ movieId, isWatchLater }));
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
}
