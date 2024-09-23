import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectSortedMovies, selectTotalMovies } from '../../store/selectors';
import { map, takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltersComponent } from '../../components/filters/filters.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-movies-by-category',
  standalone: true,
  imports: [
    MoviesListComponent,
    FiltersComponent,
    FavoritesComponent,
    PaginatorModule,
  ],
  templateUrl: './movies-by-category.component.html',
  styleUrl: './movies-by-category.component.scss',
})
export class MoviesByCategoryComponent
  extends ClearObservable
  implements OnInit
{
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    super();
  }

  title: string | null = null;
  category: string | null = null;

  movies: Movie[] | null = [];
  selectedSortedMovies$ = this.store.select(selectSortedMovies);

  page: number = 1;
  totalRecords: number | null = null;
  selectedTotalMovies$ = this.store.select(selectTotalMovies);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        map((params) => {
          this.category = params.get('category');
          return params.get('category');
        }),
      )
      .subscribe((category) => {
        this.title = this.getTitleByCategory(category);
      });

    this.selectedSortedMovies$
      .pipe(takeUntil(this.destroy$))
      .subscribe((moviesList) => {
        this.movies = moviesList;
      });

    this.selectedTotalMovies$
      .pipe(takeUntil(this.destroy$))
      .subscribe((totalMovies) => {
        this.totalRecords = totalMovies;
      });
  }

  onPageChange(event: PaginatorState) {
    if (event.page || event.page === 0) this.page = event.page + 1;

    if (this.category)
      this.router.navigate([`/movies/${this.category}/${this.page}`]);
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
