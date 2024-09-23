import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { Genre } from '../../models/genre.model';
import { Store } from '@ngrx/store';
import {
  selectGenre,
  selectGenres,
  selectSortType,
} from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { SortType } from '../../models/sort-type.model';
import {
  loadFilteredMovies,
  setSelectedGenre,
  setSelectedSortType,
} from '../../store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent extends ClearObservable implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    super();
  }

  private category: string | null = null;
  private page: string | number | null = null;

  sortProps: SortType[] | null = null;

  currentSortType: SortType | null = null;
  selectedSortType$ = this.store.select(selectSortType);

  currentGenre: Genre | null = null;
  selectedGenre$ = this.store.select(selectGenre);

  genres: Genre[] | null = null;
  selectedGenres$ = this.store.select(selectGenres);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      this.page = params.get('page');
    });

    this.selectedGenres$.pipe(takeUntil(this.destroy$)).subscribe((result) => {
      this.genres = result;
    });

    this.selectedGenre$.pipe(takeUntil(this.destroy$)).subscribe((result) => {
      this.currentGenre = result;
    });

    this.selectedSortType$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.currentSortType = result;
      });

    this.sortProps = [
      { id: 1, name: 'Best rating', type: 'rating-desc' },
      { id: 2, name: 'Worst rating', type: 'rating-asc' },
    ];
  }

  onGenreChange() {
    this.store.dispatch(setSelectedGenre({ genre: this.currentGenre }));
    if (this.category)
      this.store.dispatch(
        loadFilteredMovies({ category: this.category, page: this.page }),
      );
  }

  onSortTypeChange() {
    this.store.dispatch(
      setSelectedSortType({ sortType: this.currentSortType }),
    );
  }
}
