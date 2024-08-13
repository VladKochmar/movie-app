import { of, ReplaySubject } from 'rxjs';
import { MoviesEffects } from './effects';
import { MovieService } from '../services/movie/movie.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Movie } from '../models/movie.model';
import { popularMovies } from '../../data/mock-data';
import * as MoviesActions from './actions';
import { MovieApi } from '../models/movie-api.model';
import { NewsSubscriptionService } from '../services/news-subscription/news-subscription.service';
import { AuthService } from '../services/auth/auth.service';

describe('MoviesEffects', () => {
  let effects: MoviesEffects;
  let actions$: ReplaySubject<any>;
  let movieService: MovieService;
  let newsSubscriptionServiceMock: any;
  let authServiceMock: any;

  beforeEach(() => {
    newsSubscriptionServiceMock = {
      getSubscriber: jest.fn(),
      addSubscriptionToLocalSotrage: jest.fn(),
      removeSubsciptionFromLocalStorage: jest.fn(),
    };

    authServiceMock = {
      getUserData: jest.fn(),
      addUserDataToLocalStorage: jest.fn(),
      authenticateAndGetAccountId: jest.fn(),
      removeUserFromLocalStorage: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: MovieService,
          useValue: {
            getMovieList: jest.fn(),
          },
        },
        {
          provide: NewsSubscriptionService,
          useValue: newsSubscriptionServiceMock,
        },
        { provide: AuthService, useValue: authServiceMock },
      ],
    });

    effects = TestBed.inject(MoviesEffects);
    movieService = TestBed.inject(MovieService);
    actions$ = new ReplaySubject(1);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should return a loadMoviesSuccess action with movies on success', (done) => {
    const mockMovies: Movie[] = popularMovies;

    actions$.next(MoviesActions.loadFilteredMovies({ category: 'popular' }));
    movieService.loadFilteredMovies = jest.fn(() => of(mockMovies));

    effects.loadFilteredMovies$.subscribe((result) => {
      expect(result).toEqual(
        MoviesActions.loadMoviesSuccess({ movies: mockMovies })
      );
      done();
    });
  });

  it('should return a loadFavoritesSuccess on success', (done) => {
    const mockMovies: Movie[] = popularMovies;
    const mockMovieApi: MovieApi = {
      total_pages: 1,
      page: 1,
      total_results: 1,
      results: mockMovies,
    };

    actions$.next(MoviesActions.loadFavorites());
    movieService.loadFavorites = jest.fn(() => of(mockMovieApi));

    effects.loadFavorites$.subscribe((result) => {
      expect(result).toEqual(
        MoviesActions.loadFavoritesSuccess({ movies: mockMovies })
      );
      done();
    });
  });

  it('should return a loadWatchLaterSuccess on success', (done) => {
    const mockMovies: Movie[] = popularMovies;
    const mockMovieApi: MovieApi = {
      total_pages: 1,
      page: 1,
      total_results: 1,
      results: mockMovies,
    };

    actions$.next(MoviesActions.loadWatchLater());
    movieService.loadWatchLater = jest.fn(() => of(mockMovieApi));

    effects.loadWatchLater$.subscribe((result) => {
      expect(result).toEqual(
        MoviesActions.loadWatchLaterSuccess({ movies: mockMovies })
      );
      done();
    });
  });

  it('should return a loadMovieSuccess on success', (done) => {
    const mockMovie: Movie = popularMovies[0];

    actions$.next(MoviesActions.loadMovieById({ id: 1022789 }));
    movieService.loadMovieById = jest.fn(() => of(mockMovie));

    effects.loadMovieById$.subscribe((result) => {
      expect(result).toEqual(
        MoviesActions.loadMovieSuccess({ movie: mockMovie })
      );
      done();
    });
  });
});
