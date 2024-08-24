import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopupComponent } from './login-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Store } from '@ngrx/store';

describe('LoginPopupComponent', () => {
  let component: LoginPopupComponent;
  let fixture: ComponentFixture<LoginPopupComponent>;
  let storeMock: any;
  let dialogRefMock: any;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
    };

    dialogRefMock = {
      close: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [
        LoginPopupComponent, // Standalone component should be in the imports array
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: DynamicDialogRef, useValue: dialogRefMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty fields', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('name')?.value).toBe('');
    expect(component.form.get('password')?.value).toBe('');
  });
});
