import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';

@Component({
    selector: 'app-add-feedback',
    templateUrl: './add-feedback.component.html',
    styleUrls: ['./add-feedback.component.scss'],
})
export class AddFeedbackComponent implements OnInit {
    feedback: Feedback = {
        title: '',
        description: '',
    };

    employees: Employee[] = [];
    selectedValue?: Employee;
    constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) {}
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

    addFeedback(feedback: Feedback) {
        feedback.receiverId = { employeeId: this.selectedValue?.employeeId };
        this.feedbackService.saveFeedback(feedback).subscribe((feedbackResponse) => {
            console.log(feedbackResponse);
        });
    }
    fetchReportees() {
        this.feedbackService.getReportees().subscribe((reportee) => (this.employees = reportee));
    }

    updateFeedback() {
        this.feedbackService.updateFeedback(this.feedback, this.urlId).subscribe();
    }

    cancelForm() {
        this.feedbackService
            .fetchFeedback(this.urlId)
            .subscribe((feedback) => (this.feedback = feedback));
        console.log('shankar' + this.fetchedFeedback[0].title + ' ');
    }
}
