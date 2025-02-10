import { Component, inject, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { Store } from '@ngrx/store';
import { selectSortedMovies, selectTotalMovies } from '../../store/selectors';
import { combineLatest, map, takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'wom-movies-by-category',
  standalone: true,
  imports: [MoviesListComponent, FiltersComponent, PaginatorModule, AsyncPipe],
  templateUrl: './movies-by-category.component.html',
  styleUrl: './movies-by-category.component.scss',
})
export class MoviesByCategoryComponent
  extends ClearObservable
  implements OnInit
{
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  page: number = 1;
  title: string | null = null;
  category: string | null = null;

  data$ = combineLatest({
    movies: this.store.select(selectSortedMovies),
    totalRecords: this.store.select(selectTotalMovies),
  });

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => {
          this.category = params.get('category');
          return params.get('category');
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((category) => {
        this.title = this.getTitleByCategory(category);
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
