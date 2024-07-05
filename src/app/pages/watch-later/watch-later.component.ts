import { Component } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';
import type { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.scss',
})
export class WatchLaterComponent {
  watchLaterMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
}
