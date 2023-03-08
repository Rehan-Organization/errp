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

    feedbackId?:number;
    urlId?:any;
    fetchedFeedback:Feedback[]=[];
    ngOnInit() {
      this.urlId=this.route.snapshot.paramMap.get("id");
      console.log("url id"+this.urlId);
      if(this.urlId!=null)
      {
        this.feedbackService.fetchFeedback(this.urlId).subscribe(feedback=> this.feedback=feedback);
      }
      else{
            this.feedback.title="";
            this.feedback.description="";
      }
      // this.route.snapshot.paramMap('id')
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

    updateFeedback(){
      this.feedbackService.updateFeedback(this.feedback,this.urlId).subscribe();
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
