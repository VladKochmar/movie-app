import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { Store } from '@ngrx/store';
import { popularMovies } from '../../../data/mock-data';
import { Movie } from '../../models/movie.model';
import { of } from 'rxjs';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let store: Store;

  const mockMovies: Movie[] = popularMovies;

  beforeEach(() => {
    const storeSpy = {
      select: jest.fn().mockReturnValue(of(mockMovies)),
    };

    TestBed.configureTestingModule({
      imports: [FavoritesComponent],
      providers: [{ provide: Store, useValue: storeSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to selectedFavorites$ and set movies', () => {
    component.ngOnInit();
    expect(component.favoriteMovies).toEqual(mockMovies);
  });

  it('should complete destroy$ subject on ngOnDestroy', () => {
    const destroySpy = jest.spyOn(component.destroy$, 'next');
    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalledWith(true);
  });
});
