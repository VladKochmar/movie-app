import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {
  @Input() movies: any;

  public favorites: any[] = [];
  public watchLater: any[] = [];

  toggleFavorites(movie: any) {
    if (this.favorites.includes(movie))
      this.favorites = this.favorites.filter((item) => item.id !== movie.id);
    else this.favorites.push(movie);
  }

  toggleWatchLater(movie: any) {
    if (this.watchLater.includes(movie))
      this.watchLater = this.watchLater.filter((item) => item.id !== movie.id);
    else this.watchLater.push(movie);
  }
}
