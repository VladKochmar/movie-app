import { Injectable } from '@angular/core';
import { SubscriberData } from '../../models/subscriber.model';

@Injectable({
  providedIn: 'root',
})
export class NewsSubscriptionService {
  constructor() {}

  getSubscriber(): SubscriberData | null {
    const subscriberData = localStorage.getItem('subscriberData');

    if (subscriberData) return JSON.parse(subscriberData);

    return null;
  }

  addSubscriptionToLocalSotrage(subscriptionData: SubscriberData) {
    if (!localStorage.getItem('subscriberData'))
      localStorage.setItem('subscriberData', JSON.stringify(subscriptionData));
  }

  removeSubsciptionFromLocalStorage() {
    if (localStorage.getItem('subscriberData'))
      localStorage.removeItem('subscriberData');
  }
}
