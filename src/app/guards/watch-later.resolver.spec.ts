import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { WatchLaterResolver } from './watch-later.resolver';
import { Store } from '@ngrx/store';

describe('WatchLaterResolver', () => {
  let resolver: WatchLaterResolver;
  let store: Store;

  beforeEach(() => {
    const storeSpy = jest.fn(() => ({
      dispatch: jest.fn(),
    })) as any;

    TestBed.configureTestingModule({
      providers: [WatchLaterResolver, { provide: Store, useValue: storeSpy }],
    });

    resolver = TestBed.inject(WatchLaterResolver);
    store = TestBed.inject(Store);
  });

  it('should create the resolver instance', () => {
    expect(resolver).toBeTruthy();
  });
});
