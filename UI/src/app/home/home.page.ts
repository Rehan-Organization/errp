import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '../providers/app-auth.service';
import { LoggedInUser } from '../providers/logged-in-user.model';
import { LoggedInUserContext } from './../providers/logged-in-user-context.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    loggedInUser: LoggedInUser | undefined;
    constructor(
        private authService: AppAuthService,
        private router: Router,
        private userContext: LoggedInUserContext
    ) {
    }
    ngOnInit() {
        this.loggedInUser = this.userContext.getLoggedInUser();
    }

    myAchievement() {
        this.router.navigate(['/home/Achievement']);
    }
    myAwards() {
        this.router.navigate(['/home/Awards']);
    }
    viewFeedBack() {
        this.router.navigate(['home/viewFeedback']);
    }

    logout() {
        this.authService.logout().subscribe(() => {});
    }
    viewAwards() {
        this.router.navigate(['/home/awardTypes']);
    }
    leaderBoard() {
        this.router.navigate(['/home/leaderboard']);
    }
}
