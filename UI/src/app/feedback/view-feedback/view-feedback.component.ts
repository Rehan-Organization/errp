import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';
import { Observable, Subscription, interval } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Component({
    selector: 'app-view-feedback',
    templateUrl: './view-feedback.component.html',
    styleUrls: ['./view-feedback.component.scss'],
})
export class ViewFeedbackComponent implements OnInit {
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
    deleteFeedback(feedback: Feedback) {
        // if (confirm('Are you sure you want to delete ? ')) {
        //     this.feedbackService.removeFeedback(feedback.id).subscribe((feedback) => {
        //         if (feedback == null) alert('Failed to delete');
        //         else {
        //             alert('Successfully deleted feedback');
        //             this.feedbacks = this.feedbacks.filter(
        //                 (newFeedback) => newFeedback.id != feedback.id
        //             );
        //         }
        //     });
        // }
    }
    updateFeedback(feedback: Feedback) {
        // alert(feedback.id);
        console.log(feedback);
        this.router.navigate(['home/viewFeedback/add']);
    }
}

