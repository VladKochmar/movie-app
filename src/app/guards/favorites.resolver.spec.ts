import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { FavoritesResolver } from './favorites.resolver';
import { Store } from '@ngrx/store';

describe('FavoritesResolver', () => {
  let resolver: FavoritesResolver;
  let store: Store;

  beforeEach(() => {
    const storeSpy = jest.fn(() => ({
      dispatch: jest.fn(),
    })) as any;

    TestBed.configureTestingModule({
      providers: [FavoritesResolver, { provide: Store, useValue: storeSpy }],
    });

    resolver = TestBed.inject(FavoritesResolver);
    store = TestBed.inject(Store);
  });

  it('should create the resolver instance', () => {
    expect(resolver).toBeTruthy();
  });
});
