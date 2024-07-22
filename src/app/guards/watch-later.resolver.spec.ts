import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { watchLaterResolver } from './watch-later.resolver';

describe('watchLaterResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => watchLaterResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
