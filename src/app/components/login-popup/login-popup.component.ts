import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { Store } from '@ngrx/store';
import {
  authenticateUser,
  getUserData,
  setUserDataToLocalStorage,
} from '../../store/actions';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [
    DialogModule,
    DynamicDialogModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DialogService],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent implements OnInit {
  constructor(private store: Store, private ref: DynamicDialogRef) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const userData = {
        name: this.form.value['name'],
        password: this.form.value['password'],
      };

      this.store.dispatch(setUserDataToLocalStorage({ userData }));
      this.store.dispatch(getUserData());
      this.store.dispatch(
        authenticateUser({
          username: userData.name,
          password: userData.password,
        })
      );

      this.ref.close(userData);
    }
  }
}
