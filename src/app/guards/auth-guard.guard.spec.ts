import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth-guard.guard';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginPopupComponent } from '../components/login-popup/login-popup.component';

describe('authGuardGuard', () => {
  let guard: AuthGuard;
  let dialogService: DialogService;

  beforeEach(() => {
    const mockDialogService = {
      open: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: DialogService, useValue: mockDialogService },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    dialogService = TestBed.inject(DialogService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should return true if user is authenticated', () => {
    localStorage.setItem('authUser', 'true');

    const result = guard.canActivate();

    expect(result).toBe(true);
  });

  it('should return false and open login dialog if user is not authenticated', () => {
    const dialogSpy = jest.spyOn(dialogService, 'open');

    const result = guard.canActivate();

    expect(result).toBe(false);
    expect(dialogSpy).toHaveBeenCalledWith(LoginPopupComponent, {
      header: 'Log In With TMDB Account',
      width: '25rem',
    });
  });
});
