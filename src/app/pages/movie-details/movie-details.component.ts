import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectCurrentMovie } from '../../store/selectors';
import { NewsSubscriptionComponent } from '../../components/news-subscription/news-subscription.component';
import { rxState } from '@rx-angular/state';
import { RxIf } from '@rx-angular/template/if';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe, NewsSubscriptionComponent, RxIf],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  readonly state = rxState<{ movie: Movie | null }>(({ set, connect }) => {
    set({ movie: null });
    connect('movie', this.store.select(selectCurrentMovie));
  });

  movie$ = this.state.select('movie');

  constructor(private store: Store) {}
}
