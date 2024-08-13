import { TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { of } from 'rxjs';
import { MovieService } from '../../services/movie/movie.service';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogService } from 'primeng/dynamicdialog';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: any;
  let movieServiceMock: any;
  let storeMock: any;

  beforeEach(async () => {
    movieServiceMock = {
      toggleMovieToFavorites: jest.fn().mockReturnValue(of(null)),
      toggleMovieToWatchLater: jest.fn().mockReturnValue(of(null)),
    };

    storeMock = {
      select: jest.fn().mockReturnValue(of([])),
    };

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        DefaultImagePipe,
        TruncatePipe,
        TooltipModule,
        CardModule,
        ButtonModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: MovieService, useValue: movieServiceMock },
        { provide: Store, useValue: storeMock },
        DialogService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
