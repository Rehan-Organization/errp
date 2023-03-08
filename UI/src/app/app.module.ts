import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddServerUrlInterceptor } from './providers/interceptors/add-server-url-interceptor.service';
import { AuthInterceptor } from './providers/interceptors/auth-interceptor.service';
import { ErrorResponseInterceptor } from './providers/interceptors/error-response-interceptor.service';
import { FormsModule } from '@angular/forms';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AddServerUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true },
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
