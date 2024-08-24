import { getTestBed, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    const storeMock = {
      select: jest.fn(() => of(null)),
      dispatch: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, { provide: Store, useValue: storeMock }],
    });

    injector = getTestBed();
    service = injector.inject(AuthService);
    httpTestingController = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
