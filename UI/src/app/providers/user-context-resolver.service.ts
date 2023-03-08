import { LoggedInUserContext } from './logged-in-user-context.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoggedInUser } from './logged-in-user.model';

@Injectable({ providedIn: 'root' })
export class UserContextResolver implements Resolve<LoggedInUser> {

    constructor(private http: HttpClient, private userContext: LoggedInUserContext) {}

    resolve(route: ActivatedRouteSnapshot): Observable<LoggedInUser> | Promise<LoggedInUser> | LoggedInUser {
        return this.http.get<LoggedInUser>('/userContext').pipe(
            tap(user => {
                this.userContext.setLoggedInUser(user);
            })
        )
    }
}