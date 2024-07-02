import { CommonModule } from '@angular/common';
import { TimePipe } from '../../pipes/time/time.pipe';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    CommonModule,
    TimePipe,
    DefaultImagePipe,
    TruncatePipe,
    TooltipModule,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatchLater = new EventEmitter<any>();

  addToFavorites() {
    // Збираюся замінити реалізацію з movie.isFavorite та movie.isWatchLater після вивчення Store, щоб зберігати id фільмів і через них перевіряти, чи був фільм доданий до favorites або watchLater
    this.movie.isFavorite = !this.movie.isFavorite;
    this.addFavorite.emit(this.movie);
  }

  addToWatchLater() {
    this.movie.isWatchLater = !this.movie.isWatchLater;
    this.addWatchLater.emit(this.movie);
  }
}
