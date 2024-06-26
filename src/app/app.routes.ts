import { Routes } from '@angular/router';
import { PopularListPageComponent } from './pages/popular-list-page/popular-list-page.component';
import { TopRatedListPageComponent } from './pages/top-rated-list-page/top-rated-list-page.component';
import { UpcomingListPageComponent } from './pages/upcoming-list-page/upcoming-list-page.component';
import { NowPlayingListPageComponent } from './pages/now-playing-list-page/now-playing-list-page.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WatchLaterComponent } from './pages/watch-later/watch-later.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', component: PopularListPageComponent },
  { path: 'top-rated', component: TopRatedListPageComponent },
  { path: 'upcoming', component: UpcomingListPageComponent },
  { path: 'now-playing', component: NowPlayingListPageComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'watch-later', component: WatchLaterComponent },
];
