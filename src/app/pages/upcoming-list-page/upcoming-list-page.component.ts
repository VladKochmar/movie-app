import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-upcoming-list-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './upcoming-list-page.component.html',
  styleUrl: './upcoming-list-page.component.scss',
})
export class UpcomingListPageComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getUpcomingMovies();
  }
}
