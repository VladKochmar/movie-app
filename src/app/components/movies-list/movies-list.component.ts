import { Component, Input, Output } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {
  @Input() movies: any;
}
