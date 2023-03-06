import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '../providers/app-auth.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
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
