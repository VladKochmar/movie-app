import { TestBed } from '@angular/core/testing';

import { MenuSidebarComponent } from './menu-sidebar.component';

describe('MenuSidebarComponent', () => {
  let component: MenuSidebarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuSidebarComponent],
    });

    component = TestBed.inject(MenuSidebarComponent);
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });
});
