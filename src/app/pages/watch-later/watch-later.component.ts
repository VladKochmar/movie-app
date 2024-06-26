import { Component } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.scss',
})
export class WatchLaterComponent {
  watchLaterMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.watchLaterMovies = this.movieService.getWatchLater();
  }
}
