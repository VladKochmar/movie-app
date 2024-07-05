import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { MovieApi } from '../../models/movie-api.model';
import type { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '?api_key=4adf5efe6dfe33683539fce6a8feac92';

  constructor(private http: HttpClient) {}

  getMoviesList(path: string): Observable<MovieApi> {
    return this.http.get<MovieApi>(`${this.apiUrl}${path}${this.apiKey}`);
  }

  loadMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}${id}${this.apiKey}`);
  }
}
