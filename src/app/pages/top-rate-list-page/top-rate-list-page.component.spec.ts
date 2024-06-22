import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRateListPageComponent } from './top-rate-list-page.component';

describe('TopRateListPageComponent', () => {
  let component: TopRateListPageComponent;
  let fixture: ComponentFixture<TopRateListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRateListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRateListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
