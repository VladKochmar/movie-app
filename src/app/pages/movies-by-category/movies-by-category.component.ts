import { Component } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectSortedMovies, selectTotalMovies } from '../../store/selectors';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltersComponent } from '../../components/filters/filters.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { rxState } from '@rx-angular/state';
import { RxIf } from '@rx-angular/template/if';
import { CommonModule } from '@angular/common';

interface MovieByCategoryState {
  sortedMovies: Movie[] | null;
  totalRecords: number | null;
  category: string | null;
  title: string | null;
  page: number;
  first: number;
}

@Component({
  selector: 'app-movies-by-category',
  standalone: true,
  imports: [
    CommonModule,
    MoviesListComponent,
    FiltersComponent,
    FavoritesComponent,
    PaginatorModule,
    RxIf,
  ],
  templateUrl: './movies-by-category.component.html',
  styleUrl: './movies-by-category.component.scss',
})
export class MoviesByCategoryComponent {
  readonly state = rxState<MovieByCategoryState>(({ set, connect }) => {
    set({
      sortedMovies: null,
      totalRecords: null,
      category: null,
      title: null,
      page: 1,
      first: 0,
    });

    connect('sortedMovies', this.store.select(selectSortedMovies));
    connect('totalRecords', this.store.select(selectTotalMovies));

    connect(
      'category',
      this.route.paramMap.pipe(map((param) => param.get('category'))),
    );

    connect(
      'title',
      this.route.paramMap.pipe(
        map((param) => this.getTitleByCategory(param.get('category'))),
      ),
    );

    connect(
      'page',
      this.route.paramMap.pipe(
        map((params) => Number(params.get('page')) || 1),
      ),
    );

    connect(
      'first',
      this.route.paramMap.pipe(
        map((params) => (Number(params.get('page')) - 1) * 20),
      ),
    );
  });

  sortedMovies$ = this.state.select('sortedMovies');
  totalRecords$ = this.state.select('totalRecords');
  title$ = this.state.select('title');
  first$ = this.state.select('first');

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  onPageChange(event: PaginatorState) {
    let page = this.state.get('page');
    const category = this.state.get('category');

    if (event.page || event.page === 0) {
      page = event.page + 1;
      this.state.set({ page });
    }

    if (category) this.router.navigate([`/movies/${category}/${page}`]);
  }

  getTitleByCategory(category: string | null) {
    let result: string | null = null;

    switch (category) {
      case 'top_rated':
        result = 'Top Rated';
        break;
      case 'popular':
        result = 'Popular';
        break;
      case 'upcoming':
        result = 'Upcoming';
        break;
      case 'now_playing':
        result = 'Now Playing';
        break;
      default:
        console.error('Something went wrong');
        break;
    }

    return result;
  }
}
