import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'wom-movies-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent {
  @Input({ required: true }) movies!: Movie[];
}
