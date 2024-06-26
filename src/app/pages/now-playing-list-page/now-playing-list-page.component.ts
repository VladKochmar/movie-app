import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';

@Component({
  selector: 'app-now-playing-list-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './now-playing-list-page.component.html',
  styleUrl: './now-playing-list-page.component.scss',
})
export class NowPlayingListPageComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getNowPlayingMovies();
  }
}
