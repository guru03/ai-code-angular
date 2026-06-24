import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appReducer } from './store/app.reducer';
import { QuestionEffects as AngularQuestionEffects } from './angular/state/angular.effetcts';
import { QuestionEffects as JavascriptQuestionEffects } from './javascript/state/javascript.effetcts';
import { provideRouterStore } from '@ngrx/router-store';
import { QuestionBankEffects } from './features/question-bank-component/state/question-bank.effects';
import { CodingEffects } from './features/coding/state/coding.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideStore(appReducer),
    provideEffects([QuestionBankEffects, CodingEffects, AngularQuestionEffects, JavascriptQuestionEffects]),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideRouterStore()
  ]
};
