import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';

const MOVIES_PATH = 'popular';

@Component({
  selector: 'app-popular-list-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './popular-list-page.component.html',
  styleUrl: './popular-list-page.component.scss',
})
export class PopularListPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMoviesList(MOVIES_PATH).subscribe((data) => {
      this.movies = data.results;
    });
  }
}
