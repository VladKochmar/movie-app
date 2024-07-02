import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../../../assets/data/mock-data';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.scss',
})
export class WatchLaterComponent {
  watchLaterIds: string[] = [];
  movies = [
    ...popularMovies,
    ...nowPlayingMovies,
    ...topRatedMovies,
    ...upcomingMovies,
  ];
  watchLaterMovies: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const dataString = params['data'];
      this.watchLaterIds = dataString ? JSON.parse(dataString) : [];
    });

    this.fillWatchLaterMoviesList();
  }

  fillWatchLaterMoviesList() {
    if (this.watchLaterIds.length) {
      for (const id of this.watchLaterIds) {
        const movie = this.movies.find((movie) => movie.id === parseInt(id));
        if (movie) this.watchLaterMovies.push(movie);
      }
    } else {
      this.watchLaterMovies = [];
    }
  }
}
