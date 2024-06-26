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
export class MovieCardComponent implements OnInit {
  @Input() movie: any;

  isFavorite: boolean = false;
  isWatchLater: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.isFavorite = this.movieService.getFavorites().includes(this.movie);
    this.isWatchLater = this.movieService.getWatchLater().includes(this.movie);
  }

  toggleFavorites() {
    if (this.isFavorite) this.movieService.removeMovieFromFavorites(this.movie);
    else this.movieService.setMovieToFavorites(this.movie);

    this.isFavorite = !this.isFavorite;
  }

  toggleWatchLater() {
    if (this.isWatchLater)
      this.movieService.removeMovieFromWatchLater(this.movie);
    else this.movieService.setMovieToWatchLater(this.movie);

    this.isWatchLater = !this.isWatchLater;
  }
}
