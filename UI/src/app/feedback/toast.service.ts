import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(private toaster: ToastController) {}

    showSuccessToast(title: string) {
        this.toaster
            .create({
                message: title,
                color: 'success',
                duration: 5000,
            })
            .then((toast) => {
                toast.present();
            });
    }

    showErrorToast(title: string) {
        this.toaster
            .create({
                message: title,
                color: 'danger',
                duration: 5000,
            })
            .then((toast) => {
                toast.present();
            });
    }
}
