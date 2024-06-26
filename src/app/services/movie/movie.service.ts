import { Injectable } from '@angular/core';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../../../data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  favorites: any[] = [];
  watchLater: any[] = [];
  allMovies: any[] = [
    ...new Set([
      ...upcomingMovies,
      ...nowPlayingMovies,
      ...topRatedMovies,
      ...popularMovies,
    ]),
  ];

  constructor() {}

  getPopularMovies() {
    return popularMovies;
  }

  getTopRatedMovies() {
    return topRatedMovies;
  }

  getUpcomingMovies() {
    return upcomingMovies;
  }

  getNowPlayingMovies() {
    return nowPlayingMovies;
  }

  getFavorites() {
    return this.favorites;
  }

  getWatchLater() {
    return this.watchLater;
  }

  setMovieToFavorites(movie: any) {
    if (!this.favorites.includes(movie)) this.favorites.push(movie);
  }

  removeMovieFromFavorites(movie: any) {
    this.favorites = this.favorites.filter(
      (currentMovie) => currentMovie.id !== movie.id
    );
  }

  setMovieToWatchLater(movie: any) {
    if (!this.watchLater.includes(movie)) this.watchLater.push(movie);
  }

  removeMovieFromWatchLater(movie: any) {
    this.watchLater = this.watchLater.filter(
      (currentMovie) => currentMovie !== movie
    );
  }

  getMovieById(id: number) {
    return this.allMovies.find((movie) => movie.id === id);
  }
}
