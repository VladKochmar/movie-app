import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let page: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeComponent],
    });

    page = TestBed.inject(HomeComponent);
  });

  it('should create the page instance', () => {
    expect(page).toBeTruthy();
  });
});
