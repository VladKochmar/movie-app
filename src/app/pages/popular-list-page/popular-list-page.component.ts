import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';

@Component({
  selector: 'app-popular-list-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './popular-list-page.component.html',
  styleUrl: './popular-list-page.component.scss',
})
export class PopularListPageComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getPopularMovies();
  }
}
