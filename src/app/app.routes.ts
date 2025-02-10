import { Routes } from '@angular/router';
import { MoviesResolver } from './guards/movies.resolver';
import { CurrentMovieResolver } from './guards/current-movie.resolver';
import { FavoritesResolver } from './guards/favorites.resolver';
import { WatchLaterResolver } from './guards/watch-later.resolver';
import { HomeResolver } from './guards/home.resolver';
import { AuthGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    resolve: { home: HomeResolver },
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
    resolve: { movie: CurrentMovieResolver },
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(
        (m) => m.FavoritesComponent
      ),
    canActivate: [AuthGuard],
    resolve: { favorites: FavoritesResolver },
  },
  {
    path: 'watch-later',
    loadComponent: () =>
      import('./pages/watch-later/watch-later.component').then(
        (m) => m.WatchLaterComponent
      ),
    canActivate: [AuthGuard],
    resolve: { watchLater: WatchLaterResolver },
  },
  {
    path: 'movies/:category/:page',
    loadComponent: () =>
      import('./pages/movies-by-category/movies-by-category.component').then(
        (m) => m.MoviesByCategoryComponent
      ),
    resolve: { movies: MoviesResolver },
  },
];
