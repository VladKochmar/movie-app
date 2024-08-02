import { TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderComponent],
    });

    component = TestBed.inject(HeaderComponent);
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });
});
