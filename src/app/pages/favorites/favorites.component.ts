import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../../../assets/data/mock-data';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favoritesIds: string[] = [];
  movies = [
    ...popularMovies,
    ...nowPlayingMovies,
    ...topRatedMovies,
    ...upcomingMovies,
  ];
  favoriteMovies: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const dataString = params['data'];
      this.favoritesIds = dataString ? JSON.parse(dataString) : [];
    });

    this.fillFavoriteMoviesList();
  }

  fillFavoriteMoviesList() {
    if (this.favoritesIds.length) {
      for (const id of this.favoritesIds) {
        const movie = this.movies.find((movie) => movie.id === parseInt(id));
        if (movie) this.favoriteMovies.push(movie);
      }
    } else {
      this.favoriteMovies = [];
    }
  }
}
