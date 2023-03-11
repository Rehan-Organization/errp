import { ToastService } from 'src/app/errp-service/toast.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppAuthService } from './../providers/app-auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    constructor(
        private authService: AppAuthService,
        private router: Router,
        private toaster: ToastService
    ) {}

    login(form: any) {
        console.log(form.value);
        this.authService.login(form.value).subscribe(
            (res) => {
                this.navigatePostLogin();
            },
            (error) => {
                console.error(error.error);
                this.toaster.showErrorToast(error.error);
            }
        );
    }

    private navigatePostLogin() {
        this.router.navigateByUrl('home', { replaceUrl: true });
    }
}
