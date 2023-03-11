import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddServerUrlInterceptor } from './providers/interceptors/add-server-url-interceptor.service';
import { AuthInterceptor } from './providers/interceptors/auth-interceptor.service';
import { ErrorResponseInterceptor } from './providers/interceptors/error-response-interceptor.service';


export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AddServerUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true },
];

@NgModule({
    declarations: [AppComponent],

    imports: [
      BrowserModule, 
      IonicModule.forRoot({mode:'ios'}), 
      AppRoutingModule, 
      HttpClientModule,
      FormsModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        httpInterceptorProviders,
    ],
    bootstrap: [AppComponent],
    exports: [ReactiveFormsModule, FormsModule, BrowserModule]
})
export class AppModule {}

