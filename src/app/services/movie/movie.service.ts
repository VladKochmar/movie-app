import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { MovieApi } from '../../models/movie-api.model';
import type { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private accountId: number | null = null;
  private sessionId: number | null = null;

  constructor(private http: HttpClient) {}

  // Ids
  setSessionId(id: number) {
    this.sessionId = id;
  }

  setAccountId(id: number) {
    this.accountId = id;
  }

  getMoviesByCategory(category: string): Observable<MovieApi> {
    return this.http.get<MovieApi>(
      `${environment.API_URL}/movie/${category}?api_key=${environment.API_KEY}`
    );
  }

  loadMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${environment.API_URL}/movie/${id}?api_key=${environment.API_KEY}`
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
}
