import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { popularMovies } from '../../../data/mock-data';
import { of } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let store: Store;
  let route: ActivatedRoute;

  const mockMovie: Movie = popularMovies[0];

  beforeEach(() => {
    const storeSpy = {
      select: jest.fn().mockReturnValue(of(mockMovie)),
    };

    const routeSpy = {
      paramMap: of({ get: (key: number) => 1022789 }),
    };

    TestBed.configureTestingModule({
      imports: [MovieDetailsComponent],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: ActivatedRoute, useValue: routeSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to selectedMovie$ and set movies', () => {
    component.ngOnInit();
    expect(component.movie).toEqual(mockMovie);
  });

  it('should complete destroy$ subject on ngOnDestroy', () => {
    const destroySpy = jest.spyOn(component.destroy$, 'next');
    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalledWith(true);
  });
});
