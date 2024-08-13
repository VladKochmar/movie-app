import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginPopupComponent } from '../components/login-popup/login-popup.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private dialogService: DialogService) {}

  canActivate() {
    if (localStorage.getItem('authUser')) return true;
    else {
      const ref: DynamicDialogRef = this.dialogService.open(
        LoginPopupComponent,
        { header: 'Log In With TMDB Account', width: '25rem' }
      );

      return false;
    }
  }
}
