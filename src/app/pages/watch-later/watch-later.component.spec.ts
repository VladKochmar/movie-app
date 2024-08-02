import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLaterComponent } from './watch-later.component';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { popularMovies } from '../../../data/mock-data';
import { of } from 'rxjs';

describe('WatchLaterComponent', () => {
  let component: WatchLaterComponent;
  let fixture: ComponentFixture<WatchLaterComponent>;
  let store: Store;

  const mockMovies: Movie[] = popularMovies;

  beforeEach(() => {
    const storeSpy = {
      select: jest.fn().mockReturnValue(of(mockMovies)),
    };

    TestBed.configureTestingModule({
      imports: [WatchLaterComponent],
      providers: [{ provide: Store, useValue: storeSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchLaterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to selectedWatchLater$ and set movies', () => {
    component.ngOnInit();
    expect(component.watchLaterMovies).toEqual(mockMovies);
  });

  it('should complete destroy$ subject on ngOnDestroy', () => {
    const destroySpy = jest.spyOn(component.destroy$, 'next');
    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalledWith(true);
  });
});
