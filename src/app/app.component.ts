import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MovieService } from './services/movie/movie.service';
import { AuthService } from './services/auth/auth.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadFavorites, loadWatchLater } from './store/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private store: Store
  ) {}

  unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.authService.authenticateAndGetAccountId().subscribe(
      (accountId) => {
        this.movieService.setAccountId(accountId);
      },
      (error) => {
        console.log(`Error: ${error}`);
      }
    );
  }
}
