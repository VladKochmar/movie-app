import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { MovieService } from './movie.service';
import { Movie } from '../../models/movie.model';
import { popularMovies } from '../../../data/mock-data';
import { environment } from '../../../environments/environment.development';

describe('MovieService', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    injector = getTestBed();

    service = injector.inject(MovieService);
    httpTestingController = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set accountId', () => {
    service.setAccountId(123);
    expect(service.getAccoundId()).toBe(123);
  });

  it('should set sessionId', () => {
    service.setSessionId(123);
    expect(service.getSessionId()).toBe(123);
  });

  it('should return popular movies', () => {
    const mockMovies: Movie[] = popularMovies;

    service.getMoviesByCategory('popular').subscribe((data) => {
      expect(data.results).toEqual(mockMovies);
    });

    const req = httpTestingController.expectOne(
      `${environment.API_URL}/movie/popular?api_key=${environment.API_KEY}`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(mockMovies);
  });

  it('should return movie by Id', () => {
    const mockMovie: Movie = popularMovies[0];

    service.loadMovieById(1022789).subscribe((data) => {
      expect(data).toEqual(mockMovie);
    });

    const req = httpTestingController.expectOne(
      `${environment.API_URL}/movie/1022789?api_key=${environment.API_KEY}`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(mockMovie);
  });

  it('should return favorite movies', () => {
    const mockMovies: Movie[] = popularMovies;

    service.loadFavorites().subscribe((data) => {
      expect(data.results).toEqual(mockMovies);
    });

    const req = httpTestingController.expectOne(
      `${
        environment.API_URL
      }/account/${service.getAccoundId()}/favorite/movies?api_key=${
        environment.API_KEY
      }`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(mockMovies);
  });

  it('should return watch later movies', () => {
    const mockMovies: Movie[] = popularMovies;

    service.loadWatchLater().subscribe((data) => {
      expect(data.results).toEqual(mockMovies);
    });

    const req = httpTestingController.expectOne(
      `${
        environment.API_URL
      }/account/${service.getAccoundId()}/watchlist/movies?api_key=${
        environment.API_KEY
      }`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(mockMovies);
  });

  it('should send correct POST request to add a movie to favorites', () => {
    const movieId = 1022789;
    const isFavorite = true;
    const responseBody = {
      status_code: 1,
      status_message: 'Success.',
    };

    service
      .toggleMovieToFavorites(movieId, isFavorite)
      .subscribe((response) => {
        expect(response).toEqual(responseBody);
      });

    const req = httpTestingController.expectOne(
      `${
        environment.API_URL
      }/account/${service.getAccoundId()}/favorite?api_key=${
        environment.API_KEY
      }&session_id=${service.getSessionId()}`
    );

    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe(
      'application/json;charset=utf-8'
    );
    expect(req.request.headers.get('Authorization')).toBe(
      `Bearer ${environment.API_ACCESS_TOKEN}`
    );
    expect(req.request.body).toEqual({
      media_type: 'movie',
      media_id: movieId,
      favorite: isFavorite,
    });

    req.flush(responseBody);
  });

  it('should return movie by title', () => {
    const title = 'Inside Out 2';
    const mockMovie: Movie = popularMovies[0];

    service.loadMovieByTitle(title).subscribe((data) => {
      expect(data).toEqual(mockMovie);
    });

    const req = httpTestingController.expectOne(
      `${environment.API_URL}/search/movie?query=Inside+Out+2&api_key=${environment.API_KEY}`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(mockMovie);
  });
});
