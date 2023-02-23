import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../constants/urls.contants';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppAuthService {
    constructor(private http: HttpClient, private router: Router) { }

    login(creds: { userName: string, password: string }) {
        return new Observable((observer) => {
            this.http.post(URLS.LOGIN, { userName: creds.userName, password: creds.password }).subscribe((result: any) => {
                const sessionId = result.sessionId;
                this.setInSessionStorage(sessionId);
                observer.next();
                observer.complete();
            }, (error) => {
                observer.error(error);
            })
        });
    }

    private setInSessionStorage(sessionId: string) {
        sessionStorage.setItem('sessionId', sessionId);
    }

    logout() {
        return new Observable((observer) => {
            this.http.post(URLS.LOGOUT, {}).subscribe(() => {
                sessionStorage.clear();
                this.router.navigateByUrl('login', { replaceUrl: true });
                observer.next();
                observer.complete();
            }, (error) => {
                console.error('Error during Logout', error);
                observer.next();
                observer.complete();

            });
        })
    }
}