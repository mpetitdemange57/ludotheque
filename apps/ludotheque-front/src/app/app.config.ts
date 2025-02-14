import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import {provideNativeDateAdapter} from "@angular/material/core";
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
      { provide: LOCALE_ID, useValue: 'fr-FR'},
    provideNativeDateAdapter(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimationsAsync(),
  ],
};
