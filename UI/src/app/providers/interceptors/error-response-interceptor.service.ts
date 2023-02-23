import { ToastController } from '@ionic/angular';
import { AppAuthService } from './../app-auth.service';

import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URLS } from '../../constants/urls.contants';

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {

    constructor(private authSvc: AppAuthService, private toaster: ToastController) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(
                catchError((err) => {
                    if (err.status === 401) {
                        let url: string = err.url;
                        if (!url.includes(URLS.LOGIN)) {
                            err.error = 'Oops, Looks like your session timed out! Please login and try again.';

                            this.toaster.create({
                                message: err.error,
                                color: 'danger'
                            }).then(t => t.present());      
                            
                            this.authSvc.logout().subscribe();
                        }
                    } else if (err.status === 404 || err.status === 500) {
                        err.error = 'Oops, Something went wrong!!! Please contact system administrator'

                        this.toaster.create({
                            message: err.error,
                            color: 'danger'
                        }).then(t => t.present());
                    }
                    return throwError(() => err);
                })
            );
    }

}
