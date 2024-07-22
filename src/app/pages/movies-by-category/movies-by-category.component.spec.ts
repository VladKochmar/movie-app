import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByCategoryComponent } from './movies-by-category.component';

describe('MoviesByCategoryComponent', () => {
  let component: MoviesByCategoryComponent;
  let fixture: ComponentFixture<MoviesByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesByCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
