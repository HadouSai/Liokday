import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobalErrorHandler } from './errors/global-error-handler.service';
import { ServerErrorInterceptor } from './errors/server-error.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GraphqlModule } from './graphql/graphql.module';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { SnackbarModule } from './components/reusables/snackbar/snackbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonImportsModule } from './components/common/common-imports.module';
import { InputsComponent } from './components/reusables/inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GraphqlModule,
    SnackbarModule,
    MatSnackBarModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // guardame los ultimos 25 estados
      logOnly: environment.production //para no manipular los estados los usuarios
    })
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler, },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
