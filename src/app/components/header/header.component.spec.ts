import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccountTMDB } from '../../models/tmdb-account.model';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Store;
  let confirmationService: ConfirmationService;
  let messageService: MessageService;

  const mockUser: AccountTMDB = {
    name: 'testuser',
    password: '123',
  };

  beforeEach(async () => {
    const mockStore = {
      select: jest.fn(),
      dispatch: jest.fn(),
    };

    const mockActivatedRoute = {
      paramMap: of({
        get: jest.fn().mockReturnValue('test-category'),
      }),
    };

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        ConfirmationService,
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    confirmationService = TestBed.inject(ConfirmationService);
    messageService = TestBed.inject(MessageService);

    jest.spyOn(store, 'select').mockReturnValue(of(mockUser));
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });
});
