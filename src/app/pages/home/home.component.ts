import { Component } from '@angular/core';
import { NewsSubscriptionComponent } from '../../components/news-subscription/news-subscription.component';

@Component({
  selector: 'wom-home',
  standalone: true,
  imports: [NewsSubscriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
