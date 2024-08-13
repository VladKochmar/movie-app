import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from '../movie/movie.service';
import { environment } from '../../../environments/environment.development';
import { AccountTMDB } from '../../models/tmdb-account.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
  private validateRequestToken(
    requestToken: string,
    username: string,
    password: string
  ): Observable<void> {
    const url = `${environment.API_URL}/authentication/token/validate_with_login?api_key=${environment.API_KEY}`;
    const body = {
      username,
      password,
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
  public authenticateAndGetAccountId(
    username: string,
    password: string
  ): Observable<number> {
    return this.getRequestToken().pipe(
      switchMap((requestToken) =>
        this.validateRequestToken(requestToken, username, password).pipe(
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

  // Public method to get User Account Data
  public getUserData(): AccountTMDB | null {
    const userData = localStorage.getItem('authUser');

    if (userData) return JSON.parse(userData);

    return null;
  }

  // Public method to add User Account Data to LocalStorage
  public addUserDataToLocalStorage(userData: AccountTMDB) {
    if (!localStorage.getItem('authUser'))
      localStorage.setItem('authUser', JSON.stringify(userData));
  }

  // Public method to remove User Account Data from LocalStorage
  public removeUserFromLocalStorage() {
    if (localStorage.getItem('authUser')) localStorage.removeItem('authUser');
  }
}
