import { TestBed } from '@angular/core/testing';

import { NewsSubscriptionService } from './news-subscription.service';

describe('NewsSubscriptionService', () => {
  let service: NewsSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
