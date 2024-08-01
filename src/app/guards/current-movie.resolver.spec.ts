import { TestBed } from '@angular/core/testing';

import { CurrentMovieResolver } from './current-movie.resolver';
import { Store } from '@ngrx/store';

describe('CurrentMovieResolver', () => {
  let resolver: CurrentMovieResolver;
  let store: Store;

  beforeEach(() => {
    const storeSpy = jest.fn(() => ({
      dispatch: jest.fn(),
    })) as any;

    TestBed.configureTestingModule({
      providers: [CurrentMovieResolver, { provide: Store, useValue: storeSpy }],
    });

    resolver = TestBed.inject(CurrentMovieResolver);
    store = TestBed.inject(Store);
  });

  it('should create the resolver instance', () => {
    expect(resolver).toBeTruthy();
  });
});
