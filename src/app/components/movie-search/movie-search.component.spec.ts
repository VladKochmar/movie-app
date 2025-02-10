import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchComponent } from './movie-search.component';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { of } from 'rxjs';
import * as MoviesActions from '../../store/actions';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;
  let store: Store;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = { navigate: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [
        MovieSearchComponent,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        InputGroupModule,
        ButtonModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        {
          provide: Store,
          useValue: { dispatch: jest.fn(), select: jest.fn(() => of([])) },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadMoviesByTitle on search', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.form.setValue({ searchInput: 'test movie' });
    component.onSearch();
    expect(dispatchSpy).toHaveBeenCalledWith(
      MoviesActions.loadMoviesByTitle({ title: 'test movie' })
    );
  });
});
