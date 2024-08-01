import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { MoviesResolver } from './movies.resolver';
import { Store } from '@ngrx/store';

describe('MoviesResolver', () => {
  let resolver: MoviesResolver;
  let store: Store;

  beforeEach(() => {
    const storeSpy = jest.fn(() => ({
      dispatch: jest.fn(),
    })) as any;

    TestBed.configureTestingModule({
      providers: [MoviesResolver, { provide: Store, useValue: storeSpy }],
    });

    resolver = TestBed.inject(MoviesResolver);
    store = TestBed.inject(Store);
  });

  it('should create the resolver instance', () => {
    expect(resolver).toBeTruthy();
  });
});
