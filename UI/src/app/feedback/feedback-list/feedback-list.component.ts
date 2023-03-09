import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';
import { Observable, Subscription, interval } from 'rxjs';
@Component({
    selector: 'app-feedback-list',
    templateUrl: './feedback-list.component.html',
    styleUrls: ['./feedback-list.component.scss'],
})
export class FeedbackListComponent implements OnInit {
    private updateSubscription?: Subscription;
    constructor(
        private feedbackService: FeedbackService,
        private router: Router,
        private alertController: AlertController
    ) {}
    employees: Employee[] = [];
    feedbacks: Feedback[] = [];
    options: string[] = ['My Feedbacks', 'Feedbacks Given By Me'];
    choosenOption: string = 'My Feedbacks';
    isMyFeedbacks?: boolean;
    searchEmployee: string = '';
    ngOnInit() {
        this.fetchFeedbacks();
    }
    fetchFeedbacks() {
        if (this.choosenOption == 'My Feedbacks') {
            this.isMyFeedbacks = false;
            this.feedbackService
                .fetchAllFeedbacks(this.isMyFeedbacks)
                .subscribe((feedback) => (this.feedbacks = feedback));
        } else {
            this.isMyFeedbacks = true;
            this.feedbackService
                .fetchAllFeedbacks(this.isMyFeedbacks)
                .subscribe((feedback) => (this.feedbacks = feedback));
        }
    }
    addFeedback() {
        this.router.navigate(['home/viewFeedback/add']);
    }

    async deleteFeedback(feedback: Feedback) {
        const alert = await this.alertController.create({
            header: 'Are you sure you want to delete ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {},
                },
                {
                    text: 'Delete',
                    role: 'confirm',
                    handler: () => {
                        this.feedbackService.removeFeedback(feedback.id).subscribe((feedback) => {
                            this.feedbacks = this.feedbacks.filter(
                                (newFeedback) => newFeedback.id != feedback.id
                            );
                        });
                    },
                },
            ],
        });
        await alert.present();
    }
    updateFeedback(feedback: Feedback) {
        this.router.navigate(['home/viewFeedback/add/' + feedback.id]);
    }
}
