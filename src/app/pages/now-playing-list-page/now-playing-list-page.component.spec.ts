import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingListPageComponent } from './now-playing-list-page.component';

describe('NowPlayingListPageComponent', () => {
  let component: NowPlayingListPageComponent;
  let fixture: ComponentFixture<NowPlayingListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlayingListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowPlayingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
