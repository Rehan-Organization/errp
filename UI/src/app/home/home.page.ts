import { LoggedInUserContext } from './../providers/logged-in-user-context.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '../providers/app-auth.service';
import { LoggedInUser } from '../providers/logged-in-user.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    loggedInUser: LoggedInUser | undefined;

    constructor(private authService: AppAuthService, private userContext: LoggedInUserContext, private router: Router) { }

    ngOnInit() {
        this.loggedInUser = this.userContext.getLoggedInUser();
    }

    myAchievement() {
        this.router.navigate(["/home/Achievement"])
    }
    myAwards() {
        this.router.navigate(["/home/Awards"])
    }

    logout() {
        this.authService.logout().subscribe(() => { });
    }
}
