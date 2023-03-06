import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
    selector: 'app-view-feedback',
    templateUrl: './view-feedback.component.html',
    styleUrls: ['./view-feedback.component.scss'],
})
export class ViewFeedbackComponent implements OnInit {
    private updateSubscription?: Subscription;
    constructor(private feedbackService: FeedbackService, private router: Router) {}
    employees: Employee[] = [];
    feedbacks: Feedback[] = [];
    options: string[] = ['My Feedbacks', 'Feedbacks Given By Me'];
    choosenOption: string = 'My Feedbacks';
    isMyFeedbacks?: number;
    searchEmployee: string = '';
    ngOnInit() {
        this.fetchFeedbacks();
    }
    fetchFeedbacks() {
        if (this.choosenOption == 'My Feedbacks') {
            this.isMyFeedbacks = 0;
            this.feedbackService
                .fetchAllFeedbacks(1)
                .subscribe((feedback) => (this.feedbacks = feedback));
        } else {
            this.isMyFeedbacks = 1;
            this.feedbackService
                .fetchAllFeedbacks(2)
                .subscribe((feedback) => (this.feedbacks = feedback));
        }
    }
    addFeedback() {
        this.router.navigate(['home/viewFeedback/add']);
    }
    deleteFeedback(feedback: Feedback) {
        if (confirm('Are you sure you want to delete ? ')) {
            this.feedbackService.removeFeedback(feedback.id).subscribe((feedback) => {
                if (feedback == null) alert('Failed to delete');
                else {
                    alert('Successfully deleted feedback');
                    this.feedbacks = this.feedbacks.filter(
                        (newFeedback) => newFeedback.id != feedback.id
                    );
                }
            });
        }
    }
    updateFeedback(feedback: Feedback) {
        alert(feedback.id);
    }
}

