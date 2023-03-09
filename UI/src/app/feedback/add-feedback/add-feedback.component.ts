import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
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
    constructor(
        private alertController: AlertController,
        private toast: ToastController,
        private feedbackService: FeedbackService,
        private route: ActivatedRoute
    ) {}

    feedback: Feedback = {
        senderId: {},
        receiverId: {}
    };

    employees: Employee[] = [];
    selectedValue: number = 5;

    feedbackId?: number;
    urlId?: any;
    fetchedFeedback: Feedback[] = [];

    ngOnInit() {
        this.urlId = this.route.snapshot.paramMap.get('id');
        console.log('url id' + this.urlId);
        if (this.urlId != null) {
            this.feedbackService
                .fetchFeedback(this.urlId)
                .subscribe((feedback) => (this.feedback = feedback));
        } else {
            this.feedback.title = '';
            this.feedback.description = '';
        }
        // this.route.snapshot.paramMap('id')
        this.fetchReportees();
    }

    async addFeedback(feedback: Feedback) {
        if (this.feedback.receiverId.employeeName?.trim()) {
            this.showAlert('Employee name cannot be empty!');
        } else if (!this.feedback.title?.trim()) {
            this.showAlert('Title cannot be empty!');
        } else if (!this.feedback.description?.trim()) {
            this.showAlert('Description cannot be empty!');
        } else {
            const alert = await this.alertController.create({
                header: 'Confirm feedback ',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            //handle canncel toast
                        },
                    },
                    {
                        text: 'Submit',
                        role: 'confirm',
                        handler: () => {
                            feedback.receiverId.employeeId = this.selectedValue;
                            this.feedbackService
                                .saveFeedback(feedback)
                                .subscribe((feedbackResponse) => {
                                    console.log(feedbackResponse);

                                    this.feedback.title = '';
                                    this.feedback.description = '';
                                });
                        },
                    },
                ],
            });
            await alert.present();
        }
    }
    fetchReportees() {
        this.feedbackService.getReportees().subscribe((reportee) => (this.employees = reportee));
    }

    updateFeedback() {
        this.feedbackService.updateFeedback(this.feedback, this.urlId).subscribe();
    }

    cancelForm() {
        //this.employees[employeeName] = '';
        this.feedback.title = '';
        this.feedback.description = '';
    }

    showAlert(message: string) {
        this.alertController
            .create({
                header: 'Alert',
                message: message,
                buttons: [{ text: 'Ok' }],
            })
            .then((res) => {
                res.present();
            });
    }
}
