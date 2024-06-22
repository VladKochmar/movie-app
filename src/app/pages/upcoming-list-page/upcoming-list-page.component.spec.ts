import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingListPageComponent } from './upcoming-list-page.component';

describe('UpcomingListPageComponent', () => {
  let component: UpcomingListPageComponent;
  let fixture: ComponentFixture<UpcomingListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
