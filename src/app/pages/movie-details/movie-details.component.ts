import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image/default-image.pipe';
import { Store } from '@ngrx/store';
import { selectCurrentMovie } from '../../store/selectors';
import { NewsSubscriptionComponent } from '../../components/news-subscription/news-subscription.component';

@Component({
  selector: 'wom-movie-details',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe, NewsSubscriptionComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  private store = inject(Store);
  selectedMovie$ = this.store.select(selectCurrentMovie);
}
