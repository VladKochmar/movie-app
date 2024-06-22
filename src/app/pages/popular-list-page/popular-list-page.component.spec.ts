import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularListPageComponent } from './popular-list-page.component';

describe('PopularListPageComponent', () => {
  let component: PopularListPageComponent;
  let fixture: ComponentFixture<PopularListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
