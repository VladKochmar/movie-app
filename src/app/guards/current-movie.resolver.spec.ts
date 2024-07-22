import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { currentMovieResolver } from './current-movie.resolver';

describe('currentMovieResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => currentMovieResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
