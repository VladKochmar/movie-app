import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';
import type { Movie } from '../../models/movie.model';

const MOVIES_PATH = 'top_rated';

@Component({
  selector: 'app-top-rated-list-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './top-rated-list-page.component.html',
  styleUrl: './top-rated-list-page.component.scss',
})
export class TopRatedListPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMoviesList(MOVIES_PATH).subscribe((data) => {
      this.movies = data.results;
    });
  }
}
