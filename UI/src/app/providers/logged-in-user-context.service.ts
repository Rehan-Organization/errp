import { Injectable } from '@angular/core';
import { LoggedInUser } from './logged-in-user.model';

@Injectable({providedIn: 'root'})
export class LoggedInUserContext {

    private loggedInUser: LoggedInUser | undefined;

    constructor() { }
    
    getLoggedInUser() {
        return this.loggedInUser;
    }

    public setLoggedInUser(user: LoggedInUser) {
        this.loggedInUser = user;
    }

    public clearUserContext() {
        this.loggedInUser = undefined;
    }
}