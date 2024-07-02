import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-top-rated-list-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './top-rated-list-page.component.html',
  styleUrl: './top-rated-list-page.component.scss',
})
export class TopRatedListPageComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getTopRatedMovies();
  }
}
