import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-add-feedback',
    templateUrl: './add-feedback.component.html',
    styleUrls: ['./add-feedback.component.scss'],
})
export class AddFeedbackComponent implements OnInit {
    employees: any = ['Avadhut Patil', 'Athrav Pandit', 'Adarsh Suryawanshi'];

    feedbackForm = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', [Validators.required, Validators.required]),
    });

    toast_cancel = this.toast.create({
        message: 'Canceled',
        duration: 5000,
        position: 'bottom',
        color: 'primary',
    });

    toast_success = this.toast.create({
        message: 'Feedback submitted successfully',
        duration: 5000,
        position: 'bottom',
        color: 'primary',
    });

    constructor(private alertController: AlertController, private toast: ToastController) {}

    async addFeedback() {
        const alert = await this.alertController.create({
            header: 'Confirm feedback',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: async () => {
                        (await this.toast_cancel).present();
                    },
                },
                {
                    text: 'OK',
                    role: 'confirm',
                    handler: async () => {
                        (await this.toast_success).present();
                    },
                },
            ],
        });

        await alert.present();
        const { role } = await alert.onDidDismiss();
    }

    cancel(){
     
    }

    ngOnInit() {}
}
