import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ErrpHeaders {
    'x-auth-token'?: string;
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private xAuthToken: string = '';

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.xAuthToken = <string> sessionStorage.getItem('sessionId');

        let authReq = req;

        if (this.xAuthToken) {
            let nsheaders: ErrpHeaders = {};
            nsheaders['x-auth-token'] = this.xAuthToken.toString();

            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            authReq = req.clone({
                setHeaders: {
                    'x-auth-token': nsheaders['x-auth-token'],
                },
            });
        }

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}
