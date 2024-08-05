import { Store } from '@ngrx/store';
import { HomeResolver } from './home.resolver';
import { TestBed } from '@angular/core/testing';

describe('HomeResolver', () => {
  let resolver: HomeResolver;
  let store: Store;

  beforeEach(() => {
    const storeSpy = jest.fn(() => ({
      dispatch: jest.fn(),
    })) as any;

    TestBed.configureTestingModule({
      providers: [HomeResolver, { provide: Store, useValue: storeSpy }],
    });

    resolver = TestBed.inject(HomeResolver);
    store = TestBed.inject(Store);
  });

  it('should create the resolver instance', () => {
    expect(resolver).toBeTruthy();
  });
});
