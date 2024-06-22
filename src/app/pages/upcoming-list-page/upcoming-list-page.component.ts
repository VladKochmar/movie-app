import { Component, OnInit } from '@angular/core';
import { upcomingMovies } from '../../../assets/data/mock-data';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-upcoming-list-page',
  standalone: true,
  imports: [MovieCardComponent, HeaderComponent],
  templateUrl: './upcoming-list-page.component.html',
  styleUrl: './upcoming-list-page.component.scss',
})
export class UpcomingListPageComponent implements OnInit {
  movies: any = [];
  favoritesIds: string[] = [];
  watchLaterIds: string[] = [];

  ngOnInit(): void {
    this.movies = [...upcomingMovies];
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
