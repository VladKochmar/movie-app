import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { loadMoviesByTitle } from '../../store/actions';
import { selectSearchedMoviesTitles } from '../../store/selectors';
import { TitleItem } from '../../models/title-item.model';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [
    RouterLink,
    InputTextModule,
    InputGroupModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent extends ClearObservable implements OnInit {
  constructor(private store: Store, private router: Router) {
    super();
  }

  @Output() closeSidebarEvent = new EventEmitter<boolean>();

  form!: FormGroup;
  selectedSearchedMoviesTitles$ = this.store.select(selectSearchedMoviesTitles);
  titlesList: TitleItem[] | null = null;

  ngOnInit(): void {
    this.form = new FormGroup({
      searchInput: new FormControl<string>(''),
    });

    this.selectedSearchedMoviesTitles$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.titlesList = data;
      });
  }

  onSearch() {
    this.store.dispatch(
      loadMoviesByTitle({ title: this.form.value.searchInput })
    );
  }

  onSubmit() {
    if (this.form.valid && this.titlesList) {
      this.router.navigate(['/movie', this.titlesList[0].id]);
      this.closeSidebarEvent.emit(false);
    }
  }
}
