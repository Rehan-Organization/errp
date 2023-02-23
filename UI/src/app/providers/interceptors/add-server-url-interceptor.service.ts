import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../../constants/urls.contants';

export interface ErrpHeaders {
    'x-auth-token'?: string;
}

@Injectable()
export class AddServerUrlInterceptor implements HttpInterceptor {

    baseUrl: string = '';

    constructor() { 
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.init();

        let requestType = req.method.toUpperCase();
        let serverUrl;
        switch (requestType) {
            case 'GET': {
                serverUrl = this.interceptGet(req);
                break;
            }
            case 'PUT': {
                serverUrl = this.interceptPost(req);
                break;
            }
            case 'POST': {
                serverUrl = this.interceptPost(req);
                break;
            }
            case 'PATCH': {
                serverUrl = this.interceptPatch(req);
                break;
            }
            case 'DELETE': {
                serverUrl = this.interceptDelete(req);
                break;
            }
        }

        // clone request and replace 'http://' with 'https://' at the same time
        const secureReq = req.clone({
            url: serverUrl
        });
        // send the cloned, "secure" request to the next handler.
        return next.handle(secureReq);
    }

    private init() {
        this.baseUrl = URLS.base;
    }

    private protectUrl(url: string): string {
        return this.baseUrl + url;
    }

    private interceptGet(req: HttpRequest<any>): string {
        let url = req.url;
        if (url && !(url.startsWith('./assets/'))) {
            url = this.protectUrl(url);
        }
        return url;
    }

    private interceptPost(req: HttpRequest<any>): string {
        let url = req.url;
        if (url) {
            url = this.protectUrl(url);
        }
        return url;
    }

    private interceptDelete(req: HttpRequest<any>): string {
        let url = req.url;
        if (url) {
            url = this.protectUrl(url);
        }
        return url;
    }

    private interceptPatch(req: HttpRequest<any>): string {
        let url = req.url;
        if (url) {
            url = this.protectUrl(url);
        }
        return url;
    }
}