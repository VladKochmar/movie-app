import { CommonModule } from '@angular/common';
import { TimePipe } from '../../pipes/time/time.pipe';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, TimePipe, DefaultImagePipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatchLater = new EventEmitter<any>();

  addToFavorites() {
    this.movie.isFavorite = !this.movie.isFavorite;
    this.addFavorite.emit(this.movie);
  }

  addToWatchLater() {
    this.movie.isWatchLater = !this.movie.isWatchLater;
    this.addWatchLater.emit(this.movie);
  }
}
