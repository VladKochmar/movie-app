import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MoviesReducer } from './store/reducer';
import { MoviesEffects } from './store/effects';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(DynamicDialogModule, BrowserAnimationsModule),
    provideHttpClient(),
    provideStore({ movieState: MoviesReducer }),
    provideEffects([MoviesEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    DialogService,
  ],
};
