import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HeaderComponent } from './components/header/header.component';
import { MovieService } from './services/movie/movie.service';
import { AuthService } from './services/auth/auth.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: any;
  let movieServiceMock: any;
  let authServiceMock: any;
  let storeMock: any;

  beforeEach(async () => {
    movieServiceMock = {
      setAccountId: jest.fn(),
    };

    authServiceMock = {
      authenticateAndGetAccountId: jest.fn().mockReturnValue(of('123')),
    };

    storeMock = {
      dispatch: jest.fn(),
    };

    await TestBed.configureTestingModule({
    imports: [RouterTestingModule, HeaderComponent],
    providers: [
        { provide: MovieService, useValue: movieServiceMock },
        { provide: AuthService, useValue: authServiceMock },
        provideMockStore(),
        provideHttpClient(withInterceptorsFromDi()),
    ]
}).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
