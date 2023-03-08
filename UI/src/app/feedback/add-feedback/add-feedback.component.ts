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
    // feedbackForm = new FormGroup({
    //     title: new FormControl('', Validators.required),
    //     description: new FormControl('', [Validators.required, Validators.required]),
    // });


    constructor(
        private alertController: AlertController,
        private toast: ToastController,
        private feedbackService: FeedbackService,
        private route: ActivatedRoute
    ) {}

    feedback: Feedback = {};

    employees: Employee[] = [];
    selectedValue: number = 5;

    ngOnInit() {
        this.fetchReportees();
    }

    addFeedback(feedback: Feedback) {
        if (this.feedback.employeeName?.trim()) {
            this.showAlert('Employee name cannot be empty!');
        } else if (!this.feedback.title?.trim()) {
            this.showAlert('Title cannot be empty!');
        } else if (!this.feedback.description?.trim()) {
            this.showAlert('Description cannot be empty!');
        }else{
            alert(this.employees.length);
            feedback.receiverId = this.selectedValue;
            this.feedbackService.saveFeedback(feedback).subscribe((feedbackResponse) => {
            console.log(feedbackResponse);

            this.feedback.title = '';
            this.feedback.description = '';

        });
        }

        
    }
    fetchReportees() {
        this.feedbackService.getReportees().subscribe((reportee) => (this.employees = reportee));
    }

    cancelForm() {
        //this.employees[employeeName] = '';
        this.feedback.title = '';
        this.feedback.description = '';
    }

    showAlert(message: string) { this.alertController
         .create({header: 'Alert', 
         message: message,
         buttons: [ 
            {text: 'Ok',},
         ], }) .then((res) => { res.present(); });}
}
