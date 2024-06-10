import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatchLater = new EventEmitter<any>();

  addToFavorites() {
    this.addFavorite.emit(this.movie);
  }

  addToWatchLater() {
    this.addWatchLater.emit(this.movie);
  }
}
