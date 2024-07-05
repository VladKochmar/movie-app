import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';
import type { Movie } from '../../models/movie.model';

const MOVIES_PATH = 'upcoming';

@Component({
  selector: 'app-upcoming-list-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './upcoming-list-page.component.html',
  styleUrl: './upcoming-list-page.component.scss',
})
export class UpcomingListPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMoviesList(MOVIES_PATH).subscribe((data) => {
      this.movies = data.results;
    });
  }
}
