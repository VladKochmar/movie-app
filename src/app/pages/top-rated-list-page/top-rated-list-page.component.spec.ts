import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedListPageComponent } from './top-rated-list-page.component';

describe('TopRateListPageComponent', () => {
  let component: TopRatedListPageComponent;
  let fixture: ComponentFixture<TopRatedListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatedListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopRatedListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
