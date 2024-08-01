import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByCategoryComponent } from './movies-by-category.component';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { popularMovies } from '../../../data/mock-data';
import { of } from 'rxjs';

describe('MoviesByCategoryComponent', () => {
  let component: MoviesByCategoryComponent;
  let fixture: ComponentFixture<MoviesByCategoryComponent>;
  let store: Store;
  let route: ActivatedRoute;

  const mockMovies: Movie[] = popularMovies;

  beforeEach(() => {
    const storeSpy = {
      select: jest.fn().mockReturnValue(of(mockMovies)),
    };

    const routeSpy = {
      paramMap: of({ get: (key: string) => 'popular' }),
    };

    TestBed.configureTestingModule({
      imports: [MoviesByCategoryComponent],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: ActivatedRoute, useValue: routeSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesByCategoryComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title based on category', () => {
    component.ngOnInit();
    expect(component.title).toBe('Popular');
  });

  it('should subscribe to selectedMovies$ and set movies', () => {
    component.ngOnInit();
    expect(component.movies).toEqual(mockMovies);
  });

  it('should get title by category', () => {
    expect(component.getTitleByCategory('popular')).toBe('Popular');
    expect(component.getTitleByCategory('top_rated')).toBe('Top Rated');
    expect(component.getTitleByCategory('upcoming')).toBe('Upcoming');
    expect(component.getTitleByCategory('now_playing')).toBe('Now Playing');
    expect(component.getTitleByCategory('invalid_category')).toBeNull();
  });

  it('should complete destroy$ subject on ngOnDestroy', () => {
    const destroySpy = jest.spyOn(component.destroy$, 'next');
    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalledWith(true);
  });
});
