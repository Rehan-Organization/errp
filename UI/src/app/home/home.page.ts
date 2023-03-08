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
<<<<<<< HEAD
    constructor(
        private http: HttpClient,
        private authService: AppAuthService,
        private router: Router
    ) {
        this.http.get('/test').subscribe(
            () => {
                console.log('TEST SUCCESS');
            },
            (error) => {
                console.error('TEST ERROR', error);
            }
        );
=======

    loggedInUser: LoggedInUser | undefined;

    constructor(private authService: AppAuthService, private userContext: LoggedInUserContext) {}

    ngOnInit() {
        this.loggedInUser = this.userContext.getLoggedInUser();
>>>>>>> main
    }

    logout() {
        this.authService.logout().subscribe(() => {});
<<<<<<< HEAD
    }
    viewAwards() {
        this.router.navigate(['/home/awardTypes']);
    }
    leaderBoard() {
        this.router.navigate(['/home/leaderboard']);
=======
>>>>>>> main
    }
}
