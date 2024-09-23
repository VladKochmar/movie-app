import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuSidebarComponent } from '../menu-sidebar/menu-sidebar.component';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import { AccountTMDB } from '../../models/tmdb-account.model';
import { selectUserData } from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { getUserData, removeUser } from '../../store/actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    MenuSidebarComponent,
    AvatarModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent extends ClearObservable implements OnInit {
  constructor(
    private store: Store,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {
    super();
  }

  selectUser$ = this.store.select(selectUserData);
  user: AccountTMDB | null = null;

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to log out of your account?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have logged out of the account',
          life: 3000,
        });
        this.store.dispatch(removeUser());
        this.store.dispatch(getUserData());
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }

  ngOnInit(): void {
    this.selectUser$.pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.user = response;
    });
  }
}
