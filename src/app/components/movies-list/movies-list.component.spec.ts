import { TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesListComponent],
    });

    component = TestBed.inject(MoviesListComponent);
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });
});
