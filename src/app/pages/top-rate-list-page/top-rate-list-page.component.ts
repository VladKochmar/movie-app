import { Component, OnInit } from '@angular/core';
import { topRatedMovies } from '../../../assets/data/mock-data';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-top-rate-list-page',
  standalone: true,
  imports: [MovieCardComponent, HeaderComponent],
  templateUrl: './top-rate-list-page.component.html',
  styleUrl: './top-rate-list-page.component.scss',
})
export class TopRateListPageComponent implements OnInit {
  movies: any = [];
  favoritesIds: string[] = [];
  watchLaterIds: string[] = [];

  ngOnInit(): void {
    this.movies = [...topRatedMovies];
  }

  toggleFavorites(movie: any) {
    if (this.favoritesIds.includes(movie.id))
      this.favoritesIds = this.favoritesIds.filter((id) => id !== movie.id);
    else this.favoritesIds.push(movie.id);
  }

  toggleWatchLater(movie: any) {
    if (this.watchLaterIds.includes(movie.id))
      this.watchLaterIds = this.watchLaterIds.filter((id) => id !== movie.id);
    else this.watchLaterIds.push(movie.id);
  }
}
