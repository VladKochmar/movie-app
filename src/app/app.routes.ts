import { Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WatchLaterComponent } from './pages/watch-later/watch-later.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesResolver } from './guards/movies.resolver';
import { CurrentMovieResolver } from './guards/current-movie.resolver';
import { MoviesByCategoryComponent } from './pages/movies-by-category/movies-by-category.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesResolver } from './guards/favorites.resolver';
import { WatchLaterResolver } from './guards/watch-later.resolver';
import { HomeResolver } from './guards/home.resolver';
import { AuthGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { home: HomeResolver } },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: { movie: CurrentMovieResolver },
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
    resolve: { favorites: FavoritesResolver },
  },
  {
    path: 'watch-later',
    component: WatchLaterComponent,
    canActivate: [AuthGuard],
    resolve: { watchLater: WatchLaterResolver },
  },
  {
    path: 'movies/:category/:page',
    component: MoviesByCategoryComponent,
    resolve: { movies: MoviesResolver },
  },
];
