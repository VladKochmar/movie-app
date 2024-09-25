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
import { Router, RouterLink } from '@angular/router';
import { rxState } from '@rx-angular/state';
import { RxIf } from '@rx-angular/template/if';
import { RxLet } from '@rx-angular/template/let';

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
    RxIf,
    RxLet,
  ],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent implements OnInit {
  readonly state = rxState<{ titlesList: TitleItem[] | null }>(
    ({ set, connect }) => {
      set({ titlesList: null });

      connect('titlesList', this.store.select(selectSearchedMoviesTitles));
    },
  );

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  @Output() closeSidebarEvent = new EventEmitter<boolean>();

  form!: FormGroup;
  titlesList$ = this.state.select('titlesList');

  ngOnInit(): void {
    this.form = new FormGroup({
      searchInput: new FormControl<string>(''),
    });
  }

  onSearch() {
    this.store.dispatch(
      loadMoviesByTitle({ title: this.form.value.searchInput }),
    );
  }

  onSubmit() {
    const titles = this.state.get('titlesList');

    if (this.form.valid && titles) {
      this.router.navigate(['/movie', titles[0].id]);
      this.closeSidebarEvent.emit(false);
    }
  }
}
