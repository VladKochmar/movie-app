import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.favoriteMovies = this.movieService.getFavorites();
  }
}
