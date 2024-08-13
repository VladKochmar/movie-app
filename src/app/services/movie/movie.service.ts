import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, withLatestFrom } from 'rxjs';
import { MovieApi } from '../../models/movie-api.model';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment.development';
import { GenresApi } from '../../models/genres-api.model';
import { Store } from '@ngrx/store';
import { selectGenre } from '../../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private accountId: number | null = null;
  private sessionId: number | null = null;

  constructor(private http: HttpClient, private store: Store) {}

  // Ids
  setSessionId(id: number) {
    this.sessionId = id;
  }

  setAccountId(id: number) {
    this.accountId = id;
  }

  getSessionId() {
    return this.sessionId;
  }

  getAccoundId() {
    return this.accountId;
  }

  getMoviesByCategory(category: string): Observable<MovieApi> {
    return this.http.get<MovieApi>(
      `${environment.API_URL}/movie/${category}?api_key=${environment.API_KEY}`
    );
  }

  loadFilteredMovies(category: string): Observable<Movie[]> {
    return this.getMoviesByCategory(category).pipe(
      withLatestFrom(this.store.select(selectGenre)),
      map(([movies, selectedGenre]) => {
        return movies.results.filter((movie) => {
          if (movie.genre_ids && selectedGenre?.id)
            return movie.genre_ids.includes(selectedGenre.id);
          return true;
        });
      })
    );
  }

  loadMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${environment.API_URL}/movie/${id}?api_key=${environment.API_KEY}`
    );
  }

  loadMoviesByTitle(movieTitle: string): Observable<MovieApi> {
    const title = movieTitle.trim().replace(/ /g, '+');
    return this.http.get<MovieApi>(
      `${environment.API_URL}/search/movie?query=${title}&api_key=${environment.API_KEY}`
    );
  }

  // Watch Later
  loadWatchLater(): Observable<MovieApi> {
    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${environment.API_ACCESS_TOKEN}`,
    };
    return this.http.get<MovieApi>(
      `${environment.API_URL}/account/${this.accountId}/watchlist/movies?api_key=${environment.API_KEY}`,
      { headers }
    );
  }

  toggleMovieToWatchLater(
    movieId: number,
    isWatchLater: boolean
  ): Observable<any> {
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${environment.API_ACCESS_TOKEN}`,
    };

    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: isWatchLater,
    };

    return this.http.post<any>(
      `${environment.API_URL}/account/${this.accountId}/watchlist?api_key=${environment.API_KEY}&session_id=${this.sessionId}`,
      body,
      { headers }
    );
  }

  // Favorites
  loadFavorites(): Observable<MovieApi> {
    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${environment.API_ACCESS_TOKEN}`,
    };
    return this.http.get<MovieApi>(
      `${environment.API_URL}/account/${this.accountId}/favorite/movies?api_key=${environment.API_KEY}`,
      { headers }
    );
  }

  toggleMovieToFavorites(
    movieId: number,
    isFavorite: boolean
  ): Observable<any> {
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${environment.API_ACCESS_TOKEN}`,
    };

    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite: isFavorite,
    };

    return this.http.post<any>(
      `${environment.API_URL}/account/${this.accountId}/favorite?api_key=${environment.API_KEY}&session_id=${this.sessionId}`,
      body,
      { headers }
    );
  }

  // Genres
  loadMoviesGenres(): Observable<GenresApi> {
    return this.http.get<GenresApi>(
      `${environment.API_URL}/genre/movie/list?api_key=${environment.API_KEY}&language=en`
    );
  }
}
