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
import { rxState } from '@rx-angular/state';
import { RxIf } from '@rx-angular/template/if';
import { RxLet } from '@rx-angular/template/let';

interface FilterState {
  genres: Genre[] | null;
  currentGenre: Genre | null;
  sortProps: SortType[] | null;
  currentSortType: SortType | null;
}

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, DropdownModule, RxIf, RxLet],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent extends ClearObservable implements OnInit {
  readonly state = rxState<FilterState>(({ set, connect }) => {
    set({
      genres: null,
      currentGenre: null,
      sortProps: [
        { id: 1, name: 'Best rating', type: 'rating-desc' },
        { id: 2, name: 'Worst rating', type: 'rating-asc' },
      ],
      currentSortType: null,
    });

    connect('genres', this.store.select(selectGenres));
    connect('currentGenre', this.store.select(selectGenre));
    connect('currentSortType', this.store.select(selectSortType));
  });

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    super();
  }

  private category: string | null = null;
  private page: string | number | null = null;

  genres$ = this.state.select('genres');
  currentGenre$ = this.state.select('currentGenre');
  sortProps$ = this.state.select('sortProps');
  currentSortType$ = this.state.select('currentSortType');

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.category = params.get('category');
      this.page = params.get('page');
    });
  }

  onGenreChange(genre: Genre) {
    this.store.dispatch(setSelectedGenre({ genre }));
    if (this.category)
      this.store.dispatch(
        loadFilteredMovies({ category: this.category, page: this.page }),
      );
  }

  onSortTypeChange(sortType: SortType) {
    this.store.dispatch(setSelectedSortType({ sortType }));
  }
}
