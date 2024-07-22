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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: { movie: CurrentMovieResolver },
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    resolve: { favorites: FavoritesResolver },
  },
  {
    path: 'watch-later',
    component: WatchLaterComponent,
    resolve: { watchLater: WatchLaterResolver },
  },
  {
    path: 'movies/:category',
    component: MoviesByCategoryComponent,
    resolve: { movies: MoviesResolver },
  },
];
