import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';
import type { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
}
