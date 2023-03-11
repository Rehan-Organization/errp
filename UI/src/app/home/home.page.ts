import { LoggedInUserContext } from './../providers/logged-in-user-context.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '../providers/app-auth.service';
import { LoggedInUser } from '../providers/logged-in-user.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    loggedInUser: LoggedInUser | undefined;
    constructor(
        private http: HttpClient,
        private authService: AppAuthService,
        private router: Router,
        private userContext: LoggedInUserContext
    ) {
        this.http.get('/test').subscribe(
            () => {
                console.log('TEST SUCCESS');
            },
            (error) => {
                console.error('TEST ERROR', error);
            }
        );

        }
    ngOnInit() {
        this.loggedInUser = this.userContext.getLoggedInUser();

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
