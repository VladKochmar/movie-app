import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from '../movie/movie.service';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username = environment.USERNAME;
  private password = environment.PASSWORD;

  constructor(private http: HttpClient, private movieService: MovieService) {}

  // Get the request token
  private getRequestToken(): Observable<string> {
    const url = `${environment.API_URL}/authentication/token/new?api_key=${environment.API_KEY}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.request_token),
      catchError(this.handleError)
    );
  }

  // Validate the request token with the user's credentials
  private validateRequestToken(requestToken: string): Observable<void> {
    const url = `${environment.API_URL}/authentication/token/validate_with_login?api_key=${environment.API_KEY}`;
    const body = {
      username: this.username,
      password: this.password,
      request_token: requestToken,
    };
    return this.http.post<any>(url, body).pipe(
      map(() => {}),
      catchError(this.handleError)
    );
  }

  // Create a session ID
  private createSession(requestToken: string): Observable<string> {
    const url = `${environment.API_URL}/authentication/session/new?api_key=${environment.API_KEY}`;
    const body = { request_token: requestToken };
    return this.http.post<any>(url, body).pipe(
      map((response) => {
        this.movieService.setSessionId(response.session_id);
        return response.session_id;
      }),
      catchError(this.handleError)
    );
  }

  // Get account details to retrieve accountId
  private getAccountId(sessionId: string): Observable<number> {
    const url = `${environment.API_URL}/account?api_key=${environment.API_KEY}&session_id=${sessionId}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.id),
      catchError(this.handleError)
    );
  }

  // Public method to get accountId
  public authenticateAndGetAccountId(): Observable<number> {
    return this.getRequestToken().pipe(
      switchMap((requestToken) =>
        this.validateRequestToken(requestToken).pipe(
          switchMap(() => this.createSession(requestToken)),
          switchMap((sessionId) => this.getAccountId(sessionId))
        )
      )
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
